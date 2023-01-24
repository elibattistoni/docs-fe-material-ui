import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import classes from "./TourCard.module.css";
import { AccessTime } from "@mui/icons-material";

//| NB with this function you can create your own theme
//| NB if you want to use your own theme, you have to import the theme provider
//| and you need to wrap all your component with the theme provider
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      //| we create a theme in which we want to manipulate the Typography component
      //| and specifically you want to add variants
      //| NB here we create an array of variants that we want to add to the Typography MUI component
      variants: [
        //| if the variant name is equal to body2, then the font size should be equal to 11
        //| NB since a variant named "body2" is already present, this owill override the builtin styles
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        //| here we add a new variant named body3
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} alt={tour.name} className={classes.cardImg} />
          {/* NB variant is how the text will look like, component is the html element you want it to be */}
          {/* <Typography variant="h1" component="h2"></Typography> this will be an h2 element that will look like an h1 element*/}
          {/* paddingX for padding left and right */}
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            {/* display flex */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            {/* NB rating */}
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating
                name="read-only"
                value={tour.rating}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              {/* NB body3 does not exist */}
              <Typography variant="body3" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From C {tour.price}$
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
