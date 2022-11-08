import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InventoryItem from "./InventoryItem";

function Inventory({
  setIsAdd,
  selectedItem,
  setSelectedItem,
  items,
  setShowDetails,
  setCheckItems,
}) {
  return (
    <div className="inventory-div">
      <Button className="additembutton" onClick={() => setIsAdd(true)}>
        Add Item
      </Button>
      <Grid
        className="inventorygrid"
        container
        alignItems="stretch"
        spacing={3}
      >
        {items.map((item) => (
          <InventoryItem
            setCheckItems={setCheckItems}
            setShowDetails={setShowDetails}
            key={item.id}
            item={item}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        ))}
        ;
      </Grid>
      ;
    </div>
  );
}

export default Inventory;
