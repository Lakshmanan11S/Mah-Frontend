import { useEffect, useState } from 'react';
import Layout from "../../Components/Layout/Layout";
import '../../assets/App.scss';
import DataTable from "react-data-table-component";
import Loader from '../../Components/Loader/Loader';

// Sample data for the DataTable
const sampleData = [
  { id: 1, chasisNo: "1234", engineNo: "5678", manufacturing: "01-22", vehicleSeries: "A1", vehicleModel: "Model X", receivedPlace: "Place A", receivedDate: "2024-01-15", tractorStatus: "New" },
  { id: 2, chasisNo: "2345", engineNo: "6789", manufacturing: "02-22", vehicleSeries: "B2", vehicleModel: "Model Y", receivedPlace: "Place B", receivedDate: "2024-02-20", tractorStatus: "Used" },
  // Add more sample rows as needed
];

const columns = [
  { name: 'Chasis No', selector: row => row.chasisNo, sortable: true },
  { name: 'Engine No', selector: row => row.engineNo, sortable: true },
  { name: 'Manufacturing (MM-YY)', selector: row => row.manufacturing, sortable: true },
  { name: 'Vehicle Series', selector: row => row.vehicleSeries, sortable: true },
  { name: 'Vehicle Model', selector: row => row.vehicleModel, sortable: true },
  { name: 'Received Place', selector: row => row.receivedPlace, sortable: true },
  { name: 'Received Date', selector: row => row.receivedDate, sortable: true },
  { name: 'Tractor Status', selector: row => row.tractorStatus, sortable: true },
];

const Salesupdate = () => {
  const [loading, setLoading] = useState(true);
  const [isSalesUpdateModal,setIsSalesUpdateModal]=useState(false)

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  const toggleSalesUpdate=()=>{
    setIsSalesUpdateModal(!isSalesUpdateModal)
  }

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <div className="Tractor-Received">
          <div className="row first-heading shadow">
            <div className="col-sm-6 first-section py-2"><h3>Sales Update</h3></div>
            <div className="col-sm-6 second-section py-2">
              <button className="btn" style={{backgroundColor:"skyblue"}} onClick={toggleSalesUpdate}>Add Sales</button>
            </div>
          </div>
          <hr style={{ marginTop: "35px" }} />
          <div className="row" style={{ marginTop: "35px" }}>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Search..." />
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Filer..." />
            </div>
            <div className="col-md-3">
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3">
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="row table" style={{ marginTop: "50px" }}>
            <DataTable
              columns={columns}
              data={sampleData}
              pagination
              highlightOnHover
              responsive
              striped
              selectableRows
              fixedHeader
              style={{ minWidth: '50rem' }}
            />
          </div>
        </div>
      )}
      <Salesupdate isOpen={isSalesUpdateModal} toggle={toggleSalesUpdate}/>
    </Layout>
  );
};

export default Salesupdate;
