export const sortByRating = (books) =>{
    const res = books.sort((a,b)=>  b.rating - a.rating)
    return res
}
export const sortByPages = (books) =>{
    const res = books.sort((a,b)=>  b.totalPages - a.totalPages )
    return res
}
export const sortByYear = (books) =>{
    const res = books.sort((a,b)=>  b.yearOfPublishing - a.yearOfPublishing )
    return res
}