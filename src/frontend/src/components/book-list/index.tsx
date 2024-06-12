import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { Book } from "../../context/book-context";
import BookCard from "../book-card";

interface BookListProps {
    allBooks: Book[];
}

const BookList = ({allBooks}: BookListProps) => {


    return ( 
        <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
            <Grid container spacing={4}>
                {allBooks.map((book, index) => (
                    <Grid item key={index}>
                        <Paper sx={{ backgroundColor: "transparent" }}>
                            <BookCard book={book} index={index} />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )

};

export default BookList;