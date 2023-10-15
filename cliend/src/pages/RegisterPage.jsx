import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mt-48'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto'>
        <input className='w-full border my-1 py-2 px-3 rounded-2xl' type='text' placeholder='John Doe' />
          <input className='w-full border my-1 py-2 px-3 rounded-2xl' type='email' placeholder='your@email.com' />
          <input className='w-full border my-1 py-2 px-3 rounded-2xl' type='password' placeholder='password' />
          <button className='bg-red-500 p-2 w-full text-white rounded-2xl'>Login</button>
          <div className='text-center py-2 text-gray-500'>
            Don't have an acount yet?
            <Link className='underline text-black' to={'/login'}>Login</Link>
          </div>
        </form>
      </div>
      
    </div>
  )
}