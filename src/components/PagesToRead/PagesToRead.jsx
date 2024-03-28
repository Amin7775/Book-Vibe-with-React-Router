import { getReadData } from "../../utilities/LocalStorage/localStorage";
import Chart from "./Chart";

const PagesToRead = () => {

    const readData = getReadData()
    

    return (
      <div>
        <div className="bg-[#1313130D] lg:rounded-2xl my-6 lg:my-10">
          <h1 className="font-bold text-3xl text-center p-10 ">
            Pages To Read
          </h1>
        </div>
        {readData.length !== 0 ? (
          <Chart data={readData}></Chart>
        ) : (
          <div className="flex h-full min-h-[50vh] items-center justify-center">
            <h1 className="text-2xl font-semibold px-10 text-center">
              Please add books on your read list before visiting this page
            </h1>
          </div>
        )}
      </div>
    );
};

export default PagesToRead;