// ShippingSender.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const ShippingSender = () => {
  return (
    <Box>
      {/* Shipping Details Title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          width: "100%",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Shipping Details
        </Typography>
      </Box>

      {/* Address Box */}
      <Box
        sx={{
          width: { xs: "100%", md: "446px" }, // Responsive width
          height: "auto", // Adjust height based on content
          border: "1px solid #F66F1E",
          borderRadius: "10px",
          backgroundColor: "#F5F5F5",
          padding: "10px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "8px", // Adds space between text lines
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Flight Number:{" "}
          <span style={{ color: "#999999" }}>- A bag of Clothes</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Departure City: <span style={{ color: "#999999" }}>- </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Destination City:{" "}
          <span style={{ color: "#999999" }}>
            - Shirts, Trousers, and Leggings
          </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Departure Date: <span style={{ color: "#999999" }}>- $30</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Departure Weight: <span style={{ color: "#999999" }}>- 20kg</span>
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Arrival Time: <span style={{ color: "#999999" }}>- </span>
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Boarding Time: <span style={{ color: "#999999" }}>- </span>
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Airline Name: <span style={{ color: "#999999" }}>-</span>
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Weight available for item:{" "}
          <span style={{ color: "#999999" }}>- </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default ShippingSender;
