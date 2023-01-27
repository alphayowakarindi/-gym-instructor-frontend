import { useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';

const HumburgerMenu = () => {
  const dispatch = useDispatch();
  const toggleNavActive = () => ({
    type: 'TOGGLE_NAV_ACTIVE',
  });
  return (
    <div>
      <GiHamburgerMenu className="hamburger-menu" onClick={() => dispatch(toggleNavActive())} />
    </div>
  );
};

export default HumburgerMenu;
