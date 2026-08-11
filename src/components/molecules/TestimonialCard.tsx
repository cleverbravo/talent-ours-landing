"use client";

import { Avatar, Box, Typography } from "@mui/material";

interface TestimonialCardProps {
  image: string;
  quote: string;
  name: string;
  title: string;
}

export default function TestimonialCard({
  image,
  quote,
  name,
  title,
}: TestimonialCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 4,
        boxShadow: 4,
        p: 4,
        pt: 6,
        position: "relative",
        borderTop: "58px solid",
        borderBottom: "15px solid",
        borderLeft: "15px solid",
        borderRight: "15px solid",
        borderColor: "primary.main",
        textAlign: "center",
      }}
    >
      <Avatar
        src={image}
        alt={name}
        sx={{
          width: 80,
          height: 80,
          border: "4px solid #0079d6",
          boxShadow: 2,
          position: "absolute",
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontStyle: "italic",
          mb: 4,
          lineHeight: 1.7,
        }}
      >
        &ldquo;{quote}&rdquo;
      </Typography>
      <Box>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          {name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
