import React from 'react'
import {Button, Form} from 'react-bootstrap'

const Filter = () => {
  return (
    <div className='filters'>
        <span>Filter Product</span>
        <span>
            <Form.Check
            label="Acending"
            type='radio'
            name='group1'
            id={`inline-1`}
            />
        </span>
        <span>
            <Form.Check
            label="Decending"
            type='radio'
            name='group1'
            id={`inline-2`}
            />
        </span>
        <span>
            <Form.Check
            label="Include Out of Stock"
            type='checkbox'
            name='group1'
            id={`inline-3`}
            />
        </span>
        <span>
            <Form.Check
            label="Fast Delivery"
            type='checkbox'
            name='group1'
            id={`inline-4`}
            />
        </span>
       <Button variant='light' >Clear Filter</Button>

    </div>
  )
}

export default Filter