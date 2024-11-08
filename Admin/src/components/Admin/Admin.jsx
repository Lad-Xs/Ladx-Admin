import React from "react";
import {
  Box,
} from "@mui/material";
import AdminLayout from "../AdminLayout";
import BoxComponent from "./Box"; 
import UpdateDeliveryStatus from "./UpdateDeliveryStatus"; 
import AdminMain from "./AdminMain";

const Admin = () => {
  
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
