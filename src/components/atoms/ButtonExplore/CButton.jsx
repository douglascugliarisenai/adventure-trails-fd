/* eslint-disable */
import Button from "@mui/material/Button";
import "./CButton.css";

function CButton({ children }) {
 return (
  <Button className="buttonExplorar" variant="contained">
   {children}
  </Button>
 );
}

export default CButton;
