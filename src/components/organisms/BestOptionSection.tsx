"use client";

import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "@/components/atoms/Logo";

const benefits = [
  {
    label: "Focus",
    borderL: 20,
    borderR: 20,
    talentOurs: "100% dedicated to your daily operations",
    otherCompanies: "Shared among multiple accounts",
    inOffice: "Balances several internal duties",
  },
  {
    label: "Efficiency",
    borderL: 0,
    borderR: 0,
    talentOurs: "Faster execution and streamlined workflows",
    otherCompanies: "Standardized processes",
    inOffice: "Dependent on internal workload",
  },
  {
    label: "Investment",
    borderL: 0,
    borderR: 0,
    talentOurs: "Lower operating costs with predictable pricing",
    otherCompanies: "Higher ongoing service costs",
    inOffice: "Higher long term employment costs",
  },
  {
    label: "Productivity",
    borderL: 0,
    borderR: 0,
    talentOurs: "More time to grow your business",
    otherCompanies: "Standard operational support",
    inOffice: "Depends on employee experience",
  },
];

export default function BestOptionSection() {
  return (
    <Box
      component="section"
      id="how-it-works"
      sx={{ py: { xs: 6, md: 12 }, backgroundColor: "grey.50" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
            lineHeight: 1.2,
            px: { xs: 1, md: 0 },
          }}
          gutterBottom
        >
          What makes Talent Ours the best option?
        </Typography>

        {/* Desktop table — hidden on mobile */}
        <TableContainer
          component={Paper}
          sx={{
            display: { xs: "none", md: "block" },
            overflow: "hidden",
            boxShadow: "none",
            borderRadius: 3,
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    backgroundColor: "white",
                    borderColor: "primary.main",
                    width: "25%",
                    textAlign: "center",
                    borderBottom: "none",
                  }}
                >
                  Benefits
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    backgroundColor: "secondary.main",
                    color: "white",
                    borderColor: "secondary.main",
                    width: "25%",
                    borderBottom: "none",
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <Logo size="small" variant="blue" />
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    backgroundColor: "white",
                    borderColor: "primary.dark",
                    width: "25%",
                    textAlign: "center",
                    borderBottom: "none",
                  }}
                >
                  Other Companies
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    backgroundColor: "white",
                    borderColor: "primary.dark",
                    width: "25%",
                    textAlign: "center",
                    borderBottom: "none",
                  }}
                >
                  In-Office Employees
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {benefits.map((benefit, index) => (
                <TableRow
                  key={benefit.label}
                  sx={{
                    backgroundColor: "primary.main",
                    "& td": {
                      color: "white",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      pl: 4,
                      textAlign: "right",
                      borderBottom: "none",
                      borderTopLeftRadius: benefit.borderL,
                    }}
                  >
                    {benefit.label}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "secondary.main",
                      borderBottom: "none",
                      fontWeight: 500,
                      ...(index === benefits.length - 1 && {}),
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckIcon sx={{ fontSize: 16, mr: 1, flexShrink: 0 }} />
                      <Typography variant="body2" component="span">
                        {benefit.talentOurs}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      <CloseIcon
                        sx={{
                          fontSize: 16,
                          mr: 1,
                          flexShrink: 0,
                          color: "blue.200",
                        }}
                      />
                      <Typography variant="body2" component="span">
                        {benefit.otherCompanies}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      backgroundColor: "#0f4463",
                      borderTopRightRadius: benefit.borderR,
                      ...(index === benefits.length - 1 && {}),
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      <CloseIcon
                        sx={{
                          fontSize: 16,
                          mr: 1,
                          flexShrink: 0,
                          color: "blue.200",
                        }}
                      />
                      <Typography variant="body2" component="span">
                        {benefit.inOffice}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Mobile cards — hidden on desktop */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {/* Mobile header legend */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mb: 2,
              px: 1,
            }}
          >
            <Box
              sx={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 2,
                p: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 1,
              }}
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, textAlign: "center", color: "text.primary" }}
              >
                Benefits
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                backgroundColor: "secondary.main",
                borderRadius: 2,
                p: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ maxWidth: 90, width: "100%" }}>
                <Logo size="small" variant="blue" />
              </Box>
            </Box>
          </Box>

          <Stack spacing={2}>
            {benefits.map((benefit) => (
              <Paper
                key={benefit.label}
                elevation={0}
                sx={{
                  overflow: "hidden",
                  borderRadius: 3,
                  boxShadow: 2,
                }}
              >
                {/* Benefit label */}
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    px: 2,
                    py: 1.5,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 800, color: "white", fontSize: "1rem" }}
                  >
                    {benefit.label}
                  </Typography>
                </Box>

                {/* Talent Ours — highlighted */}
                <Box
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "white",
                    px: 2,
                    py: 2,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                  }}
                >
                  <CheckIcon sx={{ fontSize: 20, flexShrink: 0, mt: "2px" }} />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: 0.6,
                        opacity: 0.95,
                        display: "block",
                        lineHeight: 1.2,
                      }}
                    >
                      Talent Ours
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        lineHeight: 1.4,
                        mt: 0.25,
                        wordBreak: "break-word",
                      }}
                    >
                      {benefit.talentOurs}
                    </Typography>
                  </Box>
                </Box>

                {/* Other Companies */}
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    px: 2,
                    py: 2,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <CloseIcon
                    sx={{
                      fontSize: 20,
                      flexShrink: 0,
                      mt: "2px",
                      color: "white",
                      opacity: 0.9,
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.6,
                        opacity: 0.9,
                        display: "block",
                        lineHeight: 1.2,
                      }}
                    >
                      Other Companies
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 400,
                        lineHeight: 1.4,
                        mt: 0.25,
                        wordBreak: "break-word",
                        opacity: 0.95,
                      }}
                    >
                      {benefit.otherCompanies}
                    </Typography>
                  </Box>
                </Box>

                {/* In-Office */}
                <Box
                  sx={{
                    backgroundColor: "#0f4463",
                    color: "white",
                    px: 2,
                    py: 2,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <CloseIcon
                    sx={{
                      fontSize: 20,
                      flexShrink: 0,
                      mt: "2px",
                      color: "white",
                      opacity: 0.9,
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.6,
                        opacity: 0.9,
                        display: "block",
                        lineHeight: 1.2,
                      }}
                    >
                      In-Office Employees
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 400,
                        lineHeight: 1.4,
                        mt: 0.25,
                        wordBreak: "break-word",
                        opacity: 0.95,
                      }}
                    >
                      {benefit.inOffice}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
