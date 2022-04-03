import React, { createContext, useContext, useReducer } from 'react'
import faker from "@faker-js/faker";
import {cartReducer,filterReducer} from './Reducer'


const Cart=createContext()

faker.seed(99);

const Context = ({children}) => {

    const prod = [...Array(30)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5])
      }));

          //emptycart for cart
          //reduce for cart and 

      const[state,dispatch]=useReducer(cartReducer,{
          products:prod,
          cart:[],
          
      })
  //my filter reduce for comparing
      const filterinit={
          byprice:"",
          instock:false,
          isfastdelivery:false,
          searchtext:""

      }

      const[filterstate,filterdispatch]=useReducer(filterReducer,filterinit)
    
  return (
      <Cart.Provider value={{state,dispatch,filterstate,filterdispatch}}>
           {children}
      </Cart.Provider>
  
  )
}

export default Context
export const CartState=()=>
{
    return useContext(Cart)
}
