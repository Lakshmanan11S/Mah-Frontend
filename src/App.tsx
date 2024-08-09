import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { adminRoutes, privateRoutes, publicRoutes } from './Routes/Allrouter';
const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
     {publicRoutes.map((route,index)=>(
      <Route key={index} path={route.path} element={route.element}/>
     ))}
       {adminRoutes.map((route,index)=>(
      <Route key={index} path={route.path} element={route.element}/>
     ))}
     {
      privateRoutes.map((route,index)=>(
        <Route key={index} path={route.path} element={route.element}/>
      ))
     }
      </Routes>
      </BrowserRouter>
  )
}
 export default App;