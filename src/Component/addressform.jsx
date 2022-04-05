import React from 'react'
// import { CartState } from './utility/Context'


const Addressform = (props) => {
    //  const{ state: { cart },dispatch}=CartState()
    const onsubmit = (e) => {
        e.preventDefault()
        props.handlemodal()
        props.handlesecmodal()

    }
    return (
        <>
            <form onSubmit={onsubmit} >
                <div className="form-row" >
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom01">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom02">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label for="validationCustom02">Phone</label>
                        <input type="Phone" className="form-control" id="validationCustom02" placeholder="Phone" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputState" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <input type="phone" className="form-control" id="inputState" required />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" >Place order</button>
            </form>
        </>

    )
}

export default Addressform