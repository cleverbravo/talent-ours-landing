"use client";

import { Box } from "@mui/material";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import WhatIsVASection from "@/components/organisms/WhatIsVASection";
import ComparisonSection from "@/components/organisms/ComparisonSection";
import FeaturesGridSection from "@/components/organisms/FeaturesGridSection";
import BestOptionSection from "@/components/organisms/BestOptionSection";
import EmpoweringSection from "@/components/organisms/EmpoweringSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";

export default function LandingPageTemplate() {
  return (
    <Box sx={{ fontFamily: "var(--font-geist-sans), sans-serif", color: "grey.800", backgroundColor: "white", overflowX: "hidden" }}>
      <Header />
      <Box component="main">
        <HeroSection />
        <WhatIsVASection />
        <ComparisonSection />
        <FeaturesGridSection />
        <BestOptionSection />
        <EmpoweringSection />
        <TestimonialsSection />
      </Box>
    </Box>
  );
}
