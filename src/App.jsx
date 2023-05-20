import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
