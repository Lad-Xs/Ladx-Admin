import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  Grid,
  Divider,
  InputBase,
  Avatar,
  Checkbox,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping"; // Delivery car icon
import PersonIcon from "@mui/icons-material/Person"; // User icon
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // Logout icon
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Import the bell icon
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import homepp from "../assets/homepp.jpg";
import joanna from "../assets/joanna.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MessageIcon from "@mui/icons-material/Message";
import test from "../assets/test.jpg";
import leilaImg from "../assets/leila.jpg";
import samImg from "../assets/sam.jpg";
import johnImg from "../assets/john.jpg";
import gg from "../assets/gg.jpg";

import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path); // Use path for navigation
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#F5F5F5" }}>
      {/* Sidebar with logo */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "fixed", // Make the sidebar fixed
          top: 0,
          left: 0,
          height: "100vh", // Full height to avoid scrolling
          //zIndex: 1000, // Ensures it's above other content
        }}
      >
        {/* Logo at the top */}
        <Box
          component="img"
          src={test} // Update with your logo path
          alt="Ladx Logo"
          sx={{
            width: "150px",
            height: "auto",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        />

        {/* Sidebar below the logo with curved top */}
        <Box
          sx={{
            backgroundColor: "#210947",
            width: { xs: "80px", sm: "226px" }, // Width changes based on screen size
            height: "100%", // Full height
            borderTopRightRadius: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px 0",
          }}
        >
          {/* List of navigation items */}
          <List sx={{ color: "#D3D3D3" }}>
            {/* Home */}
            <ListItem
              button
              onClick={() => handleNavigation("/admin")} // Navigate to admin
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>

            {/* Orders */}
            <ListItem
              button
              onClick={() => handleNavigation("/admin-l")} // Navigate to admin-l
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText
                primary="Orders"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>

            {/* Users */}
            <ListItem
              button
              onClick={() => handleNavigation("/user")} // Navigate to user
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="Users"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>

            {/* Message */}
            <ListItem
              button
              onClick={() => handleNavigation("/admin-m")} // Navigate to admin-m
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <MessageIcon />{" "}
              </ListItemIcon>
              <ListItemText
                primary="Messages"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>

            {/* Settings */}
            <ListItem
              button
              onClick={() => handleNavigation("/")} // Navigate to settings
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>
          </List>

          {/* Logout near the bottom */}
          <List sx={{ color: "#D3D3D3" }}>
            <ListItem
              button
              onClick={() => handleNavigation("/admin")} // Logout to admin page
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Space between sidebar and right content */}
      <Box
        sx={{
          marginLeft: { xs: "80px", sm: "226px" }, // Leave space for the fixed sidebar
          padding: "20px",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        {/* Main content here */}

        {/* Three equal boxes in a responsive grid */}
        <Grid container spacing={2} sx={{ flexGrow: 0 }}>
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: "white",
                  width: { xs: "90%", sm: "180px", md: "205px" }, // Smaller width for mobile and medium screens
                  height: { xs: "160px", sm: "180px", md: "190px" }, // Adjusted height for smaller screens
                  padding: { xs: "8px", sm: "10px", md: "10px" }, // Reduced padding on smaller screens
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column", // Align content vertically in the center
                  margin: { xs: "auto", sm: "10px auto", md: "0" }, // Center the boxes on small screens
                }}
              >
                {index === 0 && (
                  <>
                    {/* Content for first box */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {/* Overlapping profile images */}
                      <Box sx={{ position: "relative", width: 50, height: 30 }}>
                        {/* First Image */}
                        <Box
                          component="img"
                          src={johnImg} // Replace with your first image src
                          sx={{
                            width: { xs: 25, md: 30 }, // Smaller image size on mobile
                            height: { xs: 25, md: 30 },
                            borderRadius: "50%",
                            border: "2px solid white",
                            position: "absolute",
                            left: 0,
                            zIndex: 3,
                          }}
                        />

                        {/* Second Image */}
                        <Box
                          component="img"
                          src={leilaImg} // Replace with your second image src
                          sx={{
                            width: { xs: 25, md: 30 },
                            height: { xs: 25, md: 30 },
                            borderRadius: "50%",
                            border: "2px solid white",
                            position: "absolute",
                            left: 10,
                            zIndex: 2,
                          }}
                        />

                        {/* Third Image */}
                        <Box
                          component="img"
                          src={johnImg} // Replace with your third image src
                          sx={{
                            width: { xs: 25, md: 30 },
                            height: { xs: 25, md: 30 },
                            borderRadius: "50%",
                            border: "2px solid white",
                            position: "absolute",
                            left: 20,
                            zIndex: 1,
                          }}
                        />
                      </Box>

                      {/* Text next to images */}
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: "10px", md: "12px" },
                          marginLeft: "50px",
                        }}
                      >
                        Amount of Travelers
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#F66F1E",
                        marginTop: "10px",
                        fontSize: { xs: "20px", md: "24px" },
                      }}
                    >
                      101
                    </Typography>
                  </>
                )}

                {index === 1 && (
                  <>
                    {/* Content for second box */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          display: "flex",
                          position: "relative",
                          marginRight: "10px",
                        }}
                      >
                        <Box
                          component="img"
                          src={homepp}
                          sx={{
                            width: { xs: 25, md: 30 },
                            height: { xs: 25, md: 30 },
                            borderRadius: "50%",
                            border: "2px solid white",
                            position: "absolute",
                            left: 0,
                          }}
                        />
                        <Box
                          component="img"
                          src={homepp}
                          sx={{
                            width: { xs: 25, md: 30 },
                            height: { xs: 25, md: 30 },
                            borderRadius: "50%",
                            border: "2px solid white",
                            position: "absolute",
                            left: 15,
                          }}
                        />
                      </Box>

                      {/* Text next to images */}
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: "10px", md: "12px" },
                          marginLeft: "50px",
                        }}
                      >
                        Amount of Senders
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#F66F1E",
                        marginTop: "10px",
                        fontSize: { xs: "20px", md: "24px" },
                      }}
                    >
                      226
                    </Typography>
                  </>
                )}

                {index === 2 && (
                  <>
                    {/* Content for third box */}
                    <Box
                      sx={{
                        alignSelf: "flex-start",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#F66F1E",
                          fontSize: { xs: "14px", md: "16px" },
                        }}
                      >
                        Monthly
                      </Typography>
                      <ArrowDropDownIcon
                        sx={{
                          color: "#F66F1E",
                          fontSize: { xs: "18px", md: "20px" },
                          marginLeft: "5px",
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        color: "#210947",
                        fontSize: { xs: "24px", md: "28px" },
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    >
                      74
                    </Typography>

                    <Typography
                      sx={{
                        color: "#210947",
                        fontSize: { xs: "12px", md: "14px" },
                        marginTop: "5px",
                        textAlign: "center",
                      }}
                    >
                      Total Amount of Package <br /> Delivered/Sender
                    </Typography>
                  </>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Search bar with search icon on the left */}
        <Box
          sx={{ display: "flex", alignItems: "center", 
            marginTop: "15px",
            marginBottom: "10px" }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
              flexGrow: 1,
              backgroundColor: "white",
              borderRadius: "10px",
              marginRight: "10px",
            }}
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: "inherit", marginRight: "8px" }} />
              ),
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              color: "#F66F1E",
              padding: "10px 15px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Today{" "}
            <KeyboardArrowDownIcon
              sx={{ marginLeft: "4px", color: "#F66F1E" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            flexGrow: 1,
            // boxShadow: "0 1px 5px rgba(0,0,0,0.1)",

            borderRadius: "8px",

            padding: "20px",
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* White Container */}
          <Box
            sx={{
              backgroundColor: "white",
              padding: {
                xs: "10px",
                sm: "15px",
                md: "20px",
              },
              borderRadius: "10px",
              // boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
              marginTop: "1px",
              width: "100%",
              height: {
                xs: "auto",
                sm: "auto",
                md: "100vh",
              },
              position: "relative",
              //overflow: "auto",
            }}
          >
            <h2>Update Delivery Status</h2>

            {/* Header Row for Items, Traveler, Status */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: {
                  xs: "5px",
                  sm: "8px",
                  md: "10px",
                },
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              {["Item", "Traveler", "Status"].map((text, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "12px", md: "16px" },
                    textAlign: "center",
                    flex: { xs: "1 1 100%", md: "auto" },
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>

            {/* Item List */}
            <Box sx={{ marginBottom: "20px" }}>
              {["Hand Bags", "Gadgets", "Food Items", "Hand Bags"].map(
                (item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                      borderBottom: index < 3 ? "1px solid #E0E0E0" : "none",
                      paddingBottom: "10px",
                      paddingX: { xs: "10px", sm: "0" },
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    {/* Item Name and Checkbox */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox size="small" />
                      <Typography
                        sx={{
                          marginLeft: "10px",
                          fontSize: { xs: "14px", md: "16px" },
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>

                    {/* Traveler Information */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: { xs: "8px", md: "0" },
                      }}
                    >
                      <Box
                        component="img"
                        src={[johnImg, leilaImg, samImg, johnImg][index]}
                        alt="profile"
                        sx={{
                          width: 25,
                          height: 25,
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                        {
                          [
                            "Sam Kethin",
                            "John Durelo",
                            "Leila Adebayo",
                            "Sam Kethin",
                          ][index]
                        }
                      </Typography>
                    </Box>

                    {/* Status Information */}
                    <Box
                      sx={{
                        borderRadius: "4px",
                        padding: "5px 10px",
                        textAlign: "end",
                        color:
                          index === 1 ? "red" : index === 2 ? "green" : "blue",
                        fontSize: { xs: "14px", md: "16px" },
                        marginTop: { xs: "8px", md: "0" },
                      }}
                    >
                      {
                        ["In Process", "Failed", "Delivered", "In Process"][
                          index
                        ]
                      }
                    </Box>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Main content box on the far right */}
      <Box
        sx={{
          backgroundColor: "#DADADA",
          width: "400px", // Adjust the width as needed
          height: "100vh", // Ensure it goes to the bottom of the page
          borderRadius: "8px",
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          display: "flex",
          //marginLeft: { xs: "80px", sm: "226px" }, // Leave space for the fixed sidebar
          padding: "20px",
          flexDirection: "column",
          //alignItems: "center", // Center content horizontally
          overflow: "auto",
          flexGrow: 1,
          height: "100vh",
          justifyContent: "flex-start", // Align items to the top
        }}
      >
        {/* Responsive layout for all icons and text */}
        <Grid
          container
          direction="column" // Column by default for all items
          alignItems="center"
          sx={{ width: "100%", marginTop: "20px" }}
        >
          {/* Bell Icon, Name Section (Name + Admin), and Person Icon */}
          <Grid
            container
            item
            direction={{ xs: "column", md: "row" }} // Column on mobile, row on larger screens
            alignItems="center"
            justifyContent="center"
            spacing={3} // Adds space between items in row layout
          >
            {/* Bell Icon with Black Background and Green Dot */}
            <Grid item>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <NotificationsIcon sx={{ color: "white" }} />
                </Box>
                {/* Green Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#009951",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Grid>

            {/* Name Section (Name + Admin) */}
            <Grid item>
              <Box sx={{ textAlign: "center" }}>
                {/* Name */}
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Sam Adeniyi
                </Typography>
                {/* Role */}
                <Typography variant="body2" sx={{ color: "#009951" }}>
                  Admin
                </Typography>
              </Box>
            </Grid>

            {/* Person Icon with Square Background */}
            <Grid item>
              <Box
                sx={{
                  backgroundColor: "black",
                  width: "65px",
                  height: "65px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "0",
                }}
              >
                <PersonIcon sx={{ color: "white", fontSize: "40px" }} />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Horizontal Divider */}
        <Divider
          sx={{
            width: "384px",
            height: "2px",
            backgroundColor: "#F5F5F5",
            marginTop: "20px",
          }}
        />

        {/* Delivery In Process Heading */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Space between the heading and the circle
            width: "100%", // Full width for alignment
            marginTop: "20px", // Space above the heading
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center", flex: 1 }}>
            Delivery In Process
          </Typography>

          {/* Circle with Number */}
          <Box
            sx={{
              backgroundColor: "#F66F1E",
              borderRadius: "50%",
              width: "40px", // Circle size
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10px", // Space between heading and circle
            }}
          >
            <Typography variant="body1" sx={{ color: "white" }}>
              23
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow effect
            borderRadius: "8px", // Optional: add border-radius for a smoother look
            padding: "20px", // Optional: add padding for inner spacing
            backgroundColor: "white", // Optional: set background color for contrast
          }}
        >
          {/* Top Section with Time Left */}
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginBottom: "10px" }}
          >
            3 hours left
          </Typography>

          {/* From and To Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              position: "relative",
              "@media (max-width: 600px)": {
                flexDirection: "column", // Stack vertically on small screens
                alignItems: "center",
              },
            }}
          >
            {/* Left Side (Sender) */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: { xs: "10px", md: "0px" },
              }}
            >
              <Avatar src={samImg} sx={{ width: 30, height: 30 }} />{" "}
              {/* Reduced size */}
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Sender
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", textAlign: "center" }}
              >
                From
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "red", textAlign: "center" }}
              >
                Canada
              </Typography>
            </Box>
            {/* Center Dashed Line and Circle */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                marginBottom: { xs: "10px", md: "0px" },
              }}
            >
              {/* Left Side Dashed Line */}
              <Divider
                orientation="horizontal"
                sx={{
                  width: { xs: "2px", md: "2px", lg: "10px" }, // Adjust the length of the line for larger screens
                  borderColor: "black",
                  borderStyle: "dashed",
                  transition: "width 0.3s ease-in-out", // Smooth transition
                }}
              />
              {/* Circle in the Middle */}
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#F66F1E",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  src={gg} // Replace with your image path
                  alt="Description" // Provide an alt description for accessibility
                  style={{
                    width: "100%", // Set to 100% to fill the box
                    height: "100%", // Set to 100% to fill the box
                    borderRadius: "50%", // Ensure the image is circular
                  }}
                />
              </Box>
              {/* Right Side Dashed Line */}
              <Divider
                orientation="horizontal"
                sx={{
                  width: { xs: "50px", md: "150px", lg: "250px" }, // Adjust for different screen sizes
                  borderColor: "black",
                  borderStyle: "dashed",
                  transition: "width 0.3s ease-in-out", // Smooth transition
                }}
              />
            </Box>

            {/* Right Side (Traveler and Unmatch Button) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" }, // Flex in row on larger screens, stack on mobile
                justifyContent: "flex-start",
              }}
            >
              <Avatar src={joanna} sx={{ width: 30, height: 30 }} />{" "}
              {/* Reduced size */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  marginLeft: { md: "10px" }, // Adds space between Avatar and text on larger screens
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#FF0000", marginTop: "5px" }}
                >
                  Traveler
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  To
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "red",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Kenya
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "10px" }}
          >
            Item(s): iPhone 12, Hand Fan, Dell Laptop
          </Typography>
        </Box>

        <Box
          sx={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow effect
            borderRadius: "8px", // Optional: add border-radius for a smoother marginTop:"",look
            marginTop: "10px",
            padding: "20px", // Optional: add padding for inner spacing
            backgroundColor: "white", // Optional: set background color for contrast
          }}
        >
          {/* Top Section with Time Left */}
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginBottom: "10px" }}
          >
            3 hours left
          </Typography>

          {/* From and To Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              position: "relative",
              "@media (max-width: 600px)": {
                flexDirection: "column", // Stack vertically on small screens
                alignItems: "center",
              },
            }}
          >
            {/* Left Side (Sender) */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: { xs: "10px", md: "0px" },
              }}
            >
              <Avatar src={samImg} sx={{ width: 30, height: 30 }} />{" "}
              {/* Reduced size */}
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Sender
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", textAlign: "center" }}
              >
                From
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "red", textAlign: "center" }}
              >
                Canada
              </Typography>
            </Box>
            {/* Center Dashed Line and Circle */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                marginBottom: { xs: "10px", md: "0px" },
              }}
            >
              {/* Right Side Dashed Line */}
              <Divider
                orientation="horizontal"
                sx={{
                  width: { xs: "50px", md: "150px", lg: "250px" }, // Adjust for different screen sizes
                  borderColor: "black",
                  borderStyle: "dashed",
                  transition: "width 0.3s ease-in-out", // Smooth transition
                }}
              />
              {/* Circle in the Middle */}
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#F66F1E",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  src={gg} // Replace with your image path
                  alt="Description" // Provide an alt description for accessibility
                  style={{
                    width: "100%", // Set to 100% to fill the box
                    height: "100%", // Set to 100% to fill the box
                    borderRadius: "50%", // Ensure the image is circular
                  }}
                />
              </Box>
              {/* Right Side Dashed Line */}
              <Divider
                orientation="horizontal"
                sx={{
                  width: { xs: "10px", md: "2px", lg: "10px" }, // Adjust for different screen sizes
                  borderColor: "black",
                  borderStyle: "dashed",
                  transition: "width 0.3s ease-in-out", // Smooth transition
                }}
              />
            </Box>

            {/* Right Side (Traveler and Unmatch Button) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" }, // Flex in row on larger screens, stack on mobile
                justifyContent: "flex-start",
              }}
            >
              <Avatar src={joanna} sx={{ width: 30, height: 30 }} />{" "}
              {/* Reduced size */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  marginLeft: { md: "10px" }, // Adds space between Avatar and text on larger screens
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#FF0000", marginTop: "5px" }}
                >
                  Traveler
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  To
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "red",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Kenya
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "10px" }}
          >
            Item(s): iPhone 12, Hand Fan, Dell Laptop
          </Typography>
        </Box>

        <Box
          sx={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow effect
            borderRadius: "8px", // Optional: add border-radius for a smoother marginTop:"",look
            marginTop: "10px",
            padding: "20px", // Optional: add padding for inner spacing
            backgroundColor: "white", // Optional: set background color for contrast
          }}
        >
          {/* Top Section with Time Left */}
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginBottom: "10px" }}
          >
            3 hours left
          </Typography>

          {/* From and To Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              position: "relative",
              "@media (max-width: 600px)": {
                flexDirection: "column", // Stack vertically on small screens
                alignItems: "center",
              },
            }}
          >
            {/* Left Side (Sender) */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: { xs: "10px", md: "0px" },
              }}
            >
              <Avatar src={samImg} sx={{ width: 30, height: 30 }} />{" "}
              {/* Reduced size */}
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Sender
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", textAlign: "center" }}
              >
                From
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "red", textAlign: "center" }}
              >
                Canada
              </Typography>
            </Box>
            {/* Center Dashed Line and Circle */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                marginBottom: { xs: "10px", md: "0px" },
              }}
            >
              {/* Right Side Dashed Line */}
              <Divider
                orientation="horizontal"
                sx={{
                  width: { xs: "50px", md: "150px", lg: "250px" }, // Adjust for different screen sizes
                  borderColor: "black",
                  borderStyle: "dashed",
                  transition: "width 0.3s ease-in-out", // Smooth transition
                }}
              />
              {/* Circle in the Middle */}
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#F66F1E",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  src={gg} // Replace with your image path
                  alt="Description" // Provide an alt description for accessibility
                  style={{
                    width: "100%", // Set to 100% to fill the box
                    height: "100%", // Set to 100% to fill the box
                    borderRadius: "50%", // Ensure the image is circular
                  }}
                />
              </Box>
              {/* Right Side Dashed Line */}
              <Divider
                orientation="horizontal"
                sx={{
                  width: { xs: "10px", md: "2px", lg: "10px" }, // Adjust for different screen sizes
                  borderColor: "black",
                  borderStyle: "dashed",
                  transition: "width 0.3s ease-in-out", // Smooth transition
                }}
              />
            </Box>

            {/* Right Side (Traveler and Unmatch Button) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" }, // Flex in row on larger screens, stack on mobile
                justifyContent: "flex-start",
              }}
            >
              <Avatar src={joanna} sx={{ width: 30, height: 30 }} />{" "}
              {/* Reduced size */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  marginLeft: { md: "10px" }, // Adds space between Avatar and text on larger screens
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#FF0000", marginTop: "5px" }}
                >
                  Traveler
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  To
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "red",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Kenya
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "10px" }}
          >
            Item(s): iPhone 12, Hand Fan, Dell Laptop
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
