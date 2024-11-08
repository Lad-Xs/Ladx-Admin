// TravelerShippingAddress.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const TravelerShippingAddress = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Shipping Details Header */}
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
          Package Detail{" "}
          <span style={{ color: "#999999" }}>- Bag of clothes</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Package Name <span style={{ color: "#999999" }}>- </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Item Description{" "}
          <span style={{ color: "#999999" }}>
            - Shirts, Trousers and Leggings
          </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Package Value <span style={{ color: "#999999" }}>- $30</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Quantity in KG <span style={{ color: "#999999" }}>- 20kg</span>
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Address sending from <span style={{ color: "#999999" }}>- </span>
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Address delivering <span style={{ color: "#999999" }}>- </span>
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Name of Receiver <span style={{ color: "#999999" }}>-</span>
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#210947", fontWeight: "bold" }}
        >
          Phone number of Receiver <span style={{ color: "#999999" }}>- </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default TravelerShippingAddress;
