import { useState } from "react";

const ListedBooks = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSelectedOption(event.target.value);
  };
  console.log(selectedOption);
  return (
    <div>
      {/* heading */}
      <div className="bg-[#1313130D] rounded-2xl my-8">
        <h1 className="font-bold text-3xl text-center p-10 ">Books</h1>
      </div>
      {/* sort */}
      <div className="flex items-center justify-center text-white">
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
      
    </div>
  );
};

export default ListedBooks;
