"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface LogoProps {
  size?: "small" | "medium";
  variant?: "white-orange" | "blue";
}

export default function Logo({ size = "small", variant = "white-orange" }: LogoProps) {
  const iconSize = size === "small" ? 128 : 192;
  const src = variant === "blue" ? "/icons/logo-blue.svg" : "/icons/to-logo-white-orange.svg";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        width: iconSize,
        maxWidth: "100%",
        flexShrink: 0,
        flexGrow: 0,
        minWidth: 0,
        pointerEvents: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "auto",
        }}
      >
        <Image
          src={src}
          alt="Talent Ours Logo"
          width={iconSize}
          height={iconSize}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>
    </Box>
  );
}
