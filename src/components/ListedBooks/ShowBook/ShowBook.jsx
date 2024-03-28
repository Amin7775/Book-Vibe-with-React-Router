import Tags from "../../Book/Tags";
import { IoPeople } from "react-icons/io5";
import { SiPowerpages } from "react-icons/si";
import { Link } from "react-router-dom";

const ShowBook = ({ book }) => {
  // console.log(book);

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
    <div className="border border-[#13131326] rounded-2xl p-6 flex flex-col lg:flex-row gap-7">
      <div className="w-full lg:w-1/6 p-12 bg-[#1313130D] rounded-2xl">
        <img className="rounded-2xl" src={image} alt={bookName} />
      </div>
      <div className="flex-1 flex flex-col justify-center space-y-4">
        <h1 className="font-bold text-2xl">{bookName}</h1>
        <p className="text-[#131313CC] font-medium">By : {author}</p>
        {/* tags */}
        <div className="flex gap-3 items-center">
          <p className="font-bold">Tag</p>
          <div className="flex gap-2 lg:gap-3 flex-wrap">
            {tags.map((tag, idx) => (
              <Tags tag={tag} key={idx}></Tags>
            ))}
          </div>
        </div>
        {/* publisher and pages info */}
        <div className="flex items-center gap-8">
          <div className="flex gap-2 items-center text-[#13131399]">
            <IoPeople />
            <p>Publisher : {publisher}</p>
          </div>
          <div className="flex gap-2 items-center text-[#13131399]">
            <SiPowerpages />
            <p>Pages : {totalPages}</p>
          </div>
        </div>
        {/* line */}
        <div className="border-b border-[#13131326]"></div>
        {/* category , rating and viewdetails btn */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start lg:items-center pt-3 lg:pt-1">
                <p className="bg-[#328EFF26] px-5 py-2 rounded-3xl text-[#328EFF] h-full">Category : {category}</p>
                <p className="bg-[#FFAC3326] px-5 py-2 rounded-3xl text-[#FFAC33] h-full">Rating : {rating}</p>
                <div>
                    <Link to={`/bookDetails/${bookId}`}>
                    
                <p className=" bg-[#23BE0A] px-6 py-2 rounded-3xl text-white hover:bg-[#23BE0A]/[.90]">View Details</p>
                    </Link>

                {/* <button className="btn bg-[#23BE0A] px-6 py-2 rounded-3xl text-white"> 
                    View Details
                </button> */}
                </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
