import { useEffect, useState } from "react";
import { IJWTUser } from "../interfaces/network";
import authService from "../services/authService";

const Profile = () => {
  const [user, setUser] = useState<IJWTUser>({});

  useEffect(() => {
    const user = authService.getUser();
    if (user && user.userId) {
      setUser(() => user);
    }
  }, []);

  if (!user) return <p>loading</p>;
  return (
    <>
      <h1>Profile page</h1>
      <p>{user.userId}</p>
      <p>{user.sub}</p>
    </>
  );
};

export default Profile;
