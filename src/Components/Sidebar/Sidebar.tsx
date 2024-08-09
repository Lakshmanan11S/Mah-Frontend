import { IoIosHome } from 'react-icons/io'
import '../../assets/App.scss'
import { PiTractor } from 'react-icons/pi'
import { MdOutlineChecklistRtl, MdPriceCheck, MdSecurityUpdateGood } from 'react-icons/md'
import { LuIndianRupee } from 'react-icons/lu'
import { Link, useLocation } from 'react-router-dom'
import { FaMotorcycle } from 'react-icons/fa'
const Sidebar = () => {
  const location=useLocation()
  const data=[
    {
      name:'Home',
      path:'/home',
      icon:<IoIosHome />
    },
    {
      name:'PriceUpdate',
      path:'/priceupdate',
      icon:<MdPriceCheck />
    },
    {
      name:'Drive list',
      path:'/drivelist',
      icon:<FaMotorcycle />
    },
    {
      name:'Tractor Received',
      path:'/receivedtractor',
      icon:<PiTractor />
    },{
      name:'Price',
      path:'/price',
      icon:<LuIndianRupee />
    },
    {
      name:'Sales Update',
      path:'/salesupdate',
      icon:<MdSecurityUpdateGood />
    },{
      name:'Customer List',
      path:'/customerlist',
      icon:<MdOutlineChecklistRtl />
    }
  ]
  return (
    <div className="Sidebar">
      <ul>
        {
          data.map((list,index)=>(
           <li key={index} className={location.pathname===list.path?'active':''}>
            <Link to={list.path}>
            {list.icon}
            <span>{list.name}</span>
            </Link>
           </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar
