import './App.css'
import Homepage_Dropdown from "./Pages/Homepage/Homepage.tsx";
import {Route, Routes} from "react-router-dom";
import ApexLegendsTop100 from "./Pages/ApexLegendsTop100/ApexLegendsTop100.tsx";
import ApexLegendsCompare2PlayersStats
    from "./Pages/ApexLegendsCompare2PlayersStats/ApexLegendsCompare2PlayersStats.tsx";
import ApexLegendsGetYourFavouritePlayers
    from "./Pages/ApexLegendsGetYourFavouritePlayers/ApexLegendsGetYourFavouritePlayers.tsx";
import ApexLegendsGetAPlayersRank from "./Pages/ApexLegendsGetAPlayersRank/ApexLegendsGetAPlayersRank.tsx";


function App() {


    return (
            <Routes>
                <Route path="/" element={<Homepage_Dropdown/>}/>
                <Route path="/ApexLegendsTop100" element={<ApexLegendsTop100/>}/>
                <Route path="/ApexLegendsCompare2PlayersStats" element={<ApexLegendsCompare2PlayersStats/>}/>
                <Route path="/ApexLegendsGetYourFavouritePlayers" element={<ApexLegendsGetYourFavouritePlayers/>}/>
                <Route path="/ApexLegendsGetAPlayersRank" element={<ApexLegendsGetAPlayersRank/>}/>
            </Routes>
    )
}

export default App
