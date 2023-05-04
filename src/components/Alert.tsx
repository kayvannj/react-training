// rafce -> will populate the component for you

import { ReactNode } from "react";

interface Props {
  children: ReactNode; // this is a reserved prop for passing child elements
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alert;
