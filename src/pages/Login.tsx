// React Hook Form + Yup

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../services/apiService";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import "../index.css";

// Define the Validation Schema
const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .matches(
      /^(?=(.*[A-Za-z]){2})(?=(.*\d){3})[A-Za-z\d]{5}$/,
      "Password must be exactly 5 characters, contain at least 2 letters and 3 numbers"
    )
    .required("Password is required"),
});

//  Define the FormData Interface
interface FormData {
  username: string;
  password: string;
}

const Login = () => {
  //  Use `useForm` with Yup Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema), // Apply the validation schema
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: { username: string; password: string }) => {
    try {
      const user = await loginUser(data);
      if (user) {
        dispatch(login(user.username));
        navigate("/Profile");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <InputField
          label="Username:"
          type="text"
          name="username"
          register={register}
          errors={errors}
        />
        <InputField
          label="Password:"
          type="password"
          name="password"
          register={register}
          errors={errors}
        />
        <SubmitButton text="Login" isSubmitting={false} />
        <p>Don't registered yet?</p>
        {/* <br></br> */}
        <p>
          <a href="register"> Signup here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
