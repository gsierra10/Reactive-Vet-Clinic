import { useSelector } from "react-redux"
// import { Provider } from "react-redux"
// import store from "../../services/store"
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from '../HeaderNavBar/HeaderNavBar';
  
  const Header = () => {
    const login = useSelector((state)=>state.login )
    return (
      <>
        <Nav>
          <NavLink to='/'>
            <img src={require('../../images/logo192.png')} alt='logo' />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/services' activeStyle>
              Services
            </NavLink>
            <NavLink to='/contact-us' activeStyle>
              Contact Us
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
  
  export default Header;