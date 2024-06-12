import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { Book } from "../../context/book-context";
import BookCard from "../book-card/new-book";

interface NewBookListProps {
    newBooks: Book[];
}

const NewBookList = ({ newBooks }: NewBookListProps) => {

    return (
        <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
            <Grid container spacing={4}>
                {newBooks.map((book, index) => (
                    <Grid item key={index} sx={{ marginRight: 2 }}>
                        <Paper sx={{ backgroundColor: "transparent" }}>
                            <BookCard book={book} index={index} />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default NewBookList;
