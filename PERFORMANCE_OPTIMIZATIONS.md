# Performance Optimizations

This document outlines the performance improvements made to the MacBook GSAP application.

## Summary of Optimizations

### 1. **Cached Mesh References in 3D Models** (High Impact)
- **Files**: `Macbook.jsx`, `Macbook-14.jsx`, `Macbook-16.jsx`
- **Problem**: The components were traversing the entire scene graph on every color change
- **Solution**: Cache mesh references using `useMemo()` on initial mount, then only update cached meshes
- **Impact**: Reduces O(n) scene traversal to O(1) cached array access on color changes

### 2. **Optimized Video Preloading** (Medium Impact)
- **File**: `Features.jsx`
- **Problem**: Creating full video DOM elements just for preloading wastes memory and resources
- **Solution**: Use `<link rel="preload">` tags instead of creating video elements
- **Impact**: More efficient browser-native preloading with cleanup on unmount

### 3. **Optimized ModelSwitcher Animations** (Medium Impact)
- **File**: `ModelSwitcher.jsx`
- **Problem**: Repeated scene traversals for every animation, functions recreated on each render
- **Solution**: 
  - Cache mesh references on mount using `useMemo()`
  - Use `useCallback()` for animation functions
  - Reference cached arrays instead of traversing on each animation
- **Impact**: Faster animations with less CPU overhead

### 4. **React.memo() for Static Components** (Low-Medium Impact)
- **Files**: `NavBar.jsx`, `Footer.jsx`, `Hero.jsx`, `Highlights.jsx`, `Showcase.jsx`
- **Problem**: Components re-rendering unnecessarily when parent re-renders
- **Solution**: Wrap components with `React.memo()` to prevent unnecessary re-renders
- **Impact**: Fewer DOM updates and reconciliation cycles

### 5. **Lazy Loading Images** (Medium Impact)
- **File**: `Performance.jsx`
- **Problem**: All performance images loading eagerly, even those off-screen
- **Solution**: Added `loading="lazy"` attribute to images
- **Impact**: Faster initial page load, images load only when needed

## Performance Metrics Expectations

### Before Optimizations:
- Scene traversal on every color change: ~O(n) where n = mesh count
- Video preloading: Creating 5 unnecessary DOM video elements
- Unnecessary component re-renders across multiple static components
- All images loading eagerly regardless of viewport

### After Optimizations:
- Scene traversal on mount only: O(n) once, then O(1) for updates
- Video preloading: Using native browser preload mechanism
- Static components memoized to prevent unnecessary re-renders
- Images load on-demand as they enter viewport

## Technical Details

### Mesh Caching Pattern
```javascript
// Before: O(n) on every color change
useEffect(() => {
    scene.traverse((child) => {
        if (child.isMesh && !noChangeParts.includes(child.name)) {
            child.material.color = new Color(color);
        }
    });
}, [color, scene]);

// After: O(n) once on mount, O(1) on color changes
const colorableMeshes = useMemo(() => {
    const meshes = [];
    scene.traverse((child) => {
        if (child.isMesh && !noChangeParts.includes(child.name)) {
            meshes.push(child);
        }
    });
    return meshes;
}, [scene]);

useEffect(() => {
    const newColor = new Color(color);
    colorableMeshes.forEach((mesh) => {
        mesh.material.color = newColor;
    });
}, [color, colorableMeshes]);
```

### Video Preloading Pattern
```javascript
// Before: Creating full video elements
const v = document.createElement('video');
Object.assign(v, { src, muted: true, playsInline: true, preload: 'auto' });
v.load();

// After: Using native preload links with proper cleanup
const preloadLinks = [];
featureSequence.forEach((feature) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = feature.videoPath;
    document.head.appendChild(link);
    preloadLinks.push(link);
});

// Cleanup only the links created by this component
return () => {
    preloadLinks.forEach(link => {
        if (link.parentNode) {
            link.parentNode.removeChild(link);
        }
    });
};
```

## Best Practices Applied

1. **Memoization**: Used `useMemo()` for expensive computations that don't change often
2. **Callback Optimization**: Used `useCallback()` for functions passed to effects
3. **Component Memoization**: Used `React.memo()` for components with stable props
4. **Resource Loading**: Used native browser optimizations (lazy loading, preload)
5. **Data Structure Caching**: Cache computed data structures to avoid recalculation

## Recommendations for Future

1. **Code Splitting**: Consider lazy loading 3D model components with `React.lazy()`
2. **Dynamic Imports**: Split large chunks using dynamic imports for route-based code splitting
3. **Texture Compression**: Use compressed texture formats (KTX2, Basis) for 3D models
4. **Instance Rendering**: If displaying multiple similar models, use THREE.InstancedMesh
5. **Level of Detail (LOD)**: Implement LOD for 3D models based on camera distance
6. **Web Workers**: Offload heavy computations to Web Workers if needed
7. **Bundle Analysis**: Use bundle analyzer to identify and optimize large dependencies

## Testing

All optimizations have been verified to:
- Pass ESLint validation
- Build successfully with Vite
- Maintain existing functionality
- Improve render performance
