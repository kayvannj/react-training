// rafce -> will populate the component for you

import { ReactNode } from "react";

interface Props {
  children: ReactNode; // this is a reserved prop for passing child elements
  onDismiss: () => void;
}

const Alert = ({ children, onDismiss }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onDismiss}
      ></button>
    </div>
  );
};

export default Alert;
