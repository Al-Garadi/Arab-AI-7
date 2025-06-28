import Logo from "../assets/logo.png"; // Path remains correct for the new logo

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Arab AI Logo" />
      <h1>Arab AI</h1> {/* Updated application name */}
    </header>
  );
};

export default Header;
