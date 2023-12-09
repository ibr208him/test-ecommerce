import Layout from './Layout.jsx';
import Home from '.././Components/Web/Home/Home.jsx';
import Categories from '.././Components/Web/Categories/Categories.jsx';
import Products from '.././Components/Web/Products/ProductDetails.jsx';
import DashboardHome from '.././Components/Dashboard/dashboardHome/DashboardHome.jsx';
import DashboardCategories from '.././Components/Dashboard/dashboardCategories/DashboardCategories.jsx';
import DashboardProducts from '.././Components/Dashboard/dashboardProducts/DashboardProducts.jsx';
import DashboardLayout from '.././Layouts/DashboardLayout.jsx';
import Login from '.././Components/Web/Login/Login.jsx';
import Register from '.././Components/Web/Register/Register.jsx';
import { jwtDecode } from 'jwt-decode';
import CategoryProducts from '.././Components/Web/Products/CategoryProducts.jsx';
import ProductDetails from '.././Components/Web/Products/ProductDetails.jsx';
import Cart from '.././Components/Web/Cart/Cart.jsx';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './../Components/Web/ProtectedRoute/ProtectedRoute';
import Profile from '../Components/Web/Profile/Profile.jsx';
// import Auth from './../Components/Web/ProtectedRoute/Auth';
import SendCode from './../Components/Web/ForgetPassword/SendCode';
import SetPassword from '../Components/Web/ForgetPassword/SetPassword';


export const router=createBrowserRouter([  // we put the router inside the APP function to be children of APP,so that from here we can send the token to any components

  // web routes
  {
    
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true, //same is path:'/'
       // path:'/',
        element:<Home/>, 
      },
      {
        path:"/products/category/:id",
        element:<CategoryProducts/>, 
      },
      {
        path:'categories',
        element:<Categories/>, 
      },
      {
        path:'/products/:id',
        element:<ProductDetails/>, 
      },
      {
        path:'register',
        element:<ProtectedRoute protectType={'inside to register page'}><Register/> </ProtectedRoute>, 
      },
      {
        path:'login',
        element:<ProtectedRoute protectType={'inside to login page'}> <Login/> </ProtectedRoute>   // this is method one to protect log in page by the component Auth, method 2 is inside the login component code  
        
      },
      {
        path:"sendcode",
        element:<SendCode/>, 
      },
      {
        path:"setpassword",
        element:<SetPassword/>, 
      },






      {
        
        path:'cart',
        element: <ProtectedRoute protectType={'outised to page inside'}>
                 <Cart/> 
                 </ProtectedRoute>
      },
      {
        
        path:'profile',
        element: <ProtectedRoute protectType={'outised to page inside'}>
                 <Profile/> 
                 </ProtectedRoute>
      },

    ]
  },

  // dashboard routes
    {
    path:'/dashboard',
    element:<DashboardLayout/>,
    children:[
      {
        path:'home',
        element:<DashboardHome/>, 
      },
      {
        path:'categories',
        element:<DashboardCategories/>, 
      },
      {
        path:'products',
        element:<DashboardProducts/>, 
      },
    ]
  },
  {
    path:'*',
    element:<h2>page not found .....!!! </h2>,
  },
]);