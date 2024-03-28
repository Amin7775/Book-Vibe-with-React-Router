
const Featured = ({bookdata}) => {

    return (
        <div className="flex gap-2 items-center px-2">
            <div>
            <h1 className="font-semibold">{bookdata.author}</h1>
            <p className="text-sm">Author of '{bookdata.bookName}'</p>
            <a href="" className="font-medium text-red-500">Talk</a>
            </div>
        </div>
    );
};

export default Featured;