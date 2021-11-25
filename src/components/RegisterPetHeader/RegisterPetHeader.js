const RegisterPetHeader = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

RegisterPetHeader.defaultProps = {
    title: 'Registro de mascotas Sierras Vet'
}

export default RegisterPetHeader