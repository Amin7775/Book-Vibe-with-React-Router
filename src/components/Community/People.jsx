import User from "./User";

const People = () => {
  const users = [
    {
      name: "Saif",
      booksRead: 20,
    },
    {
      name: "Rafi",
      booksRead: 19,
    },
    {
      name: "Farhan",
      booksRead: 18,
    },
    {
      name: "Rahat",
      booksRead: 17,
    },
    {
      name: "Shihab",
      booksRead: 16,
    },
    {
      name: "Tasnim",
      booksRead: 15,
    },
    {
      name: "Nusrat",
      booksRead: 14,
    },
    {
      name: "Ayesha",
      booksRead: 13,
    },
    {
      name: "Ishrat",
      booksRead: 12,
    },
    {
      name: "Mehreen",
      booksRead: 11,
    },
  ];

  return (
    <div>
       <h1 className="text-xl font-bold mb-8 lg:mb-5 text-center lg:text-start">Top Readers This Month</h1>
       <div className="px-1 grid-cols-1 ">
        {
            users.map((user,id)=><User key={id} user={user} id={id}></User>)
        }
       </div>
    </div>
);
};

export default People;
