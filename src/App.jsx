//import Navbar from "./components/Navbar/Navbar"
//import "./layout.scss"
import Homepage from "./pages/homepage/homepage";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import ListPage from "./pages/listPage/listPage";
import Layout from "./pages/layout/layout";
import SinglePage from "./pages/singlePage/singlePage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
      ]
        
    }
   
  ]);
  
  return (
    /*<div className="layout">
      <div className="navbar">
      <Navbar />
      </div>
      <div className="content">
        <Homepage/>
      </div>
    </div>*/
    <RouterProvider router={router}/>
  );
}

export default App