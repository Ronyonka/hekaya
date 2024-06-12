import React, { SetStateAction, useState } from "react";
import Layout from "../../Layout";
import { Box, Paper, InputBase, InputAdornment, Typography } from "@mui/material";
import searchIcon from "../../components/icons/icon-search.svg"
import BookList from "../../components/book-list";
import NewBookList from "../../components/book-list/newBookList";
import { useBookContext} from "../../context/book-context";



const ReadingList = () => {
  const [search, setSearch] = useState("");
  const { state } = useBookContext();
  const [searchList, setSearchList] = useState(state.books);
  const { readingList } = state;
  const handleSearch = (e : {target: {value: SetStateAction<string>}}) => {
   setSearch(e.target.value);
    const newList = readingList.filter((book) => book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
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
                    Your Reading List
                    </Typography>
                    {readingList.length === 0 ? (
                    <Typography variant="body1" my={3}>
                        Looks like your reading list is feeling a bit light! Fill it up with captivating books, and watch your literary world grow right before your eyes.
                    </Typography>
                    ) : (
                    <BookList allBooks={readingList} />
                    )}
                </Box>
            </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{search}"{""} in your Reading List
            </Typography>
            <BookList allBooks={searchList}/>
          </Box>
        )}
      </Box>
    
    </Layout>
  );
};

export default ReadingList;
