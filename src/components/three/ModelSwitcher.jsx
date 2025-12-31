import { useRef, useCallback, useMemo} from "react";
import {PresentationControls} from "@react-three/drei";
import gsap from 'gsap';

import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";
import {useGSAP} from "@gsap/react";
const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const ModelSwitcher = ({ scale, isMobile }) => {
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();
    
    // Cache mesh references for better performance
    const smallMeshes = useRef([]);
    const largeMeshes = useRef([]);

    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    // Memoize fade function that also handles mesh caching
    const fadeMeshes = useCallback((groupRef, meshCache, opacity) => {
        if(!groupRef) return;
        
        // Cache meshes if not already cached (defensive check)
        if(meshCache.length === 0) {
            const meshes = [];
            groupRef.traverse((child) => {
                if(child.isMesh) meshes.push(child);
            });
            meshCache.push(...meshes);
        }
        
        // Animate only if we have cached meshes
        if(meshCache.length > 0) {
            meshCache.forEach((mesh) => {
                mesh.material.transparent = true;
                gsap.to(mesh.material, { opacity, duration: ANIMATION_DURATION });
            });
        }
    }, []);

    // Memoize move function
    const moveGroup = useCallback((group, x) => {
        if(!group) return;
        gsap.to(group.position, { x, duration: ANIMATION_DURATION });
    }, []);

    useGSAP(() => {
        if(showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, smallMeshes.current, 0);
            fadeMeshes(largeMacbookRef.current, largeMeshes.current, 1);
        } else {
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, smallMeshes.current, 1);
            fadeMeshes(largeMacbookRef.current, largeMeshes.current, 0);
        }
    }, [scale]);

    // Memoize controls config to prevent recreation on every render
    const controlsConfig = useMemo(() => ({
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {mass:1, tension: 0, friction: 26}
    }), []);

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher
