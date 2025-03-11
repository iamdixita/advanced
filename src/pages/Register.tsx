// Formik + Yup

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerUser } from "../services/apiService";

// Define Yup Validation Schema (Matches Login)
const registerSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .matches(
      /^(?=(.*[A-Za-z]){2})(?=(.*\d){3})[A-Za-z\d]{5}$/,
      "Password must be exactly 5 characters, contain at least 2 letters and 3 numbers"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log("Submitting Data:", values);
        const response = await registerUser(values);
        console.log("API Response:", response);

        if (response && response.success) {
          alert("Registration successful!");
          navigate("/login");
        } else {
          alert(response?.message || "Registration successful!");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("An error occurred. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Username Field */}
        <div>
          <label htmlFor="username">Username</label>
          <input
            {...formik.getFieldProps("username")}
            id="username"
            type="text"
          />
          {formik.touched.username && formik.errors.username && (
            <p>{formik.errors.username}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            {...formik.getFieldProps("password")}
            id="password"
            type="password"
          />
          {formik.touched.password && formik.errors.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...formik.getFieldProps("confirmPassword")}
            id="confirmPassword"
            type="password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p>{formik.errors.confirmPassword}</p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
