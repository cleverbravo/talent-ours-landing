"use client";

import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

interface ComparisonItemProps {
  text: string;
  variant: "positive" | "negative";
}

export default function ComparisonItem({
  text,
  variant,
}: ComparisonItemProps) {
  const color =
    variant === "positive" ? "success.light" : "error.light";

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      {variant === "positive" ? (
        <CheckIcon sx={{ color, fontSize: 20, fontWeight: 700 }} />
      ) : (
        <CloseIcon sx={{ color, fontSize: 20, fontWeight: 700 }} />
      )}
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        {text}
      </Typography>
    </Box>
  );
}
