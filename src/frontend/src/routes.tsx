import { createBrowserRouter, useParams } from "react-router-dom";
import { slugify } from "./utils/utils";
import Landing from "./pages/landing";
import Home from "./pages/home";
import ReadingList from "./pages/reading-list";
import SingleBookView from "./pages/single-book-view";
import { useBookContext } from "./context/book-context";

const BookViewWrapper = () => {
  const { state } = useBookContext();
  const { books } = state;
  const { slug } = useParams();

  const getBookBySlug = (slug: string) => {
    const matchingBooks = books.filter((book) => slugify(book.title) === slug);
    if (matchingBooks.length === 0) {
      return undefined;
    } else if (matchingBooks.length > 1) {
      console.warn(`Multiple books found with similar titles for slug: ${slug}`);
    }
    return matchingBooks[0];
  };

  const book = slug ? getBookBySlug(slug) : undefined;

  if (!book) {
    return <div>Book not found</div>;
  }

  return <SingleBookView book={book} />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/reading-list",
    element: <ReadingList />,
  },
  {
    path: "/book/:slug",
    element: <BookViewWrapper />,
  },
]);