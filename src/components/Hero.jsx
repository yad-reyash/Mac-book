import { useEffect , useRef } from "react";

const Hero = () => {
    const videoRef=useRef(null);

    useEffect(()=>{
     if(videoRef.current)
         videoRef.current.playbackRate=2;
     
    },[]);
}
export default Hero