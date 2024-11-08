// AdminLayout.jsx
import React from "react";
import { Box } from "@mui/material";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AdminSidebar />
  
        {children}
  
    </Box>
  );
};

export default AdminLayout;
