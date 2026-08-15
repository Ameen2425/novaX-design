import { BrowserRouter } from "react-router-dom"
import MainLayout from "./MainLayout/MainLayout"


export const App =() => {
  return(
    <>
    <BrowserRouter>
    <MainLayout/>
    </BrowserRouter>
    </>
  )
}