import { Route, Routes } from "react-router-dom"
import Authentication from "./components/auth/page"
import Home from "./components/home/page"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Authentication />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
