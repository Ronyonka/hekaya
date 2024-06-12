import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { slugify } from '../../utils/utils';
import { Box } from "@mui/system";
import Layout from "../../Layout";

const Home = () => {
  const book = {
    title: 'Clever Knight and the Secret Forest',
    author: 'Avery Williams',
    coverPhotoURL: 'assets/image8.webp',
    readingLevel: 'C'
  };

  const isBookInList = true; // Assuming the book is already in the reading list for demonstration

  const toggleReadingList = () => {
    // Toggle reading list functionality
    console.log('Toggling reading list');
  };
  console.log(slugify(book.title));
  return (
    <Layout>
<Grid container spacing={2} sx={{ marginTop: 4 }}>
      {/* Image */}
      <Grid item xs={12} md={4}>
        <img src={book.coverPhotoURL} alt={book.title} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
      </Grid>
      {/* Details */}
      <Grid item xs={12} md={8}>
        <Card elevation={0} style={{ backgroundColor: "transparent", marginLeft: "20px" }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              {book.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Author: {book.author}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Reading Level: {book.readingLevel}
            </Typography>
            <Box mt={4}>
              <Button
                variant="contained"
                style={{ backgroundColor: isBookInList ? "#f76434" : "#53c2c2", color: "#fff" }}
                onClick={toggleReadingList}
              >
                {isBookInList ? "Remove from Reading List" : "Add to Reading List"}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Layout>
  );
};

export default Home;
