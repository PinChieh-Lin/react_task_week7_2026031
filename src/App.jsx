import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import "./assets/style.css";
import MessageToast from "./components/MessageToast.jsx";

function App() {
    
    return (
        <>
        <MessageToast />
        <RouterProvider router={router} />  
        </>
    )
}
export default App;