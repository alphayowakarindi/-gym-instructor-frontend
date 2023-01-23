/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
const Login =()=> {

  return (
    <div className="flex w-full">
      <div className="hidden w-2/4 bg-cover bg-center text-white md:block">
        <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-25">
          <p className="text-5xl font-semibold px-6 text-center">Welcome Back!</p>
          <p className="px-6 text-center">We are dedicated to your total fittness</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full md:w-3/5 bg-white">
        <div className="w-full h-min max-w-sm p-4">
          <form className="space-y-6" action="#">
            <h5 className="text-3xl text-gray-900 text-center font-bold">Sign In</h5>
            <p></p>
            <div className="flex flex-col gap-3">
              <label className="uppercase text-xs tracking-wider font-semibold">Your username</label>
              <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Username" required />
            </div>
            <div className="flex flex-col gap-3">
              <label className="uppercase text-xs tracking-wider font-semibold">Password</label>
              <input type="password" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="********" required />
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
            <div className="text-sm font-medium text-gray-500">
              Not registered?
              {' '}
              <Link to="/signup" className="text-blue-700 hover:underline">Create account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;