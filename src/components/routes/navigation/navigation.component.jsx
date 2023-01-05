import { Fragment } from "react/cjs/react.production.min";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../../assests/crown.svg'
import './navigation.styles.scss'
const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
        <Link className="logo-container" to='/'>
         <CrwnLogo className='logo' />
        </Link>
            <div className="links-container">
                <Link className="nav-link" to='/shop/'>
                    Shop
                </Link>
                <Link className="nav-link" to='/sign-in'>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation