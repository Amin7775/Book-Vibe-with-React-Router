import { useEffect, useState } from "react";
import Books from "../Books/Books";
import Banner from "../Header/Banner/Banner";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedBooks = useLoaderData()
    const [booksData,setBooksData] = useState([])
    useEffect(()=>{
        setBooksData(loadedBooks)
    },[])
    // console.log(booksData)
    return (
        <div>
            <Banner></Banner>
            <Books booksData={booksData}></Books>
        </div>
    );
};

export default Home;