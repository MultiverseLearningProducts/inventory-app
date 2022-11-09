import React from "react";
import apiURL from "../api";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function InventoryItem({
  setSelectedItem,
  item,
  setShowDetails,
  setCheckItems,
  fetchItems,
}) {
  // Delete button
  const onClickHandler = async (item) => {
    try {
      await fetch(`http://localhost:3000/api/items/${item.id}`, {
        method: "DELETE",
      });
      fetchItems();
    } catch (error) {
      throw error;
    }
  };

  // Details button
  async function handleDetailsClick(id) {
    setShowDetails(true);
    const response = await fetch(`${apiURL}/items/${id}`);
    const data = await response.json();
    setSelectedItem(data);
  }

  return (
    <Grid className="inventorycard" key={item.id} item xs={3}>
      <Card sx={{ height: 410, maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.title.substring(0, 22)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h3>${item.price.toFixed(2)}</h3>
          </Typography>
        </CardContent>
        <CardActions className="inventorybuttons">
          <Button size="small" onClick={() => onClickHandler(item)}>
            delete
          </Button>
          <Button onClick={() => handleDetailsClick(item.id)} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default InventoryItem;
