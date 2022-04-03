import React from 'react'


const Addressform = (props) => {
 
    const handleclick=()=>{
    props.handlemodal()
     props.handlesecondmodal()
 }
    return (
    <>
        
            <div class="form-row" >
                 <div class="col-md-6 mb-3">
                    <label for="validationCustom01">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required />
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationCustom02">Last name</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required />
                </div>
           <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div class="col-md-6 mb-4">
                    <label for="validationCustom02">Phone</label>
                    <input type="Phone" class="form-control" id="validationCustom02" placeholder="Phone" required />
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required />
            </div>
            <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputState" />
                </div>
                <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <input type="phone" class="form-control" id="inputState" required />
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip" required />
                </div>
            </div>
            <button  onClick={handleclick} class="btn btn-primary" >Place order</button>
            </>
        
    )
}

export default Addressform