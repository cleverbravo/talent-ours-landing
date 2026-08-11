"use client";

import { Box, Container, Typography } from "@mui/material";
import {
  Lock,
  Headphones,
  MessageSquare,
  User,
  Globe,
  Briefcase,
  Zap,
  Handshake,
  DollarSign,
} from "lucide-react";
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
  { icon: <Image src="/icons/mesa7.svg" alt="Data Entry" width={60} height={60} />, label: "RESPONSIVE  SUPPORT" },
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
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: { xs: 3, md: 4 },
            }}
          >
            {features.map((feat) => (
              <FeatureIcon key={feat.label} icon={feat.icon} label={feat.label} />
            ))}
          </Box>

          <Box sx={{ textAlign: { xs: "center", md: "center" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 3,
                justifyContent: { xs: "center", md: "center" },
              }}
            >
              <Logo size="medium" />
            </Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, 
                lineHeight: 1.15, 
                fontSize: { xs: "2rem", md: "2.5rem" } 
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
