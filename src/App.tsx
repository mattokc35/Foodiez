import { useState } from "react";
import "./App.css";
import RestaurantCard from "./components/Card";
import { restaurantsArray } from "./data/SampleData";
import { Button, ButtonGroup } from "@mui/material";
import { useTheme } from "@mui/system";

function App() {
  const theme = useTheme();
  const [restaurants, setRestaurants] = useState([...restaurantsArray]);

  const handleSortByRating = (ratingType: string) => {
    let sortedArray;

    switch (ratingType) {
      case "overall":
        sortedArray = [...restaurants].sort(
          (a, b) => b.overallRating - a.overallRating
        );
        break;
      case "yelp":
        sortedArray = [...restaurants].sort(
          (a, b) => b.yelpRating - a.yelpRating
        );
        break;
      case "google":
        sortedArray = [...restaurants].sort(
          (a, b) => b.googleRating - a.googleRating
        );
        break;
      case "tripAdvisor":
        sortedArray = [...restaurants].sort(
          (a, b) => (b.tripAdvisorRating || 0) - (a.tripAdvisorRating || 0)
        );
        break;
      default:
        sortedArray = [...restaurants];
    }

    setRestaurants(sortedArray);
  };
  return (
    <>
      <ButtonGroup
        sx={{
          padding: "10px",
          display: "flex",
          margin: "auto",
          alignItems: "center", // Center buttons horizontally
          justifyContent: "center",
          [theme.breakpoints.down("md")]: {
            width: "200px",
            height: "auto",

            flexDirection: "column",
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSortByRating("overall")}
          style={{
            marginRight: "10px",
            borderRadius: "10px",
            marginBottom: "5px",
          }}
        >
          Sort By Overall Rating
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSortByRating("yelp")}
          style={{
            marginRight: "10px",
            borderRadius: "10px",
            marginBottom: "5px",
          }}
        >
          Sort By Yelp Rating
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSortByRating("google")}
          style={{
            marginRight: "10px",
            borderRadius: "10px",
            marginBottom: "5px",
          }}
        >
          Sort By Google Rating
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSortByRating("tripAdvisor")}
          style={{
            marginRight: "10px",
            borderRadius: "10px",
            marginBottom: "5px",
          }}
        >
          Sort By TripAdvisor Rating
        </Button>
      </ButtonGroup>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard restaurant={restaurant} key={index}></RestaurantCard>
      ))}
    </>
  );
}

export default App;
