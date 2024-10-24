import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Applayout } from "./Components/Layput/AppLayout";
import "./App.css";

import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { Home } from "./pages/Home";
import { Errorpage } from "./pages/Errorpage";
import { CountryDetails } from "./Components/Layput/CountryDetails";
const router = createBrowserRouter([
   {
  path:'/',
  element:<Applayout />,    
  errorElement: <Errorpage />, 

  children:[{
    path:'/',
    element:<Home />
  },
  {
    path:'About',
    element:<About />
  },
  {
    path:'Contact',
    element:<Contact />
  },
  {
    path:'Country',
    element:<Country />
  },
  {
    path:'Country/:id',
    element:<CountryDetails />
  },
]},
 

])
const App = () =>{
  return <RouterProvider router={router} />;
}

export default App;   