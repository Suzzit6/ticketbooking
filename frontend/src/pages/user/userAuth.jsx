import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginRedirect() {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get(
          `http://localhost:6900/api/user/verify-login/${token}`
        );
        console.log(response.data.message);

        navigate("/");
      } catch (error) {
        console.error("Invalid or expired login link");
        navigate("/"); // Redirect to login page on error
      }
    };

    verifyToken();
  }, [token, navigate]);

  return <p>Verifying login...</p>; // Optionally show a loading message
}

export default LoginRedirect;
