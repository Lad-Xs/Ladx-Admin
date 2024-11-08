import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  useTheme,
  IconButton,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import van from "../assets/Van.jpg";
import { ArrowBack } from "@mui/icons-material"; // Arrow back icon
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Bell Icon
import susa from "../assets/susa.jpg";
import men from "../assets/men.jpg";
import af from "../assets/af.jpg";
import test from "../assets/test.jpg";
import MessageIcon from "@mui/icons-material/Message";
import AdminLayout from "./AdminLayout";

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
                Tobi Johnson
              </Typography>

              <Typography
                variant="body2"
                sx={{ marginRight: "25px", color: "black" }}
              >
                20Kg
              </Typography>
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
                  Dena Airline
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
                  From Nigeria - To Kigali, Rwanda 13 November, 2024 1:30PM
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ marginTop: "5px", color: "black" }}
              >
                12f5338644
              </Typography>
            </Box>
          </Box>
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
              src={susa} // Replace with the actual path
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
              Match with Tobi
            </Button>
          </Box>

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
              marginTop: "70px",
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
              src={af} // Replace with the actual path
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
              Match with Tobi
            </Button>
          </Box>
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default TravelerMatched;
