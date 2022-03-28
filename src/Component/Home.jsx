import React from 'react'
import IndividualProduct from './IndividualProduct'
import { CartState } from './utility/Context'

import Filter from './Filter'
import  './styles.css'
const Home = () => {
  const {state}=CartState()

  return (<>
    
    <div  className="home">
         <div><Filter/></div>
    <div >
      <div className='containproduct'>
        {
      state.products.map((e)=>{
        return <IndividualProduct key={e.id} prod={e}/>
        
      })
      }
      </div>
      </div>
    
    </div>
      
   
    </>
  )
}

export default Home