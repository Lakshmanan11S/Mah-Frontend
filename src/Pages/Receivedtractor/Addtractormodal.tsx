import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import '../../assets/App.scss'

interface StateProps {
  isOpen: boolean;
  toggle: () => void;
}

const AddTractorModal: React.FC<StateProps> = ({ toggle, isOpen }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="xl" style={{ marginTop: '50px' }}>
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
            <input id="manufacturingDate" type="text" className="form-control" placeholder="Enter manufacturing date" />
          </div>
          <div className="col-md-3">
            <label htmlFor="vehicleSeries">Vehicle Series</label>
            <input id="vehicleSeries" type="text" className="form-control" placeholder="Enter vehicle series" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3">
            <label htmlFor="vehicleModel">Vehicle Model</label>
            <input id="vehicleModel" type="text" className="form-control" placeholder="Enter vehicle model" />
          </div>
          <div className="col-md-3">
            <label htmlFor="receivedPlace">Received Place</label>
            <input id="receivedPlace" type="text" className="form-control" placeholder="Enter received place" />
          </div>
          <div className="col-md-3">
            <label htmlFor="receivedDate">Received Date</label>
            <input id="receivedDate" type="date" className="form-control" />
          </div>
          <div className="col-md-3">
            <label htmlFor="tractorStatus">Tractor Status(New/Old)</label>
            <input id="tractorStatus" type="text" className="form-control" placeholder="Enter tractor status" />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-secondary" onClick={toggle}>Cancel</button>
        <button className="btn btn-primary">Update</button>
      </ModalFooter>
    </Modal>
  );
};

export default AddTractorModal;
