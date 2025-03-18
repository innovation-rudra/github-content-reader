import React from "react";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 2, md: 6, lg: 8, xl: 8 },
      }}
    >
      <MainLayout />
    </Box>
  );
};

export default App;
