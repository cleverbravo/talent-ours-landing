"use client";

import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface StatItemProps {
  icon: ReactNode;
  label: string;
  label2: string;
}

export default function StatItem({ icon, label, label2 }: StatItemProps) {
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
    <Typography
      sx={{
        color: "primary.main",
        mt: 1,
        fontWeight: 'fontWeightBold',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}
    >
      {label}
      <br/>
      {label2}
    </Typography>
    </Box>
  );
}
