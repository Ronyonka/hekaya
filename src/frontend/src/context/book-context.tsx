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

export interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

interface State {
  books: Book[];
  readingList: Book[];
  loading: boolean;
  error: string | null;
}

interface ContextProps {
  state: State;
  dispatch: React.Dispatch<any>;
}

const loadStateFromLocalStorage = (): State => {
  try {
    const serializedState = localStorage.getItem('readingListState');
    if (serializedState === null) {
      return {
        books: [],
        readingList: [],
        loading: false,
        error: null,
      };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state from local storage", e);
    return {
      books: [],
      readingList: [],
      loading: false,
      error: null,
    };
  }
};

const saveStateToLocalStorage = (state: State) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('readingListState', serializedState);
  } catch (e) {
    console.warn("Could not save state to local storage", e);
  }
};

const initialState: State = loadStateFromLocalStorage();

const BookContext = createContext<ContextProps | undefined>(undefined);

const bookReducer = (state: State, action: any): State => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_BOOKS_SUCCESS':
      return { ...state, loading: false, books: action.payload };
    case 'FETCH_BOOKS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_TO_READING_LIST':
      return {
        ...state,
        readingList: [...(state.readingList || []), action.payload],
      };
    case 'REMOVE_FROM_READING_LIST':
      return {
        ...state,
        readingList: (state.readingList || []).filter((book: Book) => book.title !== action.payload.title),
      };
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

  useEffect(() => {
    saveStateToLocalStorage(state);
  }, [state]);

  const value = { state, dispatch };

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
