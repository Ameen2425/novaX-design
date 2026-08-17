import { BrowserRouter } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout/MainLayout"


export const App =() => {
  return(
    <>
    <BrowserRouter>
    <MainLayout/>
    </BrowserRouter>
    </>
  )
}