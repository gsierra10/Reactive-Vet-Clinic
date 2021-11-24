import { useSelector } from "react-redux"

const Header = () => {
    const login = useSelector((state)=>state.login )
    
    return (
        <h1>
            The user is <b>{login ? '' : 'not'}</b> logged in.
        </h1>
    )
}

export default Header
