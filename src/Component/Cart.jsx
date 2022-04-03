import React, { useState } from 'react'
import { Button, ListGroup, Row, Col, Image, Form, Modal } from 'react-bootstrap'
import { CartState } from './utility/Context'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Addressform from './addressform'


const Cart = () => {
  const { state: { cart }, dispatch } = CartState()
  const [mod, setMod] = useState(false)
  const [secmod, setSecmod] = useState(false)

  const handlemodal = () => {
    setMod(!mod)
   
  }
  const handlesecondmodal = () => {
    setSecmod(!secmod)
    console.log(secmod)
  }
  const refresh=()=> {
    window.location.reload(true);
  }

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
                <Col>
                  <Form.Control
                    as="select"

                    onClick={(x) => {
                      dispatch({
                        type: "add_quantity",
                        payload: {
                          id: e.id,
                          qty: x.target.value
                        }
                      })
                    }}
                  >
                    {[...Array(e.inStock)].map((e, idx) => { return <option key={idx + 1}>{idx + 1}</option> })}
                  </Form.Control>
                </Col>
                <Col>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "remove_from_cart",
                        payload: e,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button></Col>

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
          Total:₹{cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0)}
        </span>
        {/* c----- */}
        <Button onClick={handlemodal}>Proceed to Checkout</Button>
        <Modal
          show={mod}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header  >

            <Modal.Title id="contained-modal-title-vcenter">
              Address detail
            </Modal.Title>
            <button onClick={handlemodal} className='x'><h3 className='x'>X</h3></button>
          </Modal.Header>
          <Modal.Body>
            <Addressform handlesecmodal={handlesecondmodal} handlemodal={handlemodal} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handlemodal}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={secmod} >
          <Modal.Header >
            <Modal.Title><h2>Order Placed Successfully</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body><div>Thanks For Shopping from Clipkart....!:)</div>
          <div>You Shopped Total:₹{cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0)}</div>
          <div>Items will delivered withing 5 days</div>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/">
              <Button onClick={refresh} variant="primary" >
                Shop More
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>

        {/* ----- */}
      </div>
    </div>
  )
}

export default Cart