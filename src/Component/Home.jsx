import React from 'react'
import IndividualProduct from './IndividualProduct'
import { CartState } from './utility/Context'

import Filter from './Filter'
import  './styles.css'
const Home = () => {
  const {state,filterstate}=CartState()

  //ceating logic to compare and tranform my main product state

  const afterfilterstate=()=>{
    let mybufferstate=state.products
   
    if (filterstate.byprice) {
      mybufferstate = mybufferstate.sort((a, b) =>
      filterstate.byprice === "yes" ? a.price - b.price : b.price - a.price
      );
    }

  
     if(filterstate.isfastdelivery){
      mybufferstate=mybufferstate.filter((e)=> e.fastDelivery)
    }
    if(!filterstate.instock)
    {
      mybufferstate=mybufferstate.filter((e)=> e.inStock)
    }

    // if(){

    // }
    return   mybufferstate
  }





  return (<>
    
    <div  className="home">
         <div><Filter/></div>
    <div >
      <div className='containproduct'>
        {
      afterfilterstate().map((e)=>{
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