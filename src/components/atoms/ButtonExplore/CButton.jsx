/* eslint-disable */
import Button from "@mui/material/Button";
import "./CButton.css";

function CButton({ children }) {
 return (
  <Button
   className="buttonExplorar"
   variant="contained"
   sx={{
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: "14",
    width: 200,
    height: 40,
    backgroundColor: "#504908",
    textAlign: "center",
    boxShadow: "2 3 3 black"
   }}>
   {children}
  </Button>
 );
}

export default CButton;
