import React, { useState } from "react";
import {
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import UserInfo from "../UserInfo";
import TravelerDeliveryDetail from "./TravelerDeliveryDetail";
import TravelerShippingAddress from "./TravelerShippingAddress";

const TravelerDelDetail = () => {
  const [selectedTab, setSelectedTab] = useState("senders");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
  };
  //   const handleClick = () => {
  //     navigate("/Traveler-M"); // Navigate to Traveler-M URL
  //   };

  // Click handler for Match button with event propagation stopped
  const handleMatchClick = () => {
    // event.stopPropagation(); // Stop the event from triggering parent click behavior
    navigate("/Traveler-M"); // Navigate to Sender-M
  };
  //   const handleMatchTClick = () => {
  //     navigate("/Traveler-M"); // Navigate to Traveler-M
  //   };

  return (
    <AdminLayout>
      <Box sx={{ display: "flex", height: "100vh", backgroundColor: "white" }}>
        <UserInfo />

        <Box
          sx={{
            flexGrow: 1,
            marginLeft: { xs: "100px", sm: "226px" },
            marginTop: "100px",
            position: "relative",
            height: "100vh",
            //   overflow: "auto",
            padding: "20px", // Reduce padding for mobile
          }}
        >
          {/* Header */}
          <Typography
            variant={isMobile ? "h6" : "h5"} // Change header size based on screen size
            sx={{ marginBottom: "10px" }} // Reduce margin for mobile
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

          {/* Tab Content */}
          {selectedTab === "senders" ? (
            <Box sx={{ padding: "10px" }}>
              {/* Back Arrow Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                {/* Back Arrow */}
                <Link to="/admin-l" style={{ textDecoration: "none" }}>
                  <IconButton
                    sx={{
                      backgroundColor: "#F5F5F5",
                      borderRadius: "50%",
                      padding: "10px", // Adjust padding for size
                      "&:hover": {
                        backgroundColor: "#E0E0E0", // Change background on hover
                      },
                    }}
                  >
                    <ArrowBack sx={{ color: "#000" }} />{" "}
                    {/* Set the icon color to black */}
                  </IconButton>
                </Link>

                {/* Go Back Title */}
                <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                  Go Back
                </Typography>
              </Box>

              <TravelerDeliveryDetail />

              <TravelerShippingAddress />
            </Box>
          ) : (
            <Box sx={{ padding: "10px" }}>
              <Box
                sx={{ padding: "10px", display: "flex", alignItems: "center" }}
              >
                {/* Back Arrow */}
                <Link to="/admin-l" style={{ textDecoration: "none" }}>
                  <IconButton
                    sx={{
                      backgroundColor: "#F5F5F5",
                      borderRadius: "50%",
                      padding: "10px", // Adjust padding for size
                      "&:hover": {
                        backgroundColor: "#E0E0E0", // Change background on hover
                      },
                    }}
                  >
                    <ArrowBack sx={{ color: "#000" }} />{" "}
                    {/* Set the icon color to black */}
                  </IconButton>
                </Link>

                {/* Sender Details Title */}
                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  sx={{ marginLeft: "10px" }}
                >
                  Go Back
                </Typography>
              </Box>

              <TravelerDeliveryDetail />

              <TravelerShippingAddress />

              {/* Your traveler details content goes here */}
            </Box>
          )}
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default TravelerDelDetail;
