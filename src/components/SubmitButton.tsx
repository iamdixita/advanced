import React from "react";

interface SubmitButtonProps {
  text: string;
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-500">
      {isSubmitting ? "Submitting..." : text}
    </button>
  );
};

export default SubmitButton;
