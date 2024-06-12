import React from 'react';
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import { router } from "./routes";
import './App.scss';
import { BookProvider } from './context/book-context';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BookProvider>
        <div className='App'>
          <RouterProvider router={router} />
        </div>
      </BookProvider>
    </ApolloProvider>
  );
}

export default App;
