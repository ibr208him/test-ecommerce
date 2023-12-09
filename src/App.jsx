import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { CartContextProvider } from './Components/Web/Context/CartContext.jsx';
import UserContextProvider, { UserContext } from './Components/Web/Context/UserContext.jsx';
import {router} from './Layouts/router.jsx'


export default function App() {



  return (

  <CartContextProvider>
    <RouterProvider router={router}/>
    </CartContextProvider>

  )
}
