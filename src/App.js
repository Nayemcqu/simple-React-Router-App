import {createBrowserRouter,RouterProvider,
//  createRoutesFromElements,Route
} from 'react-router-dom'
import HomePage from './pages/home';
import ProductPage from './pages/Product';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

// const routerDefinitions=createRoutesFromElements(
// <Route>
// <Route path='/' element={<HomePage/>}/> 
// <Route path='/products' element={<ProductPage/>}/> 
// </Route >  
// );


const router=createBrowserRouter([
{path:'/root',
element:<RootLayout/>,
errorElement:<ErrorPage/>,
children:[
{index:true,element:<HomePage/>},//  index props same as path:'/'
{path:'products',element:<ProductPage/>},
{path:'products/:productId',element:<ProductDetailPage/>}
]
}])

// const router=createBrowserRouter(routerDefinitions);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
