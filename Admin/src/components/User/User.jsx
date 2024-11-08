import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AdminLayout from "../AdminLayout"; // Assuming AdminLayout is correctly imported
import UserInfo from "../UserInfo"; // Ensure this component is correctly imported
import UserSenderInfo from "./UserSenderInfo"; // Corrected import for UserSenderInfo
import UserTravelerInfo from "./UserTraveleInfo"; // Corrected import for UserTravelerInfo

const User = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("senders"); // Default tab is "senders"

  // Navigation handler
  const handleTabChange = (tab) => {
    setSelectedTab(tab); // Changes active tab
  };

  return (
    <AdminLayout>
      <Box sx={{ display: "flex", height: "100vh", backgroundColor: "white" }}>
        {/* User Info Sidebar */}
        <UserInfo />

        {/* Main Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            marginLeft: { xs: "100px", sm: "226px" },
            padding: "20px",
            position: "relative",
            marginTop: "110px",
            height: "100vh",
          }}
        >
          <Typography variant="h5">Users</Typography>

          {/* Tab Section */}
          <Box sx={{ marginBottom: "20px" }}>
            {/* Senders Tab */}
            <Box
              onClick={() => handleTabChange("senders")}
              sx={{
                cursor: "pointer",
                padding: "10px",
                borderBottom:
                  selectedTab === "senders" ? "3px solid #F66F1E" : "none",
                display: "inline-block",
                marginRight: "20px",
                fontWeight: selectedTab === "senders" ? "bold" : "normal",
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
                  selectedTab === "travelers" ? "3px solid #F66F1E" : "none",
                display: "inline-block",
                fontWeight: selectedTab === "travelers" ? "bold" : "normal",
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
              margin: "10px 0", // Add some space above and below the line
            }}
          />

          {/* Search Box */}
          <Box sx={{ padding: "10px" }}>
            <TextField
              variant="outlined"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: "100%", // Full width search box
                maxWidth: "400px", // Adjust as per your design
                marginBottom: "20px", // Add spacing below the search box if needed
              }}
            />
          </Box>

          {/* Tab Content */}
          <Box sx={{ padding: "10px" }}>
            {selectedTab === "senders" ? (
              <UserSenderInfo /> // Display UserSenderInfo when the 'senders' tab is active
            ) : selectedTab === "travelers" ? (
              <UserTravelerInfo /> // Display UserTravelerInfo when the 'travelers' tab is active
            ) : null}
          </Box>
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default User;
