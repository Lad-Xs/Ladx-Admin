import React from "react";
import { Box, Divider, Typography, Avatar } from "@mui/material";
import AdminPerson from "./AdminPerson"; // Import the AdminPerson component (from previous code)
import johnImg from "../../assets/john.jpg";
import gg from "../../assets/gg.jpg";

const AdminMain = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FAFAFA",
        width: "400px", // Adjust the width as needed
        height: "100vh", // Ensure it goes to the bottom of the page
        borderRadius: "8px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "flex-start", // Align items to the top
      }}
    >
      <AdminPerson />
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

      {[...Array(3)].map((_, index) => (
        <Box
          sx={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow effect
            borderRadius: "8px", // Optional: add border-radius for a smoother look
            padding: "20px", // Optional: add padding for inner spacing
            marginBottom: "10px",
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
              <Avatar src={johnImg} sx={{ width: 30, height: 30 }} />{" "}
              {/* Adjust image path */}
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
                  src={gg}// Replace with your image path
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
              <Avatar src={johnImg} sx={{ width: 30, height: 30 }} />{" "}
              {/* Adjust image path */}
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
                  sx={{ color: "red", textAlign: { xs: "center", md: "left" } }}
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
      ))}
    </Box>
  );
};

export default AdminMain;
