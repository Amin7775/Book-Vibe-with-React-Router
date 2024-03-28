import Tags from "../../Book/Tags";

const ShowBook = ({book}) => {
    console.log(book)

    const {
        bookId,
        image,
        bookName,
        author,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
      } = book;
    return (
        <div className="border border-[#13131326] rounded-2xl p-6 flex gap-7">
            <div className="w-1/6 p-12 bg-[#1313130D] rounded-2xl">
                <img className="rounded-2xl" src={image} alt={bookName} />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                 <h1 className="font-bold text-2xl">{bookName}</h1>
                 <p className="text-[#131313CC] font-medium">By : {author}</p>
                 {/* tags */}
                 <div className="flex gap-3 items-center">
                    <p className="font-bold">Tag</p>
                 <div className="flex gap-3">
                    {
                        tags.map(tag=><Tags tag={tag}></Tags>)
                    }
                 </div>
                    </div>
            </div>
        </div>
    );
};

export default ShowBook;