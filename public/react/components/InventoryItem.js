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
    <Grid className="inventorycard" key={item.id} item x={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h1>{item.title}</h1>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h1> {item.description}</h1>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {item.price} */}
            <h1>sefsdf</h1>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default InventoryItem;
