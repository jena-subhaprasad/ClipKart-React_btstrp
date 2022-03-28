import React from 'react'
import {Card ,Button} from 'react-bootstrap'
import { CartState } from './utility/Context'
const IndividualProduct = ({prod}) => {
    //destructuring cart and it dispath
    const{
        state:{cart},
        dispatch
    }=CartState()
  return (
    <>
       <div className='productcard'>
          <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={prod.image} />
              <Card.Body>
                  <Card.Title>{ prod.name}</Card.Title>
                  <Card.Subtitle>
                    <span>₹{prod.price.split(".")[0]}</span>
                        {prod.fastDelivery?<div>Fast Delivery</div>:<div>7 days delivery</div>}
                 </Card.Subtitle>
                    {cart.some(p=>p.id===prod.id)?
                          (<Button variant="danger" onClick={() => {
                                  dispatch({
                                      type: "remove_from_cart",
                                      payload: prod
                                  })
                              }} >Remove from cart</Button>):
                  (<Button variant="primary" disabled={!prod.inStock} onClick={() => {
                      dispatch({
                          type: "add_to_cart",
                          payload: prod
                      })
                  }} >{prod.inStock ? "Add to Cart" : "out of stock"}</Button>
                    )}
                 
                 
              </Card.Body>
          </Card>
          </div>

          
      </>
  )
}

export default IndividualProduct