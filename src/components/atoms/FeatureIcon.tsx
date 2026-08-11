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
        <Typography sx={{ color: "white", mt: 1 }}>{label}</Typography>
    </Box>
  );
}
