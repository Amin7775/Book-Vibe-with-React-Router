import Featured from "./Featured";



const Authors = ({data}) => {

    
    console.log(data)
    return (
        <div>
            <h1 className="text-xl font-bold mb-8 lg:mb-5 text-center lg:text-start">Talk With Authors</h1>
            <div className="grid grid-cols-2 gap-5">
                {
                    data.map((bookdata,id)=> <Featured key={id} bookdata={bookdata}></Featured>)
                }
            </div>
        </div>
    );
};

export default Authors;