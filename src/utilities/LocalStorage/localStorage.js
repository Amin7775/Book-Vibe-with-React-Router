const getReadData = () =>{
    const getReadBooksData = localStorage.getItem('read')
    if(getReadBooksData){
        return JSON.parse(getReadBooksData)
    }
    return []
}

const setReadData = (book) =>{
    const AllData = getReadData()
    const exists = AllData.find(singleBook => singleBook.bookId == book.bookId)

    if(!exists){
        AllData.push(book)
        localStorage.setItem('read', JSON.stringify(AllData))
    }

}

// wishlist
const getWishlistData = () => {
    const getWishlist = localStorage.getItem('wishlist')
    if(getWishlist){
        return JSON.parse(getWishlist)
    }
    return []
}

const setWishlistData = (book) => {
    const getWishlist = getWishlistData()
    const ReadData = getReadData()

    const checkReadBooks = ReadData.find(singleBook => singleBook.bookId == book.bookId)
    const exists = getWishlist.find(singleBook => singleBook.bookId == book.bookId)

    if(!checkReadBooks && !exists){
        getWishlist.push(book)
        localStorage.setItem('wishlist', JSON.stringify(getWishlist))
    }




}

export {setReadData,getReadData,getWishlistData,setWishlistData}