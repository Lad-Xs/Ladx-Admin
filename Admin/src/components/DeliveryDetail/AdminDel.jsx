import React, { useState } from "react";
import {
  Box,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import UserInfo from "../UserInfo"; 
import SenderDeliveryInfo from "./SenderDeliveryInfo";
import TravelerDeliveryInfo from "./TraveleDeliveryInfo";

const AdminDel = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [selectedTab, setSelectedTab] = useState("senders"); // State to track selected tab
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // General navigation handler
  const handleNavigation = (path) => {
    navigate(path); // Use navigate hook to change route
  };

  // Tab change handler
  const handleTabChange = (tab) => {
    setSelectedTab(tab); // Update the selected tab state
  };

  // Navigation to Traveler-M
  const handleClick = () => {
    navigate("/Traveler-M"); // Navigate to Traveler-M
  };

  // Click handler for Match button with event propagation stopped
  const handleMatchClick = (event) => {
    event.stopPropagation(); // Stop the event from triggering parent click behavior
    navigate("/Sender-M"); // Navigate to Sender-M
  };

  return (
    <AdminLayout>
      <Box sx={{ display: "flex", height: "100vh", backgroundColor: "white" }}>
        <Box
          sx={{
            marginLeft: { xs: "60px", sm: "176px" }, // Leave space for the fixed sidebar
            padding: "20px",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        ></Box>

        <UserInfo />

        {/* Main content section */}
        <Box
          sx={{
            flexGrow: 1,
            marginTop: "100px",
            //marginLeft: { xs: "80px", sm: "226px" },
            position: "relative",
            padding: "20px",
            flexGrow: 1,
            height: "100vh",
            // overflow: "auto", // Reduce padding for mobile
          }}
        >
          {/* Header */}
          <Typography
            variant={isMobile ? "h6" : "h5"} // Change header size based on screen size
            sx={{ marginBottom: "10px", marginLeft: "" }} // Reduce margin for mobile
          >
            Delivery Orders
          </Typography>
          {/* Tab Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row", // Stack tabs vertically on mobile
              alignItems: isMobile ? "flex-start" : "center", // Align to start on mobile
              marginBottom: "10px", // Add space below the tabs
            }}
          >
            {/* Senders Tab */}
            <Box
              onClick={() => handleTabChange("senders")}
              sx={{
                cursor: "pointer",
                padding: "10px",
                borderBottom:
                  selectedTab === "senders" ? "3px solid #F66F1E" : "none", // Active line
                display: "inline-block",
                marginRight: isMobile ? "0" : "20px", // No right margin on mobile
                marginBottom: isMobile ? "10px" : "0", // Margin below tab on mobile
              }}
            >
              Senders
            </Box>

            {/* Travelers Tab */}
            <Box
              onClick={() => handleTabChange("travelers")}
              sx={{
                cursor: "pointer",
                padding: "10px",
                borderBottom:
                  selectedTab === "travelers" ? "3px solid #F66F1E" : "none", // Active line
                display: "inline-block",
              }}
            >
              Travelers
            </Box>
          </Box>
          {/* Divider Line */}
          <Box
            sx={{
              height: "2px",
              backgroundColor: "#E5E5E5",
              margin: "10px 0", // Add space above and below the line
            }}
          />
          <SenderDeliveryInfo selectedTab={selectedTab} />
          <Box sx={{ display: "flex", gap: "20px" }}>
            {/* Sender's delivery info */}
            <SenderDeliveryInfo selectedTab={selectedTab} />

            {/* Traveler's delivery info */}
            <TravelerDeliveryInfo selectedTab={selectedTab} />
          </Box>
     
   
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default AdminDel;
