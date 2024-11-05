import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import screensImg from "../../assets/images/phoneImage.jpeg";

const Wantjob = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#E6F0FA", p: 2 }}>
      {/* Hero Section */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          textAlign: "center",
          backgroundColor: "rgba(0, 56, 255, 0.8)",
          color: "white",
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
          borderRadius: "8px",
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Find your dream job here !!
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
          Connecting talent with opportunity, simplifying hiring for success.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Button
              variant="contained"
              color="default"
              sx={{ backgroundColor: "black", color: "white" }}
            >
              Download on the App Store
            </Button>
            <Button
              variant="contained"
              color="default"
              sx={{ backgroundColor: "black", color: "white" }}
            >
              Get it on Google Play
            </Button>
          </Stack>
        </Box>

        {/* Mockup Section */}
        <Box
          component="img"
          src={screensImg}
          alt="Easyjob App Screens"
          sx={{
            width: { xs: "100%", md: "50%" },
            maxWidth: "500px",
            mt: { xs: 3, md: 0 },
            borderRadius: 30,
            boxShadow: 10,
          }}
        />
      </Stack>

      {/* Information Section */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="space-around"
        sx={{ mt: 5 }}
      >
        <Box textAlign="center" sx={{ maxWidth: "400px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
            Streamlining Your Hiring Process
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            companies with the right talent, simplifying the journey from job
            posting to successful hire.{" "}
          </Typography>
        </Box>

        <Box textAlign="center" sx={{ maxWidth: "400px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
            Expert Recruitment Solutions
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Our dedicated team works tirelessly to match employers with top
            candidates, ensuring a perfect fit for every position and fostering
            long-term success.{" "}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Wantjob;
