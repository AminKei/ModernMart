import { useState } from "react";
import CountDown from "../../Components/CountDown/CountDown";
import NewArrival from "../../Components/NewArrival/NewArrival";
import "./playGround.css";

interface User {
  name: string;
  email: string;
  address: string;
}

const PlayGround = () => {
  const [user, setUser] = useState<User>({
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, Springfield",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      {/* <NewArrival /> */}
      <div className="user-profile">
        <h2>User Profile</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={() => alert(JSON.stringify(user))}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayGround;
