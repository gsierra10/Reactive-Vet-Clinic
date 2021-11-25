import { useSelector } from "react-redux"
// import { Provider } from "react-redux"
// import store from "../../services/store"

const Header = () => {
    const login = useSelector((state)=>state.login )
    
    return (
        <>
            <h1>
                Usted <b>{login ? '' : 'no'}</b> está loggeado.
            </h1>
        </>  
    )
}

export default Header
