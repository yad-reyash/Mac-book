import { useRef, useCallback, useEffect} from "react";
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

    // Memoize fade function to avoid recreating on each render
    const fadeMeshes = useCallback((meshes, opacity) => {
        if(!meshes || meshes.length === 0) return;
        
        meshes.forEach((mesh) => {
            mesh.material.transparent = true;
            gsap.to(mesh.material, { opacity, duration: ANIMATION_DURATION });
        });
    }, []);

    // Memoize move function
    const moveGroup = useCallback((group, x) => {
        if(!group) return;
        gsap.to(group.position, { x, duration: ANIMATION_DURATION });
    }, []);

    // Cache meshes on mount
    useEffect(() => {
        if(smallMacbookRef.current && smallMeshes.current.length === 0) {
            smallMacbookRef.current.traverse((child) => {
                if(child.isMesh) smallMeshes.current.push(child);
            });
        }
        if(largeMacbookRef.current && largeMeshes.current.length === 0) {
            largeMacbookRef.current.traverse((child) => {
                if(child.isMesh) largeMeshes.current.push(child);
            });
        }
    }, []);

    useGSAP(() => {
        if(showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacbookRef.current, 0);

            fadeMeshes(smallMeshes.current, 0);
            fadeMeshes(largeMeshes.current, 1);
        } else {
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMeshes.current, 1);
            fadeMeshes(largeMeshes.current, 0);
        }
    }, [scale, showLargeMacbook, fadeMeshes, moveGroup]);

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {mass:1, tension: 0, friction: 26}
    }

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
