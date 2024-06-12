import React, { SetStateAction, useState } from "react";
import Layout from "../../Layout";
import { Box, Paper, InputBase, InputAdornment, Typography } from "@mui/material";
import searchIcon from "../../components/icons/icon-search.svg"
import BookList from "../../components/book-list";
import NewBookList from "../../components/book-list/newBookList";
import { useBookContext} from "../../context/book-context";



const Landing = () => {
  const [search, setSearch] = useState("");
  const { state } = useBookContext();
  const [searchList, setSearchList] = useState(state.books);
  const { books } = state;
  const newBooks = books.slice(0,3);
  const allBooks = books;
  const handleSearch = (e : {target: {value: SetStateAction<string>}}) => {
   setSearch(e.target.value);
   const newList = books.filter((book) => book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
   setSearchList(newList);
};
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#FCFCFC",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for Books"
            sx={{
              ml: 1,
              flex: 1,
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment = {
               <InputAdornment position="start"><img src={searchIcon} alt="search icon" width={20} height={20} style={{filter:"invert(77%)"}}/></InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={800}>
                New Books
              </Typography>
              <NewBookList newBooks={newBooks} />
            </Box>
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={800}>
                Recommended For You
              </Typography>
              <BookList allBooks={allBooks} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found
            </Typography>
          </Box>
        )}
      </Box>
    
    </Layout>
  );
};

export default Landing;
