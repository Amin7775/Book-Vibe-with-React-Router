import { useEffect, useState } from "react";
import Authors from "./Authors";
import Groups from "./Groups";
import People from "./People";
import Quotes from "./Quotes";

const Community = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('./books.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-6 lg:my-10 bg-[#1313130D] p-10">
            <Authors data={data}></Authors>
            <People></People>
            {/* <Groups></Groups> */}
            {/* <Quotes></Quotes> */}
        </div>
    );
};

export default Community;