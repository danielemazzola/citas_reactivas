const paciente = ({ paciente, setPaciente,eliminarPaciente }) => {

    const { nombre } = paciente
    const { propietario } = paciente
    const { email } = paciente
    const { fecha } = paciente
    const { sintomas } = paciente
    const { id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar el paciente')

        if(respuesta){
            eliminarPaciente(id)
        }
    }
    
    return (

        

            <div className="mt-5 bg-white shadow-md px-5 py-10 rounded-lg m-2">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-mormal normal-case">{nombre}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                    <span className="font-mormal normal-case">{propietario}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                    <span className="font-mormal normal-case">{email}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                    <span className="font-mormal normal-case">{fecha}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                    <span className="font-mormal normal-case">{sintomas}</span>
                </p>

                <div className='flex justify-around mt-10'>
                    <button 
                        type='button'
                        onClick={ () => {setPaciente(paciente)}}
                        className='py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'>
                            Editar
                    </button>

                    <button 
                        type='button'
                        onClick={handleEliminar}
                        className='py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>
                            Eliminar
                    </button>

                    


                </div>
            </div> 
            
       
            )
           
}

export default paciente
