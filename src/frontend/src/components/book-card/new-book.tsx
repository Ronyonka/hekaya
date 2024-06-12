import React, { useEffect } from "react";
import { Book, useBookContext } from "../../context/book-context";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";


interface NewBookCardProps {
  book: Book;
  index: number;
}

const NewBookCard = ({ book, index }: NewBookCardProps) => {
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

//   useEffect(() => {
//     console.log("Reading List:", state.readingList);
//   }, [state.readingList]);

  if (!state) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      key={index}
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex"
        }}
      >
        <img src={process.env.PUBLIC_URL + book.coverPhotoURL} alt={book.title} style={{ width: "300px", height: "100%", borderRadius: "8px" }} />
        <Box className="book-card" position="absolute" top={0} left={0} right={0} bottom={0} borderRadius="8px" />
        <Stack mt="6" spacing={0} position="absolute" bottom={0} left={0} right={0} p={4}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography fontSize={12} fontWeight={400} color="#F76434" aria-label="Author">{book.author}</Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#E0E0E0",
                  borderRadius: "full",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontSize={12}
                fontWeight={400}
                color="#F76434"
                aria-label="Reading Level"
              >
                Reading Level: {book.readingLevel}
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={14} fontWeight={600} color="#F76434" aria-label="Book Title">{book.title}</Typography>
            </Grid>
          </Grid>
        </Stack>
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "flex-end",
          padding: "16px"
        }}>
          <Box sx={{
              p: "10px",
              backgroundColor: "black",
              borderRadius: "100%",
              cursor: "pointer",
              "&: hover": { opacity: 0.8 },
          }}
            onClick={toggleReadingList}
          >
            {isBookInList ? (
              <BookmarkIcon fill="#E0E0E0"/>
            ) : (
              <BookmarkEmptyIcon />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewBookCard;