import Button from "../../../BaseComponents/Ui/Button/Button";
import Loader from "../../../BaseComponents/Ui/LoadTemplate/Loader/Loader";
import { StorageKey } from "../../../Config";
import { useProfile } from "../../../Hooks/Auth/useProfile";

const Information = () => {
  const { data, error, isLoading } = useProfile();

  const Logout = () => {
    localStorage.removeItem(StorageKey.User_Token);
    document.location.href = "/register";
  };
  return (
    <div>
      <h3>Information :</h3>
      {isLoading && <Loader/>}
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <img
          src={data?.avatar}
          width={50}
          height={50}
          alt=""
          style={{ borderRadius: "50%" }}
          
        />
        <p>Name : {data?.name}</p>
      </div>
      <p>Email : {data?.email}</p>
      <p>Password: {data?.password}</p>
      <code>Role: {data?.role}</code>
      <p>Address : Isfahan Najaf Abad Yazdanshar Bostan 19 </p>
      <Button width={300} onClick={Logout}>
        Logout
      </Button>
    </div>
  );
};

export default Information;
