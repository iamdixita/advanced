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
      className="button"
      style={{ marginLeft: "7.4rem" }}>
      {isSubmitting ? "Submitting..." : text}
    </button>
  );
};

export default SubmitButton;
