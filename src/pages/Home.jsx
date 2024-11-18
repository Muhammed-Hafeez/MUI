import { Box, Container, Typography } from "@mui/material";
import TourCard from "../components/TourCard";
import data from "../data/data.json";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleOnCLick = () => {
    console.log("hello");
    
    navigate("/tour")
  }
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      {data.map((elem) => {
        return (
          <Box key={elem.id}>
            <Typography variant="h3" component="h2">
              {elem.name}
            </Typography>
            <Grid container spacing={2} sx={{ margin: "2rem 0px" }}>
              {elem.tours.map((card) => {
                const {
                  name,
                  id,
                  numberOfReviews,
                  rating,
                  duration,
                  price,
                  image,
                } = card;
                
                return (
                  <div key={id} onClick={handleOnCLick}>
                    <TourCard
                      name={name}
                      duration={duration}
                      rating={rating}
                      price={price}
                      image={image}
                      numberOfReviews={numberOfReviews}
                    />
                  </div>
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </Container>
  );
}

export default Home
