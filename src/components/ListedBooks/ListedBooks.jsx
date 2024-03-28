import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadData, getWishlistData } from "../../utilities/LocalStorage/localStorage";
import ShowBook from "./ShowBook/ShowBook";

const ListedBooks = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const readData = getReadData()
  const wishlistData = getWishlistData()
  const [showReadData,setShowReadData]=useState(readData)
  const [showWishListData,setWishListData] = useState(wishlistData)
  console.log("read data", showReadData)
  console.log('wishlist', wishlistData)

  const handleChange = (event) => {
    event.preventDefault();
    setSelectedOption(event.target.value);
  };
  console.log(selectedOption);
  return (
    <div>
      {/* heading */}
      <div className="bg-[#1313130D] lg:rounded-2xl my-8">
        <h1 className="font-bold text-3xl text-center p-10 ">Books</h1>
      </div>
      {/* sort */}
      <div className="flex items-center justify-center text-white px-1 mb-5">
        <select
          className="select select-bordered w-full max-w-56 bg-[#23BE0A] text-white text-lg font-medium "
          value={selectedOption}
          onChange={handleChange}
        >
          <option disabled value="" className="bg-white text-black">
            Sort By :
          </option>
          <option value="rating" className="bg-white text-black">
            Rating
          </option>
          <option value="pages" className="bg-white text-black">
            Number Of Pages
          </option>
          <option value="year" className="bg-white text-black">
            Publisher Year
          </option>
        </select>
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
        {
            showReadData.map(book => <ShowBook key={book.bookId} book={book}></ShowBook>)
        }
      </div>
    </TabPanel>
    {/* wishlist */}
    <TabPanel>
    <div className="flex flex-col gap-6 my-8 p-5 lg:p-0">
        {
            showWishListData.map(book => <ShowBook key={book.bookId} book={book}></ShowBook>)
        }
      </div>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default ListedBooks;
