import React, { useEffect, FC } from "react";
import Card from "@mui/material/Card";
import { Typography, Grid, Button, CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Restaurant from "../types/Restaurant";
import { useTheme } from "@mui/system";

interface CardProps {
  restaurant: Restaurant;
}

const RestaurantCard: FC<CardProps> = ({ restaurant }) => {
  const theme = useTheme();
  useEffect(() => {
    console.log(restaurant);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          borderRadius: 20, // Adjust the border-radius as needed
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)", // Add a subtle box shadow
          width: "50%",
          margin: "auto",
          marginTop: "20px",
          [theme.breakpoints.down("md")]: {
            width: "100%",
            height: "auto",
          },
          display: "flex",
          flexDirection: "column", // Align items vertically
          justifyContent: "center",
        }}
      >
        <CardContent sx={{ padding: "50px", textAlign: "center" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={14}>
              <Typography variant="h5" component="div">
                {restaurant.name}
              </Typography>
              <Typography color="textSecondary">
                {restaurant.location}
              </Typography>
              <Typography color="textSecondary">
                Google Rating: {restaurant.googleRating}
              </Typography>
              <Typography color="textSecondary">
                Yelp Rating: {restaurant.yelpRating}
              </Typography>
              {restaurant.tripAdvisorRating && (
                <Typography color="textSecondary">
                  TripAdvisor Rating: {restaurant.tripAdvisorRating}
                </Typography>
              )}
              <Typography color="textSecondary">
                Overall Rating: {restaurant.overallRating}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ padding: "50px", textAlign: "center" }}>
          <Button size="small" color="primary" href={restaurant.googleURL}>
            View On Google
          </Button>
          <Button
            size="small"
            color="primary"
            href={restaurant.yelpURL}
            target="_blank"
          >
            View on Yelp
          </Button>
          {restaurant.tripAdvisorURL && (
            <Button
              size="small"
              color="primary"
              href={restaurant.tripAdvisorURL}
              target="_blank"
            >
              View on TripAdvisor
            </Button>
          )}
          {restaurant.menu && (
            <Button
              size="small"
              color="primary"
              href={restaurant.menu}
              target="_blank"
            >
              View Menu/Order
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default RestaurantCard;
