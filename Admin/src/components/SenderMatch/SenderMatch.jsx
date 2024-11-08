import React from "react";
import {
  Box,
  useTheme,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowBack } from "@mui/icons-material"; // Arrow back icon
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import UserInfo from "../UserInfo";
import SenderMatched from "./SenderMatched";
import SenderUnmatched from "./SenderUnmatche";

const SenderMatch = () => {
  const navigate = useNavigate(); // Hook for navigation
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <AdminLayout>
      <Box sx={{ display: "flex", height: "100vh", backgroundColor: "white" }}>
        <UserInfo />

        {/* Main content section with original styles */}
        <Box
          sx={{
            color: "#FFFFFF",
            marginLeft: { xs: "80px", sm: "226px" },
            padding: "20px",
            flexGrow: 1,
            height: "100vh",
            // overflow: "auto",
          }}
        >
          {/* Back Arrow and Request Delivery text */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              marginTop: { xs: "120px", sm: "120px" }, // Adjust marginTop based on screen size
              flexDirection: { xs: "column", sm: "row" }, // Stack items vertically on small screens
              justifyContent: { xs: "flex-start", sm: "flex-start" }, // Move to the left on small screens
              paddingLeft: { xs: "16px", sm: "0px" }, // Add padding on mobile screens to shift content left
            }}
          >
            {/* Adjusted Back Arrow Button for mobile */}
            <IconButton
              onClick={() => handleNavigation("/admin-l")}
              sx={{
                backgroundColor: "#F5F5F5",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: { xs: "10px", sm: "0px" }, // Add bottom margin on small screens
              }}
            >
              <ArrowBack sx={{ color: "#F66F1E" }} />
            </IconButton>

            {/* Responsive Text */}
            <Typography
              variant="h6"
              sx={{
                marginLeft: { xs: "0px", sm: "8px" }, // Remove left margin on mobile
                textAlign: { xs: "left", sm: "left" }, // Ensure text is aligned left on small screens
                fontSize: { xs: "16px", sm: "inherit" }, // Adjust font size for mobile
              }}
            >
              Match
              <span style={{ color: "#F66F1E", marginLeft: "10px" }}>
                Susan Sandra
              </span>
            </Typography>
          </Box>

          <Box>
            {/* Optional: Add your layout or other content here */}
            {/* SenderMatched Component */}
            <SenderMatched />{" "}
            {/* This will render the SenderMatched component */}
            {/* Additional content can go below */}
          </Box>

          <Typography
            variant="h6"
            sx={{ marginLeft: "8px", marginTop: "50px", marginBottom: "10px" }}
          >
            Traveler in Sync
          </Typography>

          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
          >
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              sx={{
                width: "450px", // Set width to 450 pixels
                height: "45px", // Set height to 45 pixels
                backgroundColor: "white",
                borderRadius: "10px", // Smoothly curved shape
                marginRight: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", // Ensure border radius is applied to the input
                },
              }}
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ color: "inherit", marginRight: "8px" }} />
                ),
              }}
            />
          </Box>

          {[...Array(2)].map((_, index) => (
            <SenderUnmatched key={index} /> // Render SenderUnmatched twice
          ))}
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default SenderMatch;
