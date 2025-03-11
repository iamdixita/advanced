import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Import RootState for TypeScript support

const withAuth = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(
      (state: RootState) => state.auth.isAuthenticated
    );

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
