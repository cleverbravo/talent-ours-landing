"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import FeatureIcon from "@/components/atoms/FeatureIcon";
import Logo from "@/components/atoms/Logo";

const features = [
  { icon: <Image src="/icons/mesa4.svg" alt="Data Entry" width={60} height={60} />, label: "TASK MANAGEMENT" },
  { icon: <Image src="/icons/mesa6.svg" alt="Data Entry" width={60} height={60} />, label: "DATA SECURITY" },
  { icon: <Image src="/icons/mesa8.svg" alt="Data Entry" width={60} height={60} />, label: "CLEAR COMMUNICATION" },
  { icon: <Image src="/icons/mesa10.svg" alt="Data Entry" width={60} height={60} />, label: "RESPONSIVE SUPPORT" },
  { icon: <Image src="/icons/mesa13.svg" alt="Data Entry" width={60} height={60} />, label: "SKILLED PROFESSIONALS" },

  { icon: <Image src="/icons/mesa5.svg" alt="Data Entry" width={60} height={60} />, label: "REMOTE AVAILABILITY" },
  { icon: <Image src="/icons/mesa7.svg" alt="Data Entry" width={60} height={60} />, label: "RESPONSIVE SUPPORT" },
  { icon: <Image src="/icons/mesa9.svg" alt="Data Entry" width={60} height={60} />, label: "FAST TURNAROUND" },
  { icon: <Image src="/icons/mesa11.svg" alt="Data Entry" width={60} height={60} />, label: "RELIABLE PARTNERSHIP" },
  { icon: <Image src="/icons/mesa12.svg" alt="Data Entry" width={60} height={60} />, label: "COST-EFFECTIVE SOLUTIONS" },
];

export default function FeaturesGridSection() {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: { xs: 5, sm: 6, md: 7 },
        px: { xs: 1, sm: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
            alignItems: "center",
            gap: { xs: 5, md: 4 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(5, 1fr)",
              },
              gap: { xs: 3, sm: 3, md: 2 },
              rowGap: { xs: 4, sm: 4, md: 5 },
              order: { xs: 2, md: 1 },
            }}
          >
            {features.map((feat, idx) => (
              <FeatureIcon key={`${feat.label}-${idx}`} icon={feat.icon} label={feat.label} />
            ))}
          </Box>

          <Box
            sx={{
              textAlign: "center",
              order: { xs: 1, md: 2 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: { xs: 2, md: 3 },
                width: { xs: 160, sm: 180, md: 192 },
                maxWidth: "100%",
                "& img": {
                  width: "100%",
                  height: "auto",
                },
              }}
            >
              <Logo size="medium" />
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                lineHeight: 1.15,
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                textWrap: "balance",
                wordBreak: "keep-all",
                overflowWrap: "normal",
                hyphens: "none",
              }}
            >
              Behind Every
              <br />
              Successful Business
              <br />
              Is Great Support
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
