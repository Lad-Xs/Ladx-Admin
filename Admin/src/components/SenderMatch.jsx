import React from "react";
import {
  Box,
  Badge,
  useTheme,
  IconButton,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import van from "../assets/Van.jpg";
import { ArrowBack } from "@mui/icons-material"; // Arrow back icon
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Bell Icon
import susa from "../assets/susa.jpg";
import men from "../assets/men.jpg";
import AdminLayout from "./AdminLayout";

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
        {/* User Info Box */}
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: { xs: "200px", sm: "280px" }, // Fixed width for small screens and up
            height: "99px",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Keep space between items
            padding: "10px",
            boxSizing: "border-box", // Include padding in box size
          }}
        >
          {/* Bell Icon with Green Dot */}
          <Badge
            color="success"
            variant="dot"
            overlap="circular"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              marginRight: "2px", // Reduced space between bell and name
            }}
          >
            <Box
              sx={{
                backgroundColor: "#210947",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NotificationsIcon sx={{ color: "#FFFFFF" }} />
            </Box>
          </Badge>

          {/* Name */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center items in the column
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Sam Adeniyi
            </Typography>
            {/* Admin text below the name */}
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                marginTop: "2px",
                fontSize: { xs: "0.7rem", sm: "0.8rem" },
              }} // Adjusted font size for small screens
            >
              Admin
            </Typography>
          </Box>

          {/* Small person icon to the right of the name */}
          <Box
            sx={{
              backgroundColor: "#210947",
              borderRadius: "4px",
              width: "24px",
              height: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "2px", // Reduced space between name and person icon
            }}
          >
            <PersonIcon sx={{ color: "#FFFFFF", fontSize: "16px" }} />
          </Box>
        </Box>

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

          {/* Additional content goes here */}
          <Box
            sx={{
              width: "100%",
              height: "200px",
              backgroundColor: "#FFF",
              boxShadow: "0 0 5px rgba(0,0,0,0.2)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              flexDirection: { xs: "column", sm: "row" }, // Stacks content vertically on small screens
              height: { xs: "auto", sm: "200px" }, // Adjust height for small screens
              "&:hover": {
                cursor: "pointer", // Change cursor on hover
                boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional hover effect
              },
            }}
          >
            {/* Profile Image */}
            <Box
              component="img"
              src={susa} // Replace with actual path
              alt="Profile"
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                marginBottom: { xs: "10px", sm: "0" }, // Adds margin below image on small screens
              }}
            />

            {/* Text Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginLeft: { xs: "0", sm: "25px" }, // Adjust left margin for larger screens
                textAlign: { xs: "center", sm: "left" }, // Center text on small screens
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                Susan Sandra
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  gap: "5px",
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                }}
              >
                <Typography variant="body2" sx={{ color: "black" }}>
                  iPhone XR
                </Typography>

                <Typography variant="body2" sx={{ color: "black" }}>
                  <span style={{ color: "#28A745", marginRight: "5px" }}>
                    •
                  </span>
                  HP Laptop
                </Typography>

                <Typography variant="body2" sx={{ color: "black" }}>
                  <span style={{ color: "#28A745", marginRight: "5px" }}>
                    •
                  </span>
                  Hand Fan
                </Typography>
              </Box>

              {/* Small Profile Image and Details */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" }, // Center profile details on small screens
                  marginTop: "5px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ marginRight: "25px", color: "black" }}
                >
                  Gadgets
                </Typography>
                <Box
                  component="img"
                  src={van} // Replace with the actual path
                  alt="Delivery Car"
                  sx={{
                    width: "15px",
                    height: "15px",
                    margin: "0 5px",
                  }}
                />
                <Typography variant="body2" sx={{ color: "black" }}>
                  From Nigeria - To Kigali, Rwanda
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ marginTop: "5px", color: "black" }}
              >
                Delivery ID: 345YH3456
              </Typography>
            </Box>
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
            <Box
              sx={{
                width: "100%",
                height: "200px",
                backgroundColor: "#FFF",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                borderRadius: "10px",
                display: "flex",
                marginTop: "40px",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                flexDirection: "row",
                "&:hover": {
                  cursor: "pointer", // Change cursor on hover
                  boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional: add hover effect
                },
                "@media (max-width: 600px)": {
                  flexDirection: "column",
                  height: "auto", // Adjust height for small screens
                },
              }}
            >
              {/* Profile Image */}
              <Box
                component="img"
                src={men} // Replace with the actual path
                alt="Profile"
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginBottom: { xs: "10px", sm: "0" },
                }}
              />

              {/* Text Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  marginLeft: "25px",
                  "@media (max-width: 600px)": {
                    textAlign: "center", // Center text on small screens
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  Susan Sandra
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    iPhone XR
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ display: "inline", color: "black" }}
                  >
                    <span style={{ color: "#28A745", marginRight: "5px" }}>
                      •
                    </span>
                    HP Laptop
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ display: "inline", color: "black" }}
                  >
                    <span style={{ color: "#28A745", marginRight: "5px" }}>
                      •
                    </span>
                    Hand Fan
                  </Typography>
                </Box>

                {/* Small Profile Image and Details */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                    "@media (max-width: 600px)": {
                      justifyContent: "center", // Center profile details on small screens
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "25px", color: "black" }}
                  >
                    Gadgets
                  </Typography>
                  <Box
                    component="img"
                    src={van} // Replace with the actual path
                    alt="Delivery Car"
                    sx={{
                      width: "15px",
                      height: "15px",
                      margin: "0 5px",
                    }}
                  />
                  <Typography variant="body2" sx={{ color: "black" }}>
                    From Nigeria - To Kigali, Rwanda
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "5px", color: "black" }}
                >
                  Delivery ID: 345YH3456
                </Typography>
              </Box>

              {/* Match Button */}
              <Button
                variant="contained"
                // onClick={handleMatchClick} // Separate click handler for the button
                sx={{
                  backgroundColor: "#210947",
                  color: "#FFF",
                  borderRadius: "5px",
                  padding: { xs: "8px 10px", sm: "10px 20px" },
                  flexShrink: 0,
                  "@media (max-width: 600px)": {
                    width: "100%", // Make the button take full width on small screens
                    marginTop: "10px",
                  },
                  "&:hover": {
                    backgroundColor: "#3E2B69",
                  },
                }}
              >
                Match With Susan
              </Button>
            </Box>
          ))}
          
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default SenderMatch;
