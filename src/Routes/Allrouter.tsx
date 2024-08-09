import Customerlist from "../Pages/Customerlist/Customerlist";
import Drivelist from "../Pages/Drivelist/Drivelist";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Price from "../Pages/Price/Price";
import Priceupdate from "../Pages/Priceupdate/Priceupdate";
import Receivedtractor from "../Pages/Receivedtractor/Receivedtractor";
import Register from "../Pages/Register/Register";
import Salesupdate from "../Pages/Salesupdate/Salesupdate";
import Secretkey from "../Pages/Secretkey/Secretkey";


const publicRoutes=[
  {path:"/" ,element:<Register/>},
  {path:'/login' ,element:<Login/>},
  {path:'/secretkey',element:<Secretkey/>}
]

const adminRoutes=[
  {path:'/home',element:<Home/>},
  {path:'/priceupdate',element:<Priceupdate/>},
  {path:'/drivelist',element:<Drivelist/>},
  {path:'/receivedtractor',element:<Receivedtractor/>},
  {path:'/price',element:<Price/>},
  {path:'/salesupdate',element:<Salesupdate/>},
  {path:'/customerlist',element:<Customerlist/>}
]

const privateRoutes=[
  {path:'/home',element:<Home/>},
  {path:'/receivedtractor',element:<Receivedtractor/>},
  {path:'/price',element:<Price/>},
  {path:'/salesupdate',element:<Salesupdate/>},
  {path:'/customerlist',element:<Customerlist/>}
]


export {publicRoutes,privateRoutes,adminRoutes};