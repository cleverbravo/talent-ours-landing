"use client";

import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface FeatureIconProps {
  icon: ReactNode;
  label: string;
}

export default function FeatureIcon({ icon, label }: FeatureIconProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: { xs: 1, md: 1.5 },
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          width: { xs: 48, sm: 56, md: 60 },
          height: { xs: 48, sm: 56, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "contain",
          },
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: "white",
          fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.8rem" },
          fontWeight: 600,
          lineHeight: 1.3,
          letterSpacing: "0.02em",
          wordBreak: "keep-all",
          overflowWrap: "normal",
          hyphens: "none",
          whiteSpace: "normal",
          textAlign: "center",
          maxWidth: "16ch",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
