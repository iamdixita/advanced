// import { useForm } from "react-hook-form";
// import { registerUser } from "../services/apiService";
// import { useNavigate } from "react-router-dom";
// import InputField from "../components/InputField";
// import SubmitButton from "../components/SubmitButton";
// import "../index.css";

// interface FormData {
//   username: string;
//   password: string;
// }

// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();
//   const navigate = useNavigate();

//   const onSubmit = async (data: FormData) => {
//     try {
//       const response = await registerUser(data.username, data.password);
//       if (response) {
//         navigate("/login");
//       } else {
//         alert("Registration failed");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2 className="register-title">Register</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="register-form">
//         <InputField
//           label="Username"
//           type="text"
//           name="username"
//           register={register}
//           required={true}
//           errors={errors}
//         />
//         <InputField
//           label="Password"
//           type="password"
//           name="password"
//           register={register}
//           required={true}
//           errors={errors}
//         />
//         <SubmitButton text="Register" isSubmitting={false} />
//       </form>
//     </div>
//   );
// };

// export default Register;

// Formik

// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { registerUser } from "../services/apiService";

// // Define Yup validation schema
// const registerSchema = yup.object().shape({
//   username: yup.string().required("Username is required"),
//   password: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password")], "Passwords must match")
//     .required("Confirm Password is required"),
// });

// const Register = () => {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: registerSchema,
//     onSubmit: async (values) => {
//       try {
//         await registerUser(values);
//         navigate("/login");
//       } catch (err) {
//         alert("Registration failed");
//       }
//     },
//   });

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold mb-4">Register</h1>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-lg">
//               Username
//             </label>
//             <input
//               {...formik.getFieldProps("username")}
//               className="border p-2 w-full"
//               id="username"
//               type="text"
//             />
//             {formik.errors.username && (
//               <p className="text-red-500">{formik.errors.username}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-lg">
//               Password
//             </label>
//             <input
//               {...formik.getFieldProps("password")}
//               className="border p-2 w-full"
//               id="password"
//               type="password"
//             />
//             {formik.errors.password && (
//               <p className="text-red-500">{formik.errors.password}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="confirmPassword" className="block text-lg">
//               Confirm Password
//             </label>
//             <input
//               {...formik.getFieldProps("confirmPassword")}
//               className="border p-2 w-full"
//               id="confirmPassword"
//               type="password"
//             />
//             {formik.errors.confirmPassword && (
//               <p className="text-red-500">{formik.errors.confirmPassword}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerUser } from "../services/apiService";

// Define Yup validation schema
const registerSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
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
    onSubmit: async (values) => {
      try {
        await registerUser(values);
        navigate("/login");
      } catch (err) {
        alert("Registration failed");
      }
    },
  });

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
