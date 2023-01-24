import {
  BottomNavigation,
  Box,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/CustomizedAccordions";
import BasicModal from "../components/BasicModal";

const vegasImage =
  "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80";

export default function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box sx={{ display: "flex", marginTop: 3 }}>
        <img src={vegasImage} alt="Las Vegas" height={325} />
        <ImageCollage />
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam
          perspiciatis omnis velit nihil mollitia itaque veritatis, cumque,
          eveniet molestiae iste doloribus inventore praesentium natus! Id
          blanditiis enim iusto molestiae, nulla rem? Officiis expedita incidunt
          exercitationem, impedit ut perspiciatis optio!
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
