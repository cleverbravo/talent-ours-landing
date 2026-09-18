"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "@/components/atoms/Logo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToElement = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollToElement(href);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "primary.main",
          py: { xs: 0.5, md: 1 },
          px: { xs: 1, md: 5 },
          zIndex: (theme) => theme.zIndex.appBar,
          pointerEvents: "auto",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: { xs: 1, md: 2 },
            minHeight: { xs: 56, md: 64 },
            gap: 2,
            position: "relative",
            pointerEvents: "auto",
          }}
        >
          <Box sx={{ flexShrink: 0, display: "flex", alignItems: "center", minWidth: 0 }}>
            <Logo size="small" />
          </Box>

          {/* Desktop navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 5,
              ml: "auto",
            }}
          >
            {navLinks.map((link) => (
              <Typography
                key={link.label}
                component="a"
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
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
                whiteSpace: "nowrap",
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => {
              console.log("click en el menu");
              setDrawerOpen(true);
            }}
            edge="end"
            sx={{
              display: { xs: "flex", md: "none" },
              color: "white",
              p: 1.5,
              flexShrink: 0,
              ml: "auto",
              position: "relative",
              zIndex: 1,
              pointerEvents: "auto",
            }}
          >
            <MenuIcon sx={{ pointerEvents: "none" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        id="mobile-nav-drawer"
        slotProps={{
          paper: {
            sx: {
              width: { xs: "100%", sm: 320 },
              maxWidth: "100vw",
              backgroundColor: "primary.main",
              color: "white",
              display: "flex",
              flexDirection: "column",
            },
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
            minHeight: 56,
          }}
        >
          <Logo size="small" />
          <IconButton
            color="inherit"
            aria-label="close navigation menu"
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />

        <List sx={{ flex: 1, px: 2, py: 2 }}>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                sx={{
                  borderRadius: 1,
                  py: 1.5,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: {
                      sx: { fontWeight: 500, fontSize: "1.05rem" },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ p: 2, pb: 3 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => scrollToElement("#full-name")}
            sx={{
              backgroundColor: "secondary.main",
              "&:hover": { backgroundColor: "secondary.dark" },
              fontWeight: 700,
              py: 1.5,
              fontSize: "1rem",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
