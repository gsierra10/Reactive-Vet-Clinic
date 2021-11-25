const RegisterUserHeader = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

RegisterUserHeader.defaultProps = {
    title: 'Registro de Usuario Sierras Vet'
}

export default RegisterUserHeader