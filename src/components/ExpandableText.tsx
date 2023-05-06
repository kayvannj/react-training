import { useState } from "react";
import Button from "./Button";

interface Props {
  maxChar?: number;
  children: string;
}

const ExpandableText = ({ maxChar = 100, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChar) return <span>{children}</span>;

  return (
    <>
      <span>
        {isExpanded ? children : children.substring(0, maxChar) + "..."}
      </span>
      <Button color="secondary" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </Button>
    </>
  );
};

export default ExpandableText;
