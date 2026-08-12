"use client";

import { Box, Container, Typography } from "@mui/material";
import TestimonialCard from "@/components/molecules/TestimonialCard";

const testimonials = [
  {
    image:
      "/images/foto1.jpg",
    quote:
      "Working with my team has completely transformed the way we manage our daily operations. Our Virtual Assistant is proactive, organized, and always delivers on time. We've saved countless hours and can now focus on growing our business.",
    name: "Sarah Johnson",
    title: "Founder, BrightEdge Consulting",
  },
  {
    image:
      "/images/foto2.jpg",
    quote:
      "Their professionalism and attention to detail exceeded our expectations. Communication is seamless, tasks are completed efficiently, and we finally have the reliable support our team needed.",
    name: "Michael Carter",
    title: "Operations Manager, Nexo Solutions",
  },
  {
    image:
      "/images/foto3.jpg",
    quote:
      "Hiring a Virtual Assistant was one of the best decisions we've made. From scheduling and administrative work to customer support, everything is handled with accuracy and care. I highly recommend their services to any growing business.",
    name: "Emily Rodriguez",
    title: "CEO, Elevate Marketing Group",
  },
];

export default function TestimonialsSection() {
  return (
    <Box component="section" sx={{ py: 12, backgroundColor: "grey.50" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 800, textAlign: "center", mb: 8 }}
        >
          What Our Clients Say
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            maxWidth: 1000,
            mx: "auto",
          }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
