import "./LogSignGoogle.css";
const LogSignGoogle = () => {
  return (
    <button className="google-signup-button" /* onClick={handleClick} */>
      <img
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" // Google logo URL
        alt="Google logo"
        className="google-logo"
      />
      Sign up with Google
    </button>
  );
};

export default LogSignGoogle;
