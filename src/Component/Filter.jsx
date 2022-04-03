import React from 'react'
import {Button, Form} from 'react-bootstrap'
import { CartState } from './utility/Context'

const Filter = () => {
const{filterstate,filterdispatch}=CartState()
console.log(filterstate)
  return (
    <div className='filters'>
        <span>Filter Product</span>
        <span>
            <Form.Check
            label="Acending"
            type='radio'
            name='group1'
            id={`inline-1`}
            onChange={()=>{filterdispatch({
                type:"byprice",
                payload:"yes"

            })}}
            checked={filterstate.byprice==="yes"?true:false}
            />
        </span>
        <span>
            <Form.Check
            label="Decending"
            type='radio'
            name='group1'
            id={`inline-2`}
            onChange={()=>{filterdispatch({
                type:"byprice",
                payload:"no"

            })}}
             checked={filterstate.byprice==="no"?true:false}
            />
        </span>
        <span>
            <Form.Check
            label="Include Out of Stock"
            type='checkbox'
            name='group1'
            id={`inline-3`}
            onChange={()=>{filterdispatch({
                type:"bystock"
            

            })}}
            checked={filterstate.instock}
            />
        </span>
        <span>
            <Form.Check
            label="Fast Delivery"
            type='checkbox'
            name='group1'
            id={`inline-4`}
            onChange={()=>{filterdispatch({
                type:"byfastdelivery"
              

            })}}
            checked={filterstate.isfastdelivery}

            />
        </span>
       <Button variant='light' onClick={() =>
          filterdispatch({
            type: "clear",
          })
        } >Clear Filter</Button>

    </div>
  )
}

export default Filter