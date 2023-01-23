import HamburgerMenu from '../components/hamburgerMenu';

const Reserve = () => (
  <>
    <HamburgerMenu />
    <h1>Reserve Page</h1>
    <div
      className="d-flex justify-end"
    >
      <div className="w-full max-w-sm lg:max-w-lg backdrop-blur-sm bg-white/40 h-screen ">
        <div className="flex flex-col px-14 lg:px-20 items-center justify-center h-full text-white">
          <p className="text-4xl font-semibold">Reserve</p>
          <form id="reserve_form">
            <div className="form-group">
              <select
                id="service_id"
                name="service_id"
                className="form-control"
                required
              >
                <option disabled value="default" hidden>
                  Choose Events
                </option>
                <option>
                  Select Service
                </option>
              </select>
            </div>
            <input
              className="form-control"
              type="text"
              id="city"
              placeholder="City"
              required
            />
            <p className="form-control">
              MMMM / dd / yyyy
            </p>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Reserve
            </button>
          </form>
        </div>
      </div>
    </div>
  </>

);

export default Reserve;
