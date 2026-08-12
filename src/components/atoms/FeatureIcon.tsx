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
      }}
    >
        {icon}
        <Typography variant="body1" sx={{ 
          color: "white", 
          mt: 0, 
          fontSize: { xs: "0.5", md: "0.8rem" } 
        }}>
          {label}
        </Typography>
    </Box>
  );
}
