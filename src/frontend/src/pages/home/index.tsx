import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query Books {
    books {
      title
      author
      coverPhotoURL
    }
  }
`;

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.books.map((book: any) => (
        <div key={book.title}>
          <img src={'../../../'+ book.coverPhotoURL} alt={book.title} style={{ width: 50, height: 50 }} />
          <p>{book.title}</p>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
