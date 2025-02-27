import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
          <Link
        className="flex bg-white items-center font-bold hover:text-orange-500 "
        to="/order-status"
      >
        Order status
      </Link>
      <Link
        className="flex bg-white items-center font-bold hover:text-orange-500 "
        to="/manage-restaurant"
      >
        My Restaurant
      </Link>
      <Link
        className="flex bg-white items-center font-bold hover:text-orange-500 "
        to="/user-profile"
      >
        User profile
      </Link>
      <Button
        className="flex items-center font-bold hover:bg-gray-500"
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
