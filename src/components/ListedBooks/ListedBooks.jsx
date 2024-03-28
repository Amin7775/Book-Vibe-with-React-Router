import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getReadData,
  getWishlistData,
} from "../../utilities/LocalStorage/localStorage";
import ShowBook from "./ShowBook/ShowBook";
import {
  sortByPages,
  sortByRating,
  sortByYear,
} from "../../utilities/Sort/sort";
import { FaChevronDown } from "react-icons/fa";

const ListedBooks = () => {
  const readData = getReadData();
  const wishlistData = getWishlistData();
  const [showReadData, setShowReadData] = useState(readData);
  const [showWishListData, setWishListData] = useState(wishlistData);
  // console.log("read data", showReadData);
  // console.log("wishlist", wishlistData);

  const handleChange = (selected) => {
    // event.preventDefault();
    // console.log(selected);
    // const selectValue = event.target.value;
    // setSelectedOption(event.target.value);
    if (selected == "rating") {
      const res = sortByRating(showReadData);
      const wishlistRes = sortByRating(showWishListData);
      setWishListData([...wishlistRes]);
      setShowReadData([...res]);
      console.log("yo", showReadData);
    } else if (selected == "totalPages") {
      const res = sortByPages(showReadData);
      const wishlistRes = sortByPages(showWishListData);
      setWishListData([...wishlistRes]);
      setShowReadData([...res]);
    } else if (selected == "yearOfPublishing") {
      const res = sortByYear(showReadData);
      const wishlistRes = sortByYear(showWishListData);
      setWishListData([...wishlistRes]);
      setShowReadData([...res]);
    } else if (selected == "default") {
      setWishListData(wishlistData);
      setShowReadData(readData);
    }
  };
  // console.log(selectedOption);
  return (
    <div>
      {/* heading */}
      <div className="bg-[#1313130D] lg:rounded-2xl my-6 lg:my-8">
        <h1 className="font-bold text-3xl text-center p-10 ">Books</h1>
      </div>
      {/* sort */}
      <div className="flex items-center justify-center text-white px-1 mb-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn text-white text-lg font-medium m-1 bg-[#23BE0A] hover:bg-[#23BE0A]/[.90]">
            Sort By <FaChevronDown />

          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li className="text-black text-center" onClick={() => handleChange("default")}>
              <a>Time Listed(default)</a>
            </li>
            <li className="text-black text-center" onClick={() => handleChange("rating")}>
              <a>Rating</a>
            </li>
            <li
              className="text-black text-center"
              onClick={() => handleChange("totalPages")}
            >
              <a> Number Of Pages</a>
            </li>
            <li
              className="text-black text-center"
              onClick={() => handleChange("yearOfPublishing")}
            >
              <a>Publisher Year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* container */}
      {/* react tab */}
      <Tabs>
        <TabList className="px-1">
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        {/* read */}
        <TabPanel>
          <div className="flex flex-col gap-6 my-8 p-5 lg:p-0">
            {showReadData.map((book) => (
              <ShowBook key={book.bookId} book={book}></ShowBook>
            ))}
          </div>
        </TabPanel>
        {/* wishlist */}
        <TabPanel>
          <div className="flex flex-col gap-6 my-8 p-5 lg:p-0">
            {showWishListData.map((book) => (
              <ShowBook key={book.bookId} book={book}></ShowBook>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
