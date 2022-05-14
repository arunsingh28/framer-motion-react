import React, { useEffect } from 'react';
import { motion } from 'framer-motion'
import images from './import/image'

function App() {

  useEffect(() => {
    document.title = "Slider"
  })

  return (
    <div className="App">
      <motion.div className='carousel'>
        <motion.div className='inner-carousel'>
          {
            images.map(image =>{
              return(
                <img src={image} height={500}/>
              )
            })
          }
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
