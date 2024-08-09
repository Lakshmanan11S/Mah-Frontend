import {  FormGroup, Input } from 'reactstrap'
import '../../assets/App.scss'
import profileimg from '../../assets/Images/profile.jpg'

const Header = () => {


  return (
    <div className="Header">
    <div className="col-md-3"></div>
    <div className="col-md-6 main-heading">Gomathi Amman Motors</div>
    <div className="col-md-3 profile">
        <FormGroup switch >
          <Input type="switch" role="switch"style={{cursor:"pointer"}} />
        </FormGroup>
        <div>
          <img src={profileimg} alt='user' className='profile-image'/>
        </div>
    </div>
    
  </div>
  )
}

export default Header
