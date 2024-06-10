import React from 'react';
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import { router } from "./routes";
import './App.scss';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </ApolloProvider>
  );
}

export default App;
