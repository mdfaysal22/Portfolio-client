import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";


function App() {
  return (
    <div className="bg-light  dark:bg-info text-black duration-500  dark:text-white">
      <div className="max-w-screen-lg	mx-auto ">
      <RouterProvider router={router}>
      
      </RouterProvider>
    </div>
    </div>
  );
}

export default App;
