import React from "react";
import { Book } from "../../context/book-context";


interface BookCardProps {
    book: Book;
}

const BookCard = ({book}: BookCardProps) => {
    return (
        <div>
        BookCard
        </div>
    );
};

export default BookCard;
