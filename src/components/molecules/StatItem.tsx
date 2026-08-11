"use client";

import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface StatItemProps {
  icon: ReactNode;
  label: string;
}

export default function StatItem({ icon, label }: StatItemProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
        {icon}
    <Typography sx={{ color: "primary.main", mt: 1, fontWeight: 'fontWeightBold' }}>{label}</Typography>
    </Box>
  );
}
