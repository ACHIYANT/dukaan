import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  return <div className="flex flex-row items-start h-full relative">
    <NavBar/>
    <div className="ml-[224px]">
        <Header/>
        <Main/>
    </div>
  </div>
}

export default App
