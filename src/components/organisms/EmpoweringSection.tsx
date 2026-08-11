"use client";

import { Box, Container, Typography } from "@mui/material";
import StatItem from "@/components/molecules/StatItem";
import Image from "next/image";

const values = [
  { icon: <Image src="/icons/save-time.svg" alt="save time" width={90} height={90} />, label: "Save Time" },
  { icon: <Image src="/icons/productivity.svg" alt="save time" width={90} height={90} />, label: "Increase\nProductivity" },
  { icon: <Image src="/icons/cost.svg" alt="save time" width={90} height={90} />, label: "Reduce\nCosts" },
  { icon: <Image src="/icons/flexible.svg" alt="save time" width={90} height={90} />, label: "Flexible\nSupport" },
  { icon: <Image src="/icons/multi-task.svg" alt="save time" width={90} height={90} />, label: "Multi Task" },
];

export default function EmpoweringSection() {
  return (
    <Box component="section" sx={{ py: 12, backgroundColor: "white", textAlign: "center" }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "2.5rem" }, mb: 2 }}
        >
          Empowering Your Business,
          <br />
          One Virtual Assistant at a Time.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 10, maxWidth: 600, mx: "auto", lineHeight: 1.8 }}
        >
          A Virtual Assistant helps you save time, reduce workload, and stay
          focused on what matters most. With reliable day-to-day support, you
          can improve productivity and grow your business more efficiently.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 4, md: 8 },
          }}
        >
          {values.map((val) => (
            <StatItem key={val.label} icon={val.icon} label={val.label} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
