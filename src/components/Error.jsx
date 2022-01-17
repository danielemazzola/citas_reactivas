

const Error = ({mensaje}) => {
    return (
        
        <div className='bg-red-500 p-2 mb-2 uppercase rounded-lg'>
            <p className='text-white text-center font-bold'>
            {mensaje}
            </p>
        </div>
        
    )
}

export default Error
