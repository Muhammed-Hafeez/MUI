import { Box, Rating, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { Schedule } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";
// eslint-disable-next-line react/prop-types
function TourCard({ name, duration, rating, image, price, numberOfReviews }) {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 11,
            },
          },
        ],
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Grid size={4} sx={{ minWidth: "300px", maxWidth: "300px" }}>
        <Paper elevation={4}>
          <img src={image} alt="hotel image" className="tour-card-img" />
          <Box padding={1}>
            <Typography variant="h6" component="h2">
              {name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Schedule
                sx={{ marginRight: "0.5rem", fontSize: "1rem" }}
              ></Schedule>
              <Typography variant="body2" component="p">
                {duration}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "0.8rem 0px",
              }}
            >
              <Rating
                name="half-rating-read"
                defaultValue={rating}
                precision={0.5}
                readOnly
              />
              <div style={{ margin: "0px 0.5rem 0px 0.2rem" }}>{rating}</div>
              <div>({numberOfReviews})</div>
            </Box>
            <Box>
              <Typography variant={"h6"}>from ${price}</Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
}

export default TourCard;
