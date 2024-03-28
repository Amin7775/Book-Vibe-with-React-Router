
const User = ({user,id}) => {
    return (
        <div className="flex gap-3">
            <p className="font-semibold">{id+1} . </p>
            <div>
            <h3 className="font-medium">{user.name}</h3>
            <h3>Books Read : {user.booksRead}</h3>
            <p></p>
            </div>
        </div>
    );
};

export default User;