import { Link } from 'react-router-dom';
import HamburgerMenu from '../components/hamburgerMenu';

const Register = () => (
  <>
    <HamburgerMenu />
    <h1>Register Page</h1>
    <div className="container">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          className="space-y-6"
          method="POST"
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Full Name
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="fullname" />
            </label>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Username
              <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="username" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput3" className="form-label">
              Email address
              <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="example@gmail.com" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput4" className="form-label">
              Password
              <input type="password" className="form-control" id="exampleFormControlInput4" placeholder="password" />
            </label>
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="relative d-flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or
                {' '}
                <Link to="/login"> Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

);

export default Register;
