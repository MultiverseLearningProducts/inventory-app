import React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import CardOverflow from "@mui/joy/CardOverflow";
// import Divider from "@mui/joy/Divider";
// import Typography from "@mui/joy/Typography";
import trash from "../trashcan.png";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function CartItem({ item }) {
  const theme = useTheme();

  return (
    <table className="cart-categories-items">
      <tr>
        <th align="left">
          <Card
            sx={{
              boxShadow: 0,
              marginBottom: 2,
              width: 418,
              height: 200,
              display: "flex",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={item.image}
              alt=""
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography sx={{ fontSize: 15 }} component="div" variant="h6">
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.category}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{ paddingTop: 1, fontSize: 12 }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </th>
        <th align="left">
          <div className="price">${item.price.toFixed(2)}</div>
        </th>
        <th align="left">
          <div className="qty">QTY</div>
        </th>
        <th align="right">
          <Button sx={{ width: 40, height: 40, left: 200 }} className="remove">
            <img src={trash} width="30" height="35" />
          </Button>
        </th>
      </tr>
    </table>
  );
}

export default CartItem;
