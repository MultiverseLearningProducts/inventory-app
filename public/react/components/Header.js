import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import logo from "../logo.png";
import React from "react";

function Header({ setCheckItems, setIsAdd, setShowDetails }) {
  function checkInventory() {
    setCheckItems(true);
    setShowDetails(false);
    setIsAdd(false);
  }

  function goHome() {
    setCheckItems(false);
  }
  return (
    <div>
      <AppBar>
        <Toolbar className="header">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => goHome()}
          >
            <img className="logo" src={logo} />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inventory App
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Username
            </Typography>

            <Button
              onClick={() => checkInventory()}
              component="div"
              variant="h6"
              color="inherit"
            >
              Inventory
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
