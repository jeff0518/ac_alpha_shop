import logo from '../icons/Logologo.svg'



const Logo = () => {
  return (
    <div>
      <a className="header-logo-container" href="#">
        <img src={logo} className="logo" alt="logo" />
      </a>
    </div>
  );
}

export default Logo