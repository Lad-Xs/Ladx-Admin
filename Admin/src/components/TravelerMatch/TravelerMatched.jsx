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
import MatcheTraveler from "./MatchedTraveler";
import UnmatchedTraveler from "./UnmatchedTraveler";

const TravelerMatched = () => {
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
            marginLeft: { xs: "100px", sm: "226px" }, // Leave space for the fixed sidebar
            padding: "20px",
            flexGrow: 1,
            height: "100vh",
            //  overflow: "auto",
          }}
        >
          {/* Back Arrow and Request Delivery text */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              marginTop: "120px",
            }}
          >
            {" "}
            {/* Adjusted marginTop */}
            <IconButton
              onClick={() => handleNavigation("/admin-l")} // Ensure the path is correct
              sx={{
                backgroundColor: "#F5F5F5",
                borderRadius: "50%",
                padding: "10px",
              }}
            >
              <ArrowBack sx={{ color: "#F66F1E" }} />
            </IconButton>
            <Typography variant="h6" sx={{ marginLeft: "8px" }}>
              Match
              <span style={{ color: "#F66F1E", marginLeft: "10px" }}>
                Tobi Johnson
              </span>
            </Typography>
          </Box>

          {/* Additional content goes here */}

          <MatcheTraveler />

          <Typography
            variant="h6"
            sx={{ marginLeft: "8px", marginTop: "50px" }}
          >
            Sender in Sync
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

          <UnmatchedTraveler />
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default TravelerMatched;
