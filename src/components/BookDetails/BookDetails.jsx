import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Tags from "../Book/Tags";
import {
  getReadData,
  getWishlistData,
  setReadData,
  setWishlistData,
} from "../../utilities/LocalStorage/localStorage";
import { toast } from "react-toastify";

const BookDetails = () => {
  const fetchedBooks = useLoaderData();
  const paramsData = useParams();
  const singleBook = fetchedBooks.find(
    (book) => book.bookId == paramsData.bookID
  );

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
  } = singleBook;

  const handleRead = () => {
    const readData = getReadData();
    const checkReadBooks = readData.find(
      (singleBook) => singleBook.bookId == bookId
    );
    console.log(checkReadBooks);
    if (checkReadBooks) {
      toast("This Book Already Exist in Read List");
    } else {
      toast("This Book Has Been Added To Your Read List");
      setReadData(singleBook);
    }
  };

  const handleWishlist = () => {
    const readData = getReadData();
    const getWishlist = getWishlistData();
    const checkReadBooks = readData.find(
      (singleBook) => singleBook.bookId == bookId
    );
    const checkWhishList = getWishlist.find(
      (singleBook) => singleBook.bookId == bookId
    );
    // console.log(checkReadBooks);
    if (checkReadBooks) {
      toast("This Book Already Exist in Read List");
    } else if (checkWhishList) {
      toast("This Book Already Exist in Wish List");
    //   console.log(getWishlistData());
    } else {
      toast("This Book Has Been Added To Your wishlist List");
      setWishlistData(singleBook);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row my-6 lg:my-11 gap-10 lg:gap-16">
      <div className="w-full lg:w-5/12 bg-[#1313130D] p-16 max-h-[85vh] overflow-hidden lg:rounded-md">
        <img className="h-full mx-auto" src={image} alt="" />
      </div>
      <div className="flex-1 px-5 lg:px-0">
        <h1 className="text-4xl font-bold mb-5">{bookName}</h1>
        <h3 className="text-[#131313CC] text-xl font-medium mb-5">
          By : {author}
        </h3>
        <div className="border-b border-[#13131326] mb-4"></div>
        <p className="text-[#131313CC] text-xl font-medium mb-3">{category}</p>
        <div className="border-b border-[#13131326] mb-5"></div>
        <p className="text-[#131313B3] mb-7 lg:mb-10">
          <span className="font-bold text-[#131313]">Review : </span>
          {review}
        </p>
        <div className="flex items-center gap-2 mb-5 lg:mb-6">
          <p>Tag</p>
          {tags.map((tag, id) => (
            <Tags key={id} tag={tag}></Tags>
          ))}
        </div>
        <div className="border-b border-[#13131326] mb-6"></div>
        <div className=" w-full lg:w-[40%] space-y-3">
          <div className="flex justify-between">
            <p className="text-[#131313B3]">Number of Pages :</p>
            <p className="font-semibold text-[#131313]">{totalPages}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#131313B3]">Publisher :</p>
            <p className="font-semibold text-[#131313]">{publisher}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#131313B3]">Year of Publishing :</p>
            <p className="font-semibold text-[#131313]">{yearOfPublishing}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#131313B3]">Rating :</p>
            <p className="font-semibold text-[#131313]">{rating}</p>
          </div>
        </div>
        {/* btn */}
        <div className="flex justify-center lg:justify-start gap-4 my-7">
          <button
            onClick={handleRead}
            className="btn bg-transparent border border-[#1313134D] text-lg font-semibold px-6 py-2 h-full"
          >
            Read
          </button>
          <button
            onClick={handleWishlist}
            className="btn bg-[#50B1C9] hover:bg-[#50B1C9]/[.90] text-lg font-semibold text-white px-6 py-2 h-full"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
