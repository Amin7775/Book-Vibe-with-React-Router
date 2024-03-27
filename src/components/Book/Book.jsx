import { Link } from "react-router-dom";
import Tags from "./Tags";
import { CiStar } from "react-icons/ci";

const Book = ({singleBook}) => {
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
        yearOfPublishing
        
    }= singleBook;
    return (
        <>
        <Link>
        <div className="border border-[#13131326] rounded-2xl p-7">
            <div className="h-72 bg-[#F3F3F3] p-6 rounded-2xl">
                <img className="h-full mx-auto" src={image} alt="" />
            </div>
            {/* tags */}
            <div className="flex flex-wrap gap-3 mt-6">
                {
                    tags.map((tag,id)=><Tags key={id} tag={tag}></Tags>)
                }
            </div>
            <h1 className="font-semibold text-2xl text-[#131313] pr-3 mt-4">{bookName}</h1>
            <p className="font-medium text-[#131313CC] work-sans mt-3">By : {author}</p>
            <div className="border-b border-dashed border-[#13131326] my-5">
            </div>
            <div className="flex justify-between">
                <p className="font-medium text-[#131313CC] work-sans">{category}</p>
                <div className="font-medium text-[#131313CC] work-sans flex gap-2">
                    <p>{rating}</p>
                    <CiStar className="text-xl font-bold"></CiStar>
                </div>
            </div>
        </div>
                </Link>
                </>
    );
};

export default Book;