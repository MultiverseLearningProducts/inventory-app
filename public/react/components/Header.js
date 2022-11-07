import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import React from "react";

function Header({ setCheckItems }) {
  return (
    <div>
      <AppBar>
        <Toolbar className="header">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => setCheckItems(false)}
          >
            <h1>Logo</h1>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inventory App
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Username
            </Typography>

            <Button
              onClick={() => setCheckItems(true)}
              component="div"
              variant="h6"
              color="inherit"
            >
              Items
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
