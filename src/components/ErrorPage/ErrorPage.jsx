
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <section className='bg-white '>
      <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
        <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
          <p className='p-3 text-sm font-medium text-yellow-500 rounded-full bg-blue-50 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
              />
            </svg>
          </p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
            Something Went Wrong!
          </h1>
          <p className='mt-4 text-gray-500 '>Here is the helpful link:</p>

          <div className='w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
            <button onClick={() => navigate('/')} className="  px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 bg-yellow-500 text-white text-xs sm:text-sm md:text-base rounded-full shadow-md hover:bg-yellow-600 transition-all duration-200 ease-in-out focus:outline-none">Take me Home</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage;