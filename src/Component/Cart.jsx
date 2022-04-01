import React, { useEffect, useState } from 'react'
import { Button, ListGroup,Row,Col ,Image} from 'react-bootstrap'
import { CartState } from './utility/Context'

const Cart = () => {
  const { state: { cart }, dispatch } = CartState()
  const [total, setTotal] = useState(0)

  useEffect(
    () => {
      setTotal(cart.reduce((acc, cur) => acc + Number(cur.price), 0))
    }, [cart]
  )
  return (
    <div className='home'>

      <div className='containproduct'>
      <ListGroup>
          {cart.map((e) => (
            <ListGroup.Item key={e.id}>
              <Row>
              <Col md={2}>
                  <Image src={e.image} alt={e.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{e.name}</span>
                </Col>
                <Col md={2}>₹ {e.price}</Col>  

                 </Row>
               
            </ListGroup.Item>
          ))}
        </ListGroup>
    
      </div>
      <div className='filters summary'>
        <span className='tittle'>
          Subtotal({cart.length}) items
        </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          Total:{total}
        </span>
        <Button>proceed to check out</Button>
      </div>
    </div>
  )
}

export default Cart