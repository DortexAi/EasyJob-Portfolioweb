import React from "react";

import { Typography, Container, Box } from "@mui/material";


// import img1 from "../../assets/images";
// import img2 from "../../assets/about/img4.jpg";
// import img3 from "../../assets/about/img3.jpg";

// Step 1: Define the data in JSON format
const aboutData = {
  title: {
    part1: "ABOUT",
    part2: "US"
  },
  description:
    "EasyJob Pvt Ltd is a premier service and product-based company dedicated to revolutionizing the recruitment industry by providing a seamless, results-driven approach to connecting job seekers and employers. Through our innovative platform, we streamline the hiring process by acting as intermediaries, matching top talent with suitable roles and ensuring a smooth, rewarding experience for all parties involved. Our core services include candidate sourcing, thorough screening, strategic matching, and a range of supportive services, from salary negotiations to onboarding. Partnering with EasyJob Pvt Ltd enables companies to benefit from efficient recruitment solutions, while job seekers gain greater access to varied job opportunities.",
//   carouselImages: [img1, img2, img3],
  sections: [
    {
      title: {
        part1: "Company",
        part2: "History"
      },
      content: [
        "Founded in 2022, EasyJob Pvt Ltd began as a dynamic recruitment and staffing firm with the vision of making hiring accessible to all. In just one year, we’ve facilitated employment for over 15,000 job seekers across a diverse range of sectors",
        "Built on the philosophy that “Anyone Can Hire,” our approach empowers companies of all sizes and job seekers of different experience levels to connect in meaningful, impactful ways. Through innovative solutions that simplify recruitment, we strive to build an inclusive job market where talent and opportunity intersect seamlessly."
      ]
    },
    {
      title: {
        part1: "Our",
        part2: "Project MarketPlace"
      },
      content: [
        "EasyJob Pvt Ltd’s Project Marketplace offers an extensive array of recruitment services and advanced digital solutions to cater to the dynamic needs of the modern workforce.",
        "Diverse Service Offerings: Our professional services span multiple industries, serving companies from small startups to large enterprises. We tailor our recruitment services—such as candidate sourcing, screening, and placement—to meet the specific needs of each client, providing a comprehensive recruitment solution.",
        "Product Solutions: Beyond recruitment services, we also develop cutting-edge digital tools designed to optimize the hiring process, enabling companies to locate and secure the right talent more efficiently and effectively.",
        "End-to-End Customer Support: We recognize the uniqueness of each client’s needs and therefore provide customized solutions with full support throughout the recruitment process. From sourcing candidates to final placement, we ensure every stage of recruitment is managed smoothly and effectively."
      ]
    },
    {
      title: {
        part1: "Our",
        part2: "Mission"
      },
      content: [
        "Our mission at EasyJob Pvt Ltd is to bridge the unemployment gap by making valuable job opportunities accessible to everyone. We are committed to empowering companies with the talent they need while helping job seekers find roles that align with their skills and aspirations.",
        "Furthermore, we focus on equipping aspiring professionals with recruitment training, fostering skill development, and supporting career advancement within and beyond recruitment."
      ]
    },
    {
      title: {
        part1: "Our",
        part2: "Vision"
      },
      content: [
        "Our vision is to create a more inclusive job market with minimized unemployment and accessible opportunities for all. We aim to bridge the gap between employers and job seekers, supporting a job market where hiring is efficient and effective. By building a strong affiliate network, we aspire to empower individuals in their professional journeys, helping organizations secure top talent and fostering a connected, resilient economy. With innovation at the forefront, EasyJob Pvt Ltd is committed to leading the future of recruitment with excellence and impact."
      ]
    }
  ]
};

export default function AboutUs() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
     

      <Box sx={{ pt: 15 }}>
        <Container maxWidth="lg">
          {/* Title */}
          <Typography component="h2" fontWeight="bold" gutterBottom>
            <Box
              component="span"
              sx={{
                color: "#0270b2",
                fontSize: 35,
                fontWeight: "bold",
              }}
            >
              {aboutData.title.part1}{" "}
            </Box>
            <Box
              component="span"
              sx={{
                color: "#000000",
                fontSize: 35,
                fontWeight: "bold",
              }}
            >
              {aboutData.title.part2}
            </Box>
          </Typography>

          {/* Description */}
          <Typography sx={{ color: "black", fontWeight: "200", mb: 4, mt: 2 }}>
            {aboutData.description}
          </Typography>


          {/* Sections */}
          {aboutData.sections.map((section, index) => (
            <Box key={index} sx={{ marginTop: 5 }}>
              <Typography component="h2" fontWeight="bold" gutterBottom>
                <Box
                  component="span"
                  sx={{
                    color: "#0270b2",
                    fontSize: 25,
                    fontWeight: "bold",
                  }}
                >
                  {section.title.part1}{" "}
                </Box>
                <Box
                  component="span"
                  sx={{
                    color: "#000000",
                    fontSize: 25,
                    fontWeight: "bold",
                  }}
                >
                  {section.title.part2}
                </Box>
              </Typography>

              {section.content.map((paragraph, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{ color: "#000000", lineHeight: 1.7, mt: 2 }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          ))}
        </Container>
      </Box>

      {/* <Footer /> */}
    </Box>
  );
}
