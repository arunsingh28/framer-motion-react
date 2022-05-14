import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'
import images from './import/image'
import { HTMLMotionComponents } from 'framer-motion/types/render/html/types';

function App() {

  useEffect(() => {
    document.title = "Slider"

  },[])

  const [width, setWidth] = useState(0)

  const carousel = useRef<HTMLDivElement | any>()

  return (
    <div className="App">
      <motion.div ref={carousel} className='carousel' >
        <motion.div drag="x" dragConstraints={{ right: 0 , left: -1907}} className='inner-carousel'>
          {
            images.map(image => {
              return (
                <motion.div className='item'>
                  <img src={image} height={500} alt={image} />
                </motion.div>
              )
            })
          }
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
