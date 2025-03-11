// Profile.tsx (React Hook Form + Tailwind + Validation)

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import "./Profile.css"; // Ensure this file exists for styling

// Define the form data type properly
type FormData = {
  firstName: string;
  lastName: string;
  dob: string;
  profilePicture?: FileList; // Made optional to avoid TypeScript issue
  pdfFile?: FileList; // Made optional to avoid TypeScript issue
};

// Define validation schema using Yup
const profileSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  dob: yup.string().required("Date of birth is required"),
  profilePicture: yup
    .mixed<FileList>()
    .test("required", "Profile picture is required", (value) => {
      return value instanceof FileList && value.length > 0;
    }),
  pdfFile: yup
    .mixed<FileList>()
    .test("required", "PDF file is required", (value) => {
      return value instanceof FileList && value.length > 0;
    }),
});

const Profile: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(profileSchema) as any, // FIXED TypeScript error
  });

  // Watch for profile picture changes and generate preview
  const watchProfilePicture = watch("profilePicture");

  useEffect(() => {
    if (watchProfilePicture && watchProfilePicture.length > 0) {
      const file = watchProfilePicture[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [watchProfilePicture]);

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    // alert("Profile submitted successfully!");

    // Show confirmation alert and navigate if the user clicks "OK"
    if (
      window.confirm(
        "Profile submitted successfully! Click OK to go to the main page."
      )
    ) {
      navigate("/Dashboard"); // Redirect to the main page
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Profile Picture:</label>
          <input type="file" accept="image/*" {...register("profilePicture")} />
          {preview && (
            <img src={preview} alt="Preview" className="preview-img" />
          )}
          <p className="error">{errors.profilePicture?.message}</p>
        </div>

        <div className="form-group">
          <label>First Name:</label>
          <input type="text" {...register("firstName")} />
          <p className="error">{errors.firstName?.message}</p>
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" {...register("lastName")} />
          <p className="error">{errors.lastName?.message}</p>
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" {...register("dob")} />
          <p className="error">{errors.dob?.message}</p>
        </div>

        <div className="form-group">
          <label>Upload PDF:</label>
          <input
            type="file"
            accept="application/pdf"
            {...register("pdfFile")}
          />
          <p className="error">{errors.pdfFile?.message}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
