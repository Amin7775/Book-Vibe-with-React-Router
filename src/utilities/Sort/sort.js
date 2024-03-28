export const sortByRating = (books) =>{
    const res = books.sort((a,b)=>a.rating - b.rating )
    return res
}
export const sortByPages = (books) =>{
    const res = books.sort((a,b)=>a.totalPages - b.totalPages )
    return res
}
export const sortByYear = (books) =>{
    const res = books.sort((a,b)=>a.yearOfPublishing - b.yearOfPublishing )
    return res
}