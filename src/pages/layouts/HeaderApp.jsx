import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { changeFlagCreateOrEdit } from "../../redux/appRedux";
import { useDispatch } from "react-redux";
import ThemeToggle from "../../components/ThemeToggle";
import { useTheme } from "@mui/material";

const HeaderApp = () => {
  const dispatcher = useDispatch();
  const theme = useTheme();

  const handleCreateButton = async () => {
    await dispatcher(changeFlagCreateOrEdit(0));
    window.location.href = "/addPlace";
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: theme.palette.appBar.background,
        color: theme.palette.appBar.color,
        boxShadow: "0px 0.2px 1px 1px rgba(0, 0, 0, 0.2)",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ height: "100px" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              key="LogoPilarTecno"
              onClick={() => (window.location.href = "/")}
              sx={{ my: 2, display: "block", fontSize: "1.2rem" }}
            >
              PilarTecno
            </Button>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ThemeToggle />
              <Button
                variant="outlined"
                key="Reportes"
                onClick={() => handleCreateButton()}
                sx={{
                  my: 2,
                  display: "block",
                  borderRadius: " 50px",
                  marginLeft: "5px",
                }}
              >
                Crear lugar
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderApp;
