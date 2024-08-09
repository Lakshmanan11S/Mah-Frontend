import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

interface StateProps{
    isopen:boolean;
    toggle:()=>void;
}

const Salesupdatemodal:React.FC<StateProps> = ({isopen,toggle}) => {
  return (
    <Modal isOpen={isopen} toggle={toggle} size="xl" style={{ marginTop: '50px' }}>
      <ModalHeader toggle={toggle}>Add Tractor</ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="chasisNo">Chassis No</label>
            <input id="chasisNo" type="text" className="form-control" placeholder="Enter chassis number" />
          </div>
          <div className="col-md-3">
            <label htmlFor="engineNo">Engine No</label>
            <input id="engineNo" type="text" className="form-control" placeholder="Enter engine number" />
          </div>
          <div className="col-md-3">
            <label htmlFor="manufacturingDate">Manufacturing (MM-YYYY)</label>
            <input id="manufacturingDate" type="text" className="form-control"  />
          </div>
          <div className="col-md-3">
            <label htmlFor="vehicleSeries">Vehicle Series</label>
            <input id="vehicleSeries" type="text" className="form-control"  />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3">
            <label htmlFor="vehicleModel">Vehicle Model</label>
            <input id="vehicleModel" type="text" className="form-control"  />
          </div>
          <div className="col-md-3">
            <label htmlFor="receivedPlace">Customer Name</label>
            <input id="receivedPlace" type="text" className="form-control"  />
          </div>
          <div className="col-md-3">
            <label htmlFor="receivedPlace">Customer Fathername</label>
            <input id="receivedPlace" type="text" className="form-control"  />
          </div>
          <div className="col-md-3">
            <label htmlFor="receivedPlace">Mobile Number</label>
            <input id="receivedPlace" type="text" className="form-control"  />
          </div>
          </div>
          <div className="row mt-3">
          <div className="col-md-2">
            <label htmlFor="vehicleModel">Door-No</label>
            <input id="vehicleModel" type="text" className="form-control" />
          </div>
          <div className="col-md-2">
            <label htmlFor="receivedPlace">Street</label>
            <input id="receivedPlace" type="text" className="form-control"  />
          </div>
          <div className="col-md-2">
            <label htmlFor="receivedPlace">Village</label>
            <input id="receivedPlace" type="text" className="form-control" />
          </div>
          <div className="col-md-2">
            <label htmlFor="receivedPlace">Taluk</label>
            <input id="receivedPlace" type="text" className="form-control"  />
          </div>
          <div className="col-md-2">
            <label htmlFor="receivedPlace">Pincode</label>
            <input id="receivedPlace" type="number" className="form-control"  />
          </div>
          <div className="col-md-2">
            <label htmlFor="receivedPlace">District</label>
            <input id="receivedPlace" type="text" className="form-control" />
          </div>
          </div>
          <div className='row mt-3'>
          <div className="col-md-3">
            <label htmlFor="receivedDate">Delivery Date</label>
            <input id="receivedDate" type="date" className="form-control" />
          </div>
          <div className="col-md-2">
            <label htmlFor="receivedPlace">Delivery Branch</label>
            <input id="receivedPlace" type="text" className="form-control" />
          </div>
          </div>
        
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-secondary" onClick={toggle}>Cancel</button>
        <button className="btn btn-primary">Update</button>
      </ModalFooter>
    </Modal>
  )
}

export default Salesupdatemodal
