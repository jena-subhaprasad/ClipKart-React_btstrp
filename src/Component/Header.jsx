import React from 'react'
import { Container, FormControl, Navbar, Nav, Dropdown, Badge,Button } from 'react-bootstrap'

import { FaShoppingCart } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'

import { Link } from 'react-router-dom';
import "./styles.css";


import { CartState } from './utility/Context';
const Header = () => {
    const { state: { cart },dispatch,filterdispatch } = CartState()
    return (
        <>
            <Navbar fixed='top' bg='dark' variant='dark' style={{ height: 80 }}>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>ClipKart</Link>
                    </Navbar.Brand>
                    {/* search */}
                    <Navbar.Text className='search'>
                        <FormControl style={{ width: 500 }} className="m-auto" placeholder="Search" onChange={(e)=>{filterdispatch({
                            type:'bysearch',
                            payload:e.target.value
                        })}} />
                    </Navbar.Text>

                    <Nav>
                        <Dropdown alignright >
                            <Dropdown.Toggle variant="success" >
                                <FaShoppingCart color="white" fontSize="25px " />
                                <Badge bg="success">{cart.length}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='.dropdown-menu' style={{ minWidth: 370 }} >
                                {cart.length > 0 ? (
                                    <>
                                        {cart.map((prod) => (
                                            <span className="cartitem" key={prod.id}>
                                                <img
                                                    src={prod.image}
                                                    className="cartItemImg"
                                                    alt={prod.name}
                                                />
                                                <div className="cartItemDetail">
                                                    <span>{prod.name}</span>
                                                    <span>₹ {prod.price.split(".")[0]}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "remove_from_cart",
                                                            payload: prod,
                                                        })
                                                    }
                                                />
                                            </span>
                                        ))}
                                        <Link to="/cart">
                                            <Button style={{ width: "95%", margin: "0 10px" }}>
                                                Go To Cart
                                            </Button>
                                        </Link>
                                    </>
                                ) : (
                                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                                )}

                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>


        </>
    )
}

export default Header