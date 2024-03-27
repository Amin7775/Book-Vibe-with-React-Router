
const Banner = () => {
    return ( 
        <div className="mt-5 lg:mt-10 flex flex-col-reverse lg:flex-row bg-[#1313130D] justify-center items-center p-0 lg:px-20 lg:rounded-3xl">
            <div className="w-full lg:w-[55%] py-0 px-5 lg:p-28">
                <h1 className="text-2xl lg:text-6xl font-bold leading-tight text-center lg:text-start">Books to freshen up your bookshelf</h1>

               <div className="flex justify-center items-center lg:items-start lg:justify-start pb-3 lg:pb-0">
               <button className="btn bg-[#23BE0A] text-lg lg:text-xl font-semibold px-5 lg:px-6  py-3 lg:py-4 rounded-lg h-full text-white my-5 lg:mt-10">
                    View The List
                </button>
               </div>
            </div>
            <div className="flex-1 px-6 lg:p-12">
                <img src="https://i.ibb.co/x2pKRjV/Edge-of-Light-3-D-mockup.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;