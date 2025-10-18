import { useEffect , useRef, useState } from "react";


const Hero = ({ onBuy }) => {
        const videoRef=useRef();
       const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        useEffect(()=>{
         if(videoRef.current)
                 videoRef.current.playbackRate=3;
     
        },[]);

        const handleBuy = async () => {
            // If parent provided an onBuy callback, delegate to it.
            if (onBuy) {
                try {
                    setError(null);
                    setLoading(true);
                    await Promise.resolve(onBuy());
                } catch (err) {
                    setError(err?.message || 'Purchase failed');
                } finally {
                    setLoading(false);
                }
                return;
            }

            // Default behavior: navigate to a purchase page
            try {
                setError(null);
                setLoading(true);
                window.location.href = '/buy';
            } catch (err) {
                setError(err?.message || 'Navigation failed');
            } finally {
                setLoading(false);
            }
        };

        return (
                <section id="hero">
                        <div>
                    <h1>MacBook Pro</h1>
                    <img src="/title.png" alt="MacBook Pro" />


                        </div>
                        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
                        <button onClick={handleBuy} disabled={loading} aria-busy={loading}>{loading ? 'Processing…' : 'Buy'}</button>
                        {error && <p role="alert" style={{color: 'red'}}>{error}</p>}
                        <p>Description of the MacBook Pro features and specifications.</p>
                </section>
        )
}
export default Hero