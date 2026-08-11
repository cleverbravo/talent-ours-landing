"use client";

import { Box, Container, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const hiringItems = [
  { text: "Difficult", negative: true },
  { text: "Expensive", negative: true },
  { text: "Inflexible", negative: true },
  { text: "Difficult to cancel", negative: true },
];

const talentOursItems = [
  { text: "Easy", negative: false },
  { text: "Affordable", negative: false },
  { text: "Flex up and down", negative: false },
  { text: "Cancel any time", negative: false },
];

export default function ComparisonSection() {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: "white", display: "flex", justifyContent: "center" }}>
      <Container maxWidth="md">
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: 8,
            }}
          >
            <Box
              sx={{
                flex: 1,
                backgroundColor: "primary.main",
                color: "white",
                p: 5,
                pr: { md: 10 },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, textAlign: "center", mb: 4 }}>
                Hiring an assistant
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 2.5 }}>
                {hiringItems.map((item) => (
                  <Box component="li" key={item.text} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CloseIcon sx={{ color: "white", fontSize: 20 }} />
                    <Typography sx={{ fontWeight: 500 }}>{item.text}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                flex: 1,
                backgroundColor: "secondary.main",
                color: "white",
                p: 5,
                pl: { md: 10 },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, textAlign: "center", mb: 4 }}>
                Talent Ours
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 2.5 }}>
                {talentOursItems.map((item) => (
                  <Box component="li" key={item.text} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CheckIcon sx={{ color: "white", fontSize: 20 }} />
                    <Typography sx={{ fontWeight: 500 }}>{item.text}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              color: "secondary.main",
              borderRadius: "50%",
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "1.25rem",
              boxShadow: 4,
              border: "4px solid white",
              zIndex: 10,
            }}
          >
            VS
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
