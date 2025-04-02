import { ToastContainer } from "react-toastify";
import RouterCustom from "./router"
import './style/style.scss'
import '@ant-design/v5-patch-for-react-19';

function App() {
  return (
    <>
      <RouterCustom />
      <ToastContainer autoClose={1400} />
    </>
  )
}

export default App
