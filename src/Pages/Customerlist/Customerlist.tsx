// import DataTable from "react-data-table-component";
// import Layout from "../../Components/Layout/Layout";

// const Customerlist = () => {
//   return (
//     <Layout>
//       <div className="customerlist">
//         <div className="row customer-heading shadow">
//           <div className="col-sm-6 first-section py-2">
//             <h3>Customer list</h3>
//           </div>
//         </div>
//         <div className="row" style={{ marginTop: "35px" }}>
//             <div className="col-md-3">
//               <input type="text" className="form-control" placeholder="Search..." />
//             </div>
//             <div className="col-md-3">
//               <input type="text" className="form-control" placeholder="Filer..." />
//             </div>
//             <div className="col-md-3">
//               <input type="date" className="form-control" />
//             </div>
//             <div className="col-md-3">
//               <input type="date" className="form-control" />
//             </div>
//           </div>
//           <div className="row table" style={{ marginTop: "50px" }}>
//             <DataTable
//               columns={columns}
//               data={sampleData}
//               pagination
//               highlightOnHover
//               responsive
//               striped
//               selectableRows
//               fixedHeader
//               style={{ minWidth: '50rem' }}
//             />
//           </div>
//       </div>
//     </Layout>
//   );
// };

// export default Customerlist;

import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Layout from "../../Components/Layout/Layout";
import Loader from "../../Components/Loader/Loader"; // Adjust the path if needed

// Sample data for the DataTable
const sampleData = [
  {
    id: 1,
    customername: "John Doe",
    fathername: "Michael Doe",
    village: "Springfield",
    phone: "123-456-7890",
    chasisNo: "CH1234",
    engineNo: "EN5678",
    vehicleSeries: "Series A",
    vehicleModel: "Model X",
    deliveryBranch:"Rajapalayam"
  },
  // Add more sample rows as needed
];

const columns = [
  { name: "Customer Name", selector: (row) => row.customername, sortable: true },
  { name: "Customer Father Name", selector: (row) => row.fathername, sortable: true },
  { name: "Village", selector: (row) => row.village, sortable: true },
  { name: "Phone No", selector: (row) => row.phone, sortable: true },
  { name: "Chasis No", selector: (row) => row.chasisNo, sortable: true },
  { name: "Engine No", selector: (row) => row.engineNo, sortable: true },
  { name: "Vehicle Model", selector: (row) => row.vehicleModel, sortable: true },
  { name: "Delivery Branch", selector: (row) => row.deliveryBranch, sortable: true },
];

const Customerlist = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second data fetch
  }, []);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <div className="customerlist">
          <div className="row customer-heading shadow">
            <div className="col-sm-6 first-section py-2">
              <h3>Customer List</h3>
            </div>
          </div>
          <div className="row" style={{ marginTop: "35px" }}>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Filter..."
              />
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
              style={{ minWidth: "50rem" }}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Customerlist;
