import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import mes from "../../assets/mes.jpg"; // Profile image
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Import MoreVertIcon

const UserSenderInfo = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "10px" }}>
      {[...Array(3)].map((_, index) => (
        <Box
          onClick={() => navigate("/Admin-p")} // Navigate to Admin-p when the white box is clicked
          sx={{
            width: "100%",
            maxWidth: "900px", // Decrease the size of the white box
            height: { xs: "auto", sm: "180px" }, // Adjust height for responsiveness
            backgroundColor: "#FFF",
            boxShadow: "0 0 5px rgba(0,0,0,0.2)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            marginBottom: "10px",
            flexDirection: { xs: "column", sm: "row" }, // Stacks content vertically on small screens
            "&:hover": {
              cursor: "pointer", // Change cursor on hover
              boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional hover effect
            },
          }}
        >
          {/* Profile Image */}
          <Box
            component="img"
            src={mes} // Replace with actual path
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
              Jonathan Smith
            </Typography>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                gap: "5px",
                flexWrap: { xs: "wrap", sm: "nowrap" },
              }}
            >
              <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                Rwanda, Kigali
              </Typography>
              <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                <span
                  style={{
                    color: "red",
                    marginRight: "15px",
                    marginLeft: "15px",
                  }}
                >
                  •
                </span>
                50 Items Sent
              </Typography>
            </Box>
          </Box>

          {/* Message and Menu Icon */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              "@media (max-width: 600px)": {
                width: "100%", // Make the button take full width on small screens
                marginTop: "10px",
                justifyContent: "center", // Center on small screens
              },
            }}
          >
            {/* Message Button */}
            <Box
              onClick={(e) => {
                e.stopPropagation(); // Prevents the box click from triggering
                navigate("/Admin-m"); // Navigate to Admin-m when the message button is clicked
              }}
              sx={{
                backgroundColor: "#210947",
                color: "#FFF",
                padding: { xs: "8px 10px", sm: "10px 20px" },
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "#3E2B69",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Message
              </Typography>
            </Box>

            {/* Ellipsis Menu Icon */}
            <MoreVertIcon
              sx={{
                color: "black",
                marginLeft: "10px", // Add some space between Message and the icon
                cursor: "pointer",
                "&:hover": {
                  color: "#F66F1E", // Optional hover effect
                },
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default UserSenderInfo;
