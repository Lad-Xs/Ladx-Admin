import React from "react";
import { Box, Avatar, Typography, Button, Divider } from "@mui/material";
import joanna from "../../assets/joanna.jpg";
import gg from "../../assets/gg.jpg";
import samImg from "../../assets/sam.jpg";

const AdminProfileMatchBox = ({
  senderImage,
  senderLocation,
  travelerImage,
  travelerLocation,
  timeLeft,
  items,
  matchTime,
}) => {
  return (
    <Box
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "10px",
        backgroundColor: "white",
      }}
    >
      {/* Time Left */}
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginBottom: "10px" }}
      >
        {timeLeft}
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
            flexDirection: "column",
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
          <Avatar src={samImg} sx={{ width: 30, height: 30 }} />
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
            {senderLocation}
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
              width: { xs: "50px", md: "150px", lg: "250px" },
              borderColor: "black",
              borderStyle: "dashed",
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
              src={gg}
              alt="Description"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </Box>
          {/* Right Side Dashed Line */}
          <Divider
            orientation="horizontal"
            sx={{
              width: { xs: "50px", md: "150px", lg: "250px" },
              borderColor: "black",
              borderStyle: "dashed",
            }}
          />
        </Box>

        {/* Right Side (Traveler) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "flex-start",
          }}
        >
          <Avatar src={joanna} sx={{ width: 30, height: 30 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              marginLeft: { md: "10px" },
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
              {travelerLocation}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Matched Info */}
      <Typography
        variant="body2"
        sx={{
          color: "#A9A9A9",
          marginTop: "10px",
          textAlign: "center",
          fontSize: { xs: "12px", md: "14px" },
        }}
      >
        Matched {matchTime}
      </Typography>

      {/* Item Info */}
      <Typography
        variant="body2"
        sx={{ textAlign: "center", marginTop: "10px" }}
      >
        Item(s): {items}
      </Typography>

      {/* Unmatch Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#210947",
          color: "#FFF",
          marginTop: "5px",
          padding: { xs: "4px 8px", md: "6px 12px" },
          borderRadius: "8px",
          textTransform: "none",
          fontSize: { xs: "12px", md: "14px" },
          "&:hover": {
            backgroundColor: "#18073b",
          },
        }}
      >
        Unmatch
      </Button>
    </Box>
  );
};

export default AdminProfileMatchBox;
