import { RouterProvider } from "react-router-dom"
import router from './routes/AppRoutes';
// import './App.css'   //fixme - uncomment

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
