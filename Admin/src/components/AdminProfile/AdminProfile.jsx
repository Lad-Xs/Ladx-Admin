// AdminProfile.jsx

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import UserInfo from "../UserInfo";
import AdminProfileAccount from "./AdminProfileAccount"; // Import AdminProfileAccount
import AdminProfileMatches from "./AdminProfileMatchs"; // Import AdminProfileInfo
import { Avatar } from "@mui/material";
import image from "../../assets/image.jpg";

const AdminProfile = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("senders");

  // Tab change handler
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // Edit button click handler
  const handleEditClick = () => {
    // Handle edit profile logic here
    console.log("Edit Profile Clicked");
  };

  return (
    <AdminLayout>
      <Box sx={{ display: "flex", height: "100vh", backgroundColor: "white" }}>
        <UserInfo />
        {/* Main content section */}
        <Box
          sx={{
            marginLeft: { xs: "120px", sm: "226px" },
            flexGrow: 1,
            padding: "20px",
            marginTop: "100px", // Push the main content down a bit
            height: "100vh",
          }}
        >
          {/* Profile Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start" },
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            {/* Profile Image */}
            <Avatar
              src={image} // Use actual profile image path
              alt="Profile Image"
              sx={{
                width: "290px",
                height: "220px",
                borderRadius: "10px",
                marginBottom: { xs: "20px", sm: "0" },
              }}
            />

            {/* Name and Admin Section */}
            <Box
              sx={{
                marginLeft: { sm: "20px" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Typography variant="h5">Benson Kemeron</Typography>
              <Typography
                variant="body2"
                sx={{ color: "red", marginTop: "5px" }}
              >
                Admin
              </Typography>
            </Box>

            {/* Edit Button */}
            <Button
              variant="contained"
              onClick={handleEditClick}
              sx={{
                backgroundColor: "white",
                color: "#2E2E2E",
                borderRadius: "50px",
                padding: "15px",
                paddingX: 2,
                marginLeft: { sm: "auto" }, // Align button to the right on large screens
                marginTop: { xs: "20px", sm: "0" },
              }}
            >
              Edit Profile
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              padding: "20px",
              position: "relative",
              marginTop: "85px", // Increased marginTop to move the content down
            }}
          >
            {/* Tab Section */}
            <Box>
              {/* Senders Tab */}
              <Box
                onClick={() => handleTabChange("senders")}
                sx={{
                  cursor: "pointer",
                  padding: "10px",
                  borderBottom:
                    selectedTab === "senders" ? "3px solid #F66F1E" : "none", // Active line
                  display: "inline-block",
                  marginRight: "20px",
                }}
              >
                Active Log
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
                Settings
              </Box>
            </Box>
            {/* Divider Line */}
            <Box
              sx={{
                height: "2px",
                backgroundColor: "#E5E5E5",
                margin: "10px 0",
                position: "relative", // Add some space above and below the line
              }}
            />
            {/* Tab Content */}
            {selectedTab === "senders" && <AdminProfileMatches />}{" "}
            {/* Render AdminProfileInfo for Active Log tab */}
            {selectedTab === "travelers" && <AdminProfileAccount />}{" "}
            {/* Render AdminProfileAccount for Settings tab */}
          </Box>
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default AdminProfile;
