"use client";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "@/components/atoms/Logo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToElement = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "primary.main",
        py: 1,
        px: { xs: 2, md: 5 },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: 1200,
          width: "100%",
          mx: "auto",
        }}
      >
        <Logo size="small" />
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            {navLinks.map((link) => (
              <Typography
                key={link.label}
                component="a"
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(link.href);
                }}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": { color: "secondary.light" },
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </Typography>
            ))}
            <Button
              variant="contained"
              onClick={() => scrollToElement("#full-name")}
              sx={{
                backgroundColor: "secondary.main",
                "&:hover": { backgroundColor: "secondary.dark" },
                fontWeight: 700,
                px: 4,
              }}
            >
              Get Started
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
