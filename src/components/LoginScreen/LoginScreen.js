import { useState } from 'react'
import { useLoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'
import { Link } from 'react-router-dom'


const LoginScreen = () => {
    const { login, user, loading, googleLogin } = useLoginContext()
    
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        login(values)
    }

    return (
        <div className='login-screen container-fluid'>
            <div className='row '>
                <div className='col-6 pkm-img border'>
                    
                </div>
                <div className='col-6 login'> 
                    <h2 className='my-5'>Login</h2>
                    <hr/>

                    <form className='d-flex justify-content-center align-items-center flex-column flex-wrap' onSubmit={handleSubmit}>
                        <input 
                            className='form-control my-2' 
                            type='email'
                            value={values.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                        <input 
                            className='form-control my-2' 
                            type='password'
                            value={values.password}
                            onChange={handleInputChange}
                            name="password"
                        />
                        
                        <button className='btn btn-primary col-8' disabled={loading}>{loading ? 'Cargando...' : 'Ingresar'}</button>
                        {user.error && <p className='error'>{user.error}</p>}
                        <button className='btn border my-2' onClick={googleLogin}><img className='img-fluid google-img' src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png' alt='google'></img></button>
                        <br/>
                        <hr/>
                        <Link to="/register">No estoy registrado aún</Link>
                    </form>

                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default LoginScreen