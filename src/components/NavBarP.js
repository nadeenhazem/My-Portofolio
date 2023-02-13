import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillHome } from "react-icons/ai";
import{CgFileDocument} from "react-icons/cg";
import {MdWorkOutline} from "react-icons/md";
import{BsSun,BsPersonFill}  from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux'
import {  increment } from '../Redux/Slices/DarkmoodSlice';
import { Link } from 'react-router-dom';
function NavBarP(props) {
  const theme=useSelector((state) => state.darkmood.value)
  const dispatch = useDispatch()
document.body.style.background = theme ;
let mainColor;
theme==='black'?mainColor='white':
mainColor='black';
  return (
    
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:theme}}  className='background-navbar'>
      <Container >
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:'#A084DC'}}/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          {/* <Nav className="me-auto" ></Nav> */}
          <Nav style={{width:'100%'}} >
            <Link to='/' className="nav-link " id='navbar-icons'style={{color:mainColor}}>
                  <AiFillHome /></Link>
            <a href='#AboutMe' className="nav-link" id='navbar-icons'style={{color:mainColor}}> 
              <BsPersonFill /></a>
            <Link to='/Skills' className="nav-link" id='navbar-icons'style={{color:mainColor}}> 
             <MdWorkOutline/></Link>
            <Link to='/Resume' className="nav-link" id='navbar-icons'style={{color:mainColor}}> 
             <CgFileDocument/></Link>
            <Link  className="nav-link" id='navbar-icons'style={{color:mainColor}}> 
              <BsSun onClick={() => dispatch(increment())}/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    



  );
}

export default NavBarP;
