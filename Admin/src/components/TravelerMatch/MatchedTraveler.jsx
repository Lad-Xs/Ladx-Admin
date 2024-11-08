// MatcheTraveler.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import van from "../../assets/Van.jpg"; // Ensure this path is correct
import men from "../../assets/men.jpg"; // Ensure this path is correct

const MatcheTraveler = () => {
  return (
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
          cursor: "pointer",
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
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "black" }}>
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
        <Typography variant="body2" sx={{ marginTop: "5px", color: "black" }}>
          12f5338644
        </Typography>
      </Box>
    </Box>
  );
};

export default MatcheTraveler;
