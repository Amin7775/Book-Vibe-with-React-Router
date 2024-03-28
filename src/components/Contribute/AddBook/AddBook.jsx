
const AddBook = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        
    }
   
    return (
        <div className="min-h-screen bg-[#1313130D]">
            <div className=" p-12 h-full w-full ">
                <h1 className="text-2xl font-bold ">Add a book to Book Vibe</h1>
                <p className="mt-5 text-[#131313CC]">We require a minimum set of field to create a new record. These are those fields.</p>

                {/* form */}
                <form onSubmit={handleSubmit}>
                    <div className="mt-5">
                    <label htmlFor="title"><span className="font-medium text-xl">Title</span> *required field</label><br />
                    <input className="border-1 px-3 py-2 mt-1 border-black w-full lg:w-[60%]" type="text" placeholder="Enter book title"/>
                    </div>
                    {/* author */}
                    <div className="mt-5">
                    <label htmlFor="title"><span className="font-medium text-xl">Author</span> *required field</label><br />
                    <input className="border-1 px-3 py-2 mt-1 border-black w-full lg:w-[80%]" type="text" placeholder="Enter author name"/>
                    </div>
                    {/* publisher */}
                    <div className="mt-5">
                    <label htmlFor="title"><span className="font-medium text-xl">Who is the publisher? </span> *required field</label><br />
                    <input className="border-1 px-3 py-2 mt-1 border-black w-full lg:w-[50%]" type="text" placeholder="Enter publisher name"/>
                    </div>
                    {/* when publisher */}
                    <div className="mt-5">
                    <label htmlFor="title"><span className="font-medium text-xl">When was it published?</span> You should be able to find this in the first few pages of the book</label><br />
                    <input className="border-1 px-3 py-2 mt-1 border-black w-full lg:w-[50%]" type="text" placeholder="Enter published year"/>
                    </div>
                    {/* option */}
                    <div className="mt-5">
                    <label htmlFor="title"><span className="font-medium text-xl">Add number and ISBN number</span> *Optional</label><br />
                    <div className="flex gap-10">

                    <input className="border-1 px-3 py-2 mt-1 border-black w-full lg:w-[45%]" type="text" placeholder="Enter book ID"/>
                    <input className="border-1 px-3 py-2 mt-1 border-black w-full lg:w-[45%]" type="text" placeholder="Enter book ISBN number"/>
                    </div>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                    <input type="submit" value="Add Book" className="btn bg-[#23BE0A] text-white hover:bg-[#23BE0A]/[.90] px-8 text-lg mt-6"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;