import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InventoryItem from "./InventoryItem";

function Inventory({ items }) {
  return (
    <div className="inventory-div">
      <Button className="additembutton">Add Item</Button>
      <Grid
        className="inventorygrid"
        container
        alignItems="stretch"
        spacing={3}
      >
        {items.map((item) => (
          <InventoryItem key={item.id} item={item} />
        ))}
        ;
      </Grid>
      ;
    </div>
  );
}

export default Inventory;