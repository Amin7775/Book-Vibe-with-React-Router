import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './font.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import Contribute from './components/Contribute/Contribute.jsx';
import Community from './components/Community/Community.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/", 
        element : <Home></Home>,
        loader: ()=> fetch('books.json')
      },
      {
        path: "/listedBooks", 
        element : <ListedBooks></ListedBooks>
      },
      {
        path: "/pagesToRead", 
        element : <PagesToRead></PagesToRead>
      },
      {
        path: "/contribute", 
        element : <Contribute></Contribute>
      },
      {
        path: "/community", 
        element : <Community></Community>
      },
      {
        path: "/bookDetails/:bookID",
        loader: ()=> fetch('./books.json'),
        element:<BookDetails></BookDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
