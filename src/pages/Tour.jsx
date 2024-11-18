import { Box, Container, Typography } from "@mui/material";
import QuiltedImageList from "../components/QuiltedImageList";
import FAQ from "../components/FAQ";
import Button from "@mui/material/Button";

// eslint-disable-next-line react/prop-types
function Tour({setOpen}) {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component={"h1"} marginTop={"2rem"}>
        Immerse into the Las vegas
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginTop: "2rem",
        }}
        className="imageBox"
      >
        <img
          src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
          style={{
            height: "350px",
            objectFit: "cover",
          }}
        />
        <QuiltedImageList />
      </Box>
      <Box sx={{ margin: "2rem 0px" }} width={"max"}>
        <Typography variant="h4" component={"h2"}>
          about this ticket
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          sapiente natus eius ipsum placeat eveniet sed labore facilis, mollitia
          ipsam maxime? Consectetur blanditiis, et accusamus ad molestiae
          quibusdam. Voluptatibus obcaecati distinctio id in quia minima
          veritatis sequi placeat doloribus odit? Eligendi facere, fugit hic
          possimus delectus nulla quas blanditiis voluptates nisi autem
          doloremque atque doloribus quidem omnis odit laborum veniam,
          recusandae amet eius optio non incidunt deserunt quasi. Accusantium
          vero et dicta, quae dolorum veniam culpa alias ratione.
        </Typography>
        <FAQ />
      </Box>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        sx={{margin:"0.5rem auto" ,width:"fit-content"}}
      >
        Book Now
      </Button>
    </Container>
  );
}

export default Tour;
