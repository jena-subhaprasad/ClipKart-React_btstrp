export const cartReducer = (state, action) => {
    switch (action.type) {
    case "add_to_cart":
        return {...state,cart:[...state.cart,{...action.payload,qty:1}]}

        case "remove_from_cart": 
        return{
            ...state,
            cart:state.cart.filter((e)=>e.id!==action.payload.id)
        }

        case "add_quantity":
    return{
      ...state,cart:state.cart.filter((e)=> e.id===action.payload.id?e.qty=action.payload.qty:e.qty)
    }
    
      default:
        return state;
    }
  };


  export const filterReducer=(state,action)=>{

    switch(action.type){
      case "bystock":
      return {...state,instock:!state.instock}
      case "byprice":
        return {...state,byprice:action.payload}
        case "byfastdelivery":
          return{...state,isfastdelivery:!state.isfastdelivery}
          case "bysearch":
        return {...state,searchtext:action.payload}
        case "clear":
          return {byprice:"",
          instock:false,
          isfastdelivery:false,
          searchtext:"" }

         default:
           return state   
    }

  }