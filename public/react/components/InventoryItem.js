import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function InventoryItem({ item }) {
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
            <h3>${item.price}</h3>
          </Typography>
        </CardContent>
        <CardActions className="inventorybuttons">
          <Button size="small">delete</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default InventoryItem;