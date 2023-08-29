import './App.css'
import Homepage_Dropdown from "./Homepage/Homepage.tsx";


function App() {


  return (
    <>
      <h1>Track your Game</h1><br/>

    <Homepage_Dropdown title={"Choose your Game"} list={["Apex Legends", "Rocket League", "CS:GO"]}/><br/>

    <Homepage_Dropdown title={"What do you want to see?"} list={["Top 100 Player (ranked)", "Get a Players rank stats",
        "Get your favourite Players of that Game", "Compare 2 Players"]}/>
    </>
  )
}

export default App
