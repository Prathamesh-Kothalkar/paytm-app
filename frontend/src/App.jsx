import { BrowserRouter,Route,Routes } from "react-router-dom"
import Signup from "./Component/Signup"
import Signin from "./Component/Signin"
import Dashboard from "./Component/Dashboard"
import SendMoney from "./Component/SendMoney"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/send" element={<SendMoney/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
