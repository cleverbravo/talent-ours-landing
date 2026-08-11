"use client";

import { Box, Container, Typography } from "@mui/material";

const images = [
  {
    src: "/images/1.jpg",
    alt: "Smiling man on headset",
    bradius:"60px 0 0 0",
    height: 192,
    width:"100%",
    margintop:"0px",
    marginleft:"0px",
  },
  {
    src: "/images/2.png",
    alt: "Woman working on laptop",
    bradius:"0 60px 0 0",
    height: 160,
    width:"85%",
    margintop:"32px",
    marginleft:"0px",
  },
  {
    src: "/images/3.webp",
    alt: "Woman smiling at desk",
    bradius:"0 0 0 60px",
    height: 160,
    width:"85%",
    margintop:"0px",
    marginleft:"37px",
  },
  {
    src: "/images/4.jpeg",
    alt: "Man on headset pointing at screen",
    bradius:"0 0 60px 0",
    height: 192,
    width:"100%",
    margintop:"0px",
    marginleft:"0px",
  },
];

export default function WhatIsVASection() {
  return (
    <Box component="section" sx={{ py: 12, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 8,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "2.5rem" } }}
            >
              What is a Virtual
              <br />
              Assistant?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.8 }}
            >
              Is a remote professional who helps you manage everyday business
              tasks, from scheduling and email management to customer support
              and administrative work.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              By delegating time-consuming tasks, you can stay focused on
              growing your business, increasing productivity, and achieving
              better results—all while saving time and reducing operational
              costs.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
            }}
          >
            {images.map((img) => (
              <Box
                key={img.alt}
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  marginTop: img.margintop,
                  marginLeft: img.marginleft,
                  width: img.width,
                  height: img.height,
                  objectFit: "cover",
                  borderRadius:img.bradius,
                  boxShadow: 2,
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
