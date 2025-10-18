import React from 'react'
import clsx from 'clsx'
import useMacbookStore from '../store'
import {Canvas} from '@react-three/fiber'
import Macbook14 from '../models/Macbook-14'

import StudioLights from './StudioLights'
import Modelswitcher from './ModelSwitcher'
import {useMediaQuery} from 'react-responsive'

const ProductViewer = () => {
    const { color, setColor } = useMacbookStore();
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
  return (
    <section id ="product-viewer">
        <h2>Take a closer look.</h2>
        <div className="controls">
            <p className='info'>MacBook Pro 14-inch and 16-inch</p>
            <div className="flex items-center justify-center gap-5 mt-5">
                <div className='color-control'>
                    <div 
                       onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
                            />
                    <div  onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}/>
                </div>
                <div className='size-control'>
                    <div><p>14-inch</p></div>
                    <div><p>16-inch</p></div>
                </div>
             </div>
        </div>
        <p className="text-white text-4xl">Render Canvas</p>
        

         <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
                <StudioLights />

                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
            </Canvas>
         </section>
  )

}

export default ProductViewer
