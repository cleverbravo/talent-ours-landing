"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  MenuItem,
  Stack,
  Alert,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const serviceOptions = [
  "Administrative Support",
  "Customer Service",
  "Digital Marketing",
];

export default function HeroSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        form.reset();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
        minHeight: 500,
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "right",
            opacity: 0.9,
          },
        }}
      >
        <img
          src="/images/hero.png"
          alt="Woman working on multiple monitors"
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: 8 }}>
        <Box sx={{ maxWidth: 500 }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              lineHeight: 1.15,
              fontWeight: 800,
              mb: 4,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            The Virtual
            <br />
            <Box component="span" sx={{ color: "secondary.main" }}>
              Support
            </Box>{" "}
            Your
            <br />
            Business Needs
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <input
              type="hidden"
              name="access_key"
              value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
            />
            <TextField
              fullWidth
              id="full-name"
              name="name"
              label="Full Name"
              required
              variant="filled"
              size="small"
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "white",
                  borderRadius: 1,

                  border: "3px solid transparent",
                  transition: "border-color 0.2s ease",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  "&.Mui-focused": {
                    borderColor: "orange",
                    backgroundColor: "white",
                  },
                },
                "& .MuiFilledInput-root::before": { border: "none" },
                "& .MuiFilledInput-root::after": { border: "none" },
                "& label": { color: "rgba(0,0,0,0.6)", fontSize: "0.75rem" },
              }}
            />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                required
                type="email"
                variant="filled"
                size="small"
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "white",
                    borderRadius: 1,

                    border: "3px solid transparent",
                    transition: "border-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                    "&.Mui-focused": {
                      borderColor: "orange",
                      backgroundColor: "white",
                    },

                  },
                  "& .MuiFilledInput-root::before": { border: "none" },
                  "& .MuiFilledInput-root::after": { border: "none" },
                  "& label": { color: "rgba(0,0,0,0.6)", fontSize: "0.75rem" },
                }}
              />
              <TextField
                fullWidth
                name="phone"
                label="Phone Number"
                required
                type="tel"
                variant="filled"
                size="small"
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "white",
                    borderRadius: 1,

                    border: "3px solid transparent",
                    transition: "border-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                    "&.Mui-focused": {
                      borderColor: "orange",
                      backgroundColor: "white",
                    },
                  },
                  "& .MuiFilledInput-root::before": { border: "none" },
                  "& .MuiFilledInput-root::after": { border: "none" },
                  "& label": { color: "rgba(0,0,0,0.6)", fontSize: "0.75rem" },
                }}
              />
            </Stack>

            <TextField
              fullWidth
              name="service"
              select
              label="What can we help you with?"
              required
              variant="filled"
              size="small"
              defaultValue=""
              slotProps={{
                select: {
                  IconComponent: KeyboardArrowDownIcon,
                },
              }}
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "white",
                  borderRadius: 1,

                  border: "3px solid transparent",
                  transition: "border-color 0.2s ease",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  "&.Mui-focused": {
                    borderColor: "orange",
                    backgroundColor: "white",
                  },
                },
                "& .MuiFilledInput-root::before": { border: "none" },
                "& .MuiFilledInput-root::after": { border: "none" },
                "& label": { color: "rgba(0,0,0,0.6)", fontSize: "0.75rem" },
              }}
            >
              {serviceOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <Box sx={{ pt: 2 }}>
              {success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Thank you! We&apos;ll be in touch soon.
                </Alert>
              )}
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  backgroundColor: "secondary.main",
                  "&:hover": {
                    backgroundColor: "secondary.dark",
                    transform: "scale(1.05)",
                  },
                  fontWeight: 700,
                  py: 1.5,
                  px: 5,
                  boxShadow: 3,
                  transition: "transform 0.2s",
                }}
              >
                {loading ? "Sending..." : "Hire us now!"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
