# Hekaya

Hekaya is an innovative educational web application designed to enhance the way children learn to read with a mission to empower young readers with the tools they need to become proficient and passionate readers. 

Hekaya offers an engaging platform where teachers can assign books to students, making it easier for educators to share a diverse range of books with their classrooms. With Hekaya, teachers can manage reading lists, explore a vast library of books, and tailor reading assignments to meet the individual needs of their students.

## Features

- **Browse Books**: View a collection of books with their cover images, titles, authors, and reading levels.
- **Reading List Management**: Add or remove books from your reading list.
- **Single Book View**: Detailed view of a single book, including options to add or remove it from the reading list.
- **Search and Filter**: Search and filter books by their reading level or title.

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (version 14 or above)
- npm (version 6 or above) or yarn

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ronyonka/hekaya.git
   cd hekaya
   ```

2. **Backend Setup**:

   Navigate to the backend directory

   ```bash
   cd hekaya/src/backend
   ```
   install backend dependancies

   ```bash
   npm install
   ```

   Or if you prefer yarn:

   ```bash
   yarn install
   ```
   Start the backend server:
   ```bash
   npm start
   ```
   This will start a Graphql server at the url http://localhost:4000/, the server has a single query books that returns a list of books.
   ```graphql
      query Books {
        books {
          author
          coverPhotoURL
          readingLevel
          title
        }
      }
   ```
3. **Frontend Setup**:

   In a new terminal window, navigate to the frontend directory:
   ```bash
   cd hekaya/src/frontend
   ```
   install frontend dependencies:
   ```bash
   npm install
   ```
   start the frontend development server:
   ```bash
   npm start
   ```

   This will start the development server and open the application in your default web browser. The application will be running at `http://localhost:3000`.

4. **Mightymeld Setup**:

    This step is optional but necessary if you want to use mightymeld for code visualization. 
    To get started you'll need to create a mightymeld account by sighing up [here](https://mightymeld.app/signup)
    
    Once you have an account create a `.env` file in the root directory of the frontend project (where your `package.json` lives) and the following enviroment variables:

    ```bash
    MM_INSTANCE_ID=your-instance-id
    MM_SECRET=your-secret
    ``` 
    You can get a copy of the file in [the MightyMeld portal](https://mightymeld.app/instances). Create an instance called `hekaya` and download the file.

    Once that is ready, in a new terminal start the mightymeld studio by running
    ```bash
    npx mightymeld
    ```
    The application will be running at `http://localhost:3001`.


## Usage

- **Home Page**: Browse the list of available books.
- **Reading List**: Access your reading list by navigating to `/reading-list`. If your reading list is empty, a message will be displayed.
- **Single Book View**: Click on a book card (excluding the bookmark icon) to navigate to the single book view page. This page will display detailed information about the book and provide an option to add or remove it from the reading list.

## Routing

The application uses `react-router-dom` for routing. Here are the main routes:

- `/`: The landing page.
- `/reading-list`: The page displaying the user's reading list.
- `/book/:slug`: The single book view page displaying detailed information about the book.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push to your branch.
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [GraphQL](https://graphql.org/)