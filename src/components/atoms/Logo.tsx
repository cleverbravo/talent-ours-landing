"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface LogoProps {
  size?: "small" | "medium";
  variant?: "white-orange" | "blue";
}

export default function Logo({ size = "small", variant = "white-orange" }: LogoProps) {
  const iconSize = size === "small" ? 128 : 192;
  console.log(iconSize);
  const src = variant === "blue" ? "/icons/logo-blue.svg" : "/icons/to-logo-white-orange.svg";

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: iconSize,
          height: "60%",
        }}
      >
        <Image
          src={src}
          alt="Talent Ours Logo"
          width={iconSize}
          height={iconSize}
          style={{ width: "100%", height: "60%" }}
        />
      </Box>
    </Box>
  );
}
