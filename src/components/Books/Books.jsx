import Book from "../Book/Book";

const Books = ({booksData}) => {
    // console.log(booksData)
    return (
        <div className="my-20">
            <h1 className="text-4xl font-bold text-center">Books</h1>
{/* container */}
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-7 px-5 lg:px-0">
                {
                    booksData.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;