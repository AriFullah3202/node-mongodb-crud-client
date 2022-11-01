import './App.css';
import Login from './components/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './components/Login/DashBoard';
import Update from './components/Login/Update';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard></DashBoard>,
      loader: () => fetch("http://localhost:5000/users")
    },
    {
      path: "/addUser",
      element: <Login></Login>
    },
    {
      path: "/update/:id",
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
