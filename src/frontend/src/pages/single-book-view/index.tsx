import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Book, useBookContext } from "../../context/book-context";
import { Box } from "@mui/system";
import Layout from "../../Layout";


interface SingleBookViewProps {
  book: Book;
}

const SingleBookView = ({book}: SingleBookViewProps) => {
    const { state, dispatch } = useBookContext();

    const toggleReadingList = () => {
      const isBookInList = state.readingList?.some((b: Book) => b.title === book.title);
  
      if (isBookInList) {
        dispatch({ type: 'REMOVE_FROM_READING_LIST', payload: book });
      } else {
        dispatch({ type: 'ADD_TO_READING_LIST', payload: book });
      }
    };
  
    const isBookInList = state.readingList?.some((b: Book) => b.title === book.title);
    if (!state) {
        return <div>Loading...</div>;
      }
  return (
    <Layout>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        {/* Image */}
        <Grid item xs={12} md={4}>
          <img src={"../"+ book.coverPhotoURL} alt={book.title} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
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

export default SingleBookView;