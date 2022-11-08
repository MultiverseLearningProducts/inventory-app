import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import logo from "../logo.png";
import user from "../User.png";
import React from "react";

function Header({ setCheckItems, setIsAdd, setShowDetails }) {
  function checkInventory() {
    setCheckItems(true);
    setShowDetails(false);
    setIsAdd(false);
  }

  function goHome() {
    setCheckItems(false);
    setShowDetails(false);
    setIsAdd(false);
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
            <Button
              onClick={() => checkInventory()}
              component="div"
              variant="h6"
              color="inherit"
            >
              Inventory
            </Button>
            <img className="logo" src={user} />
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
