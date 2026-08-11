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
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "@/components/atoms/Logo";

const benefits = [
  {
    label: "Focus",
    borderL:20,
    borderR:20,
    talentOurs: "100% dedicated to your daily operations",
    otherCompanies: "Shared among multiple accounts",
    inOffice: "Balances several internal duties",
  },
  {
    label: "Efficiency",
    borderL:0,
    borderR:0,
    talentOurs: "Faster execution and streamlined workflows",
    otherCompanies: "Standardized processes",
    inOffice: "Dependent on internal workload",
  },
  {
    label: "Investment",
    borderL:0,
    borderR:0,
    talentOurs: "Lower operating costs with predictable pricing",
    otherCompanies: "Higher ongoing service costs",
    inOffice: "Higher long term employment costs",
  },
  {
    label: "Productivity",
    borderL:0,
    borderR:0,
    talentOurs: "More time to grow your business",
    otherCompanies: "Standard operational support",
    inOffice: "Depends on employee experience",
  },
];

export default function BestOptionSection() {
  return (
    <Box component="section" id="how-it-works" sx={{ py: 12, backgroundColor: "grey.50" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, textAlign: "center", mb: 6 }}
          gutterBottom
        >
          What makes Talent Ours the best option?
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            overflow: "hidden",
            boxShadow: "none",
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
                    textAlign:"center",
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
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                    <Logo size="small" variant="blue" />
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    backgroundColor: "white",
                    borderColor: "primary.dark",
                    width: "25%",
                    textAlign:"center",
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
                    textAlign:"center",
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
                  <TableCell sx={{ fontWeight: 700, pl: 4,
                    textAlign:"right",
                    borderBottom: "none",
                    borderTopLeftRadius: benefit.borderL,
                   }}>
                    {benefit.label}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "secondary.main",
                      borderBottom: "none",
                      fontWeight: 500,
                      ...(index === benefits.length - 1 && {
                      }),
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                      <CheckIcon sx={{ fontSize: 16 }} />
                      <Typography variant="body2" component="span">
                        {benefit.talentOurs}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: "blue.200" }}>
                      <CloseIcon sx={{ fontSize: 16 }} />
                      <Typography variant="body2" component="span">
                        {benefit.otherCompanies}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      backgroundColor:"#0f4463",
                      borderTopRightRadius: benefit.borderR,
                      ...(index === benefits.length - 1 && {
                      }),
                    }}
                  >
                    <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        color: "blue.200" ,
                        }}>
                      <CloseIcon sx={{ fontSize: 16 }} />
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
      </Container>
    </Box>
  );
}
