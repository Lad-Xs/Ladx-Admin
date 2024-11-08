import React from "react";
import {
  Box,
   TextField,
  Typography,
  Grid,
  Divider,
  Avatar,
  // Checkbox,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person"; // User icon
// import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Import the bell icon
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import homepp from "../assets/homepp.jpg";
import joanna from "../../assets/joanna.jpg";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import leilaImg from "../../assets/leila.jpg";
import samImg from "../../assets/sam.jpg";
// import johnImg from "../../assets/john.jpg";


// import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import BoxComponent from "./Box"; 
import UpdateDeliveryStatus from "./UpdateDeliveryStatus"; 
import AdminPerson from "./AdminPerson"; 
import AdminMain from "./AdminMain";

const Admin = () => {
  //const navigate = useNavigate(); // Initialize navigation hook

  // Navigation handler
  // const handleNavigation = (path) => {
  //   navigate(path); // Use path for navigation
  // };

  return (
    <AdminLayout>
      <Box
        sx={{ display: "flex", height: "100vh", backgroundColor: "#FAFAFA" }}
      >
        {/* Space between sidebar and right content */}
        <Box
          sx={{
            marginLeft: { xs: "80px", sm: "226px" }, // Leave space for the fixed sidebar
            padding: "20px",
            flexGrow: 1,
            height: "100vh",
            // overflow: "auto",
          }}
        >
          {/* Main content here */}
          <BoxComponent />

          <UpdateDeliveryStatus />
        </Box>

        {/* Main content box on the far right */}
        <AdminMain />
      </Box>
    </AdminLayout>
  );
};

export default Admin;
