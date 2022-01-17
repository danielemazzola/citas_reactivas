/*rafce*/
import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    
  
    
    
    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

            {pacientes && pacientes.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>
                Listado de Pacientes</h2>     
                <p className="text-lg mt-5 text-cente mb-10 text-center">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold">
                        Pacientes y Citas
                    </span>    
                </p>

                { pacientes.map( (pacientes) => {
                    return (
                        <Paciente 
                        key = {pacientes.id}
                        paciente = { pacientes }
                        setPaciente = {setPaciente}
                        eliminarPaciente = {eliminarPaciente}
                        />
                        )
                    })}
                </>
            )  :  (
                
                <>
                    <h2 className='font-black text-3xl text-center'>
                No hay Pacientes</h2>     
                <p className="text-lg mt-5 text-cente mb-10 text-center">
                    Comienza agregando Pacientes {''}
                    <span className="text-indigo-600 font-bold">
                        Los verás aquí 
                    </span>    
                </p>
                
                </>
                
                )
            }

            

            

                      
        </div>
    )
}

export default ListadoPacientes
