/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';

const Signup=()=> {
 
  return (
    <div className="w-full flex">
      <div className="flex justify-center items-center w-full lg:w-3/5 bg-white">
        <div className="w-full h-min max-w-sm p-4">
          <form className="space-y-6" id="create_form" action="#">
            <h5 className="text-3xl text-gray-900 text-center font-bold">Sign Up</h5>
            <div className="flex flex-col gap-3 mt-5">
              <p>Full Name</p>
              <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Full Name" required />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <p>Username</p>
              <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Username" required />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <p>Email</p>
              <input type="email" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="eg.gymservices@gmail.com" required />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <p>paassword</p>
              <input type="password" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*********" required />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <p>Password_confirm</p>
              <input type="password" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*********" required />
            </div>
            <button type="submit"  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
            <div className="text-sm font-medium text-gray-500">
              Have an account?
              {' '}
              <Link to="/login" className="text-blue-700 hover:underline">Login</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden w-2/5 bg-cover bg-center text-white md:block">
        <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
          <p className="text-5xl font-bold">Welcome, Friend!</p>
          <p>We are happy to have you.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;