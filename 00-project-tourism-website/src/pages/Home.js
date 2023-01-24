import { Grid, Container, Typography } from "@mui/material";
import { Fragment } from "react";
import TourCard from "../components/TourCard";
import cities from "../data.json";

export default function Home() {
  return (
    <div className="App">
      <Container sx={{ marginY: 5 }}>
        {cities.map((city, idxc) => (
          <Fragment key={idxc}>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} tours
            </Typography>
            {/* NB in Grid MUI the total size is 12 columns (horizontally) */}
            <Grid container spacing={5}>
              {city.tours.map((tour, idxt) => (
                <TourCard tour={tour} key={idxt} />
              ))}
            </Grid>
          </Fragment>
        ))}
      </Container>
    </div>
  );
}
