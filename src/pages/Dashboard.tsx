import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>
      <p>You should be authenticated to see this page</p>

      <Link to="/adognewogawnigiewoan">404 page</Link>
    </>
  );
};

export default Dashboard;
