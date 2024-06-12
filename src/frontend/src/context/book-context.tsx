import React, { createContext, useContext, useEffect, useReducer, ReactNode } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

interface State {
  books: Book[];
  loading: boolean;
  error: string | null;
}

interface ContextProps {
  state: State;
}

const initialState: State = {
  books: [],
  loading: false,
  error: null,
};

const BookContext = createContext<ContextProps | undefined>(undefined);

const bookReducer = (state: State, action: any): State => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_BOOKS_SUCCESS':
      return { ...state, loading: false, books: action.payload };
    case 'FETCH_BOOKS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const { loading, error, data } = useQuery(GET_BOOKS, {
    onCompleted: (data) => {
      dispatch({ type: 'FETCH_BOOKS_SUCCESS', payload: data.books });
    },
    onError: (error) => {
      dispatch({ type: 'FETCH_BOOKS_FAILURE', payload: error.message });
    }
  });

  useEffect(() => {
    if (loading) {
      dispatch({ type: 'FETCH_BOOKS_REQUEST' });
    }
  }, [loading]);

  const value = { state };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = (): ContextProps => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};
