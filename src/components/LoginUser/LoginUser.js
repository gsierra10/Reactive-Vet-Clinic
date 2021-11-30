import { APIConsumer } from "../../services/APIConsumer"
import { useDispatch } from "react-redux"
import { login } from "../../services/actions/actionCreator"
import './LoginUser.scss'

const LoginUser = () => {    
    const dispatch = useDispatch()
    const handleChanges = async (e) => {
        e.preventDefault()
        await APIConsumer.loginUser(JSON.stringify({email: e.target.email.value, password: e.target.password.value}))  
    }

    return (
        <form className='add-form' onSubmit={(e)=>handleChanges(e)}>
            <form className='inner-form'>
                <h2>Login</h2>
                <div className='form-control'>
                    <label>Email:</label>
                    <input type='email' name='email' placeholder='Email' required />
                </div>
                <div className='form-control'>
                    <label>Contraseña:</label>
                    <input type='password' name='password' placeholder='Contraseña' required />
                </div>    
                <input onSubmit={()=>dispatch(login())}type='submit' value='Login' className='btn btn-block' />
            </form>
        </form>
    )
}

export default LoginUser