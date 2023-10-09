import './App.css'
import {Route, Routes} from "react-router-dom";
import ApexLegendsTop100 from "./Pages/ApexLegendsTop100/ApexLegendsTop100.tsx";
import ApexLegendsCompare2PlayersStats
    from "./Pages/ApexLegendsCompare2PlayersStats/ApexLegendsCompare2PlayersStats.tsx";
import ApexLegendsGetYourFavouritePlayers
    from "./Pages/ApexLegendsGetYourFavouritePlayers/ApexLegendsGetYourFavouritePlayers.tsx";
import ApexLegendsGetAPlayersRank from "./Pages/ApexLegendsGetAPlayersRank/ApexLegendsGetAPlayersRank.tsx";
import LoginPage from "./Pages/LoginPage/LoginPage.tsx";
import {useState} from "react";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.tsx";
import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute.tsx";
import Homepage_Dropdown from "./Pages/Homepage/Homepage.tsx";
import CSGOCompare2PlayersStats from "./Pages/CSGOCompare2PlayersStats/CSGOCompare2PlayersStats.tsx";
import SplitgateCompare2PlayersStats from "./Pages/SplitgateCompare2PlayersStats/SplitgateCompare2PlayersStats.tsx";
import CSGOGetAPlayersRank from "./Pages/CSGOGetAPlayersRank/CSGOGetAPlayersRank.tsx";
import CSGOGetYourFavouritePlayers from "./Pages/CSGOGetYourFavouritePlayers/CSGOGetYourFavouritePlayers.tsx";
import CSGOTop100 from "./Pages/CSGOTop100/CSGOTop100.tsx";
import SplitgateGetAPlayersRank from "./Pages/SplitgateGetAPlayersRank/SplitgateGetAPlayersRank.tsx";
import SplitgateGetYourFavouritePlayers
    from "./Pages/SplitgateGetYourFavouritePlayers/SplitgateGetYourFavouritePlayers.tsx";
import SplitgateTop100 from "./Pages/SplitgateTop100/SplitgateTop100.tsx";


function App() {
    const [user, setUser] = useState("");

    return (
        <>
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser}/>}/>
            <Route path={"/register"} element={<RegisterPage/>}/>

            <Route element={<ProtectedRoute user={user}/>}>
                <Route path="/Homepage_Dropdown" element={<Homepage_Dropdown/>}/>
                <Route path="/ApexLegendsTop100" element={<ApexLegendsTop100/>}/>
                <Route path="/ApexLegendsCompare2PlayersStats" element={<ApexLegendsCompare2PlayersStats/>}/>
                <Route path="/ApexLegendsGetYourFavouritePlayers" element={<ApexLegendsGetYourFavouritePlayers/>}/>
                <Route path="/ApexLegendsGetAPlayersRank" element={<ApexLegendsGetAPlayersRank/>}/>
                <Route path="/CSGOCompare2PlayersStats" element={<CSGOCompare2PlayersStats/>}/>
                <Route path="/CSGOGetAPlayersRank" element={<CSGOGetAPlayersRank/>}/>
                <Route path="/CSGOGetYourFavouritePlayers" element={<CSGOGetYourFavouritePlayers/>}/>
                <Route path="/CSGOTop100" element={<CSGOTop100/>}/>
                <Route path="/SplitgateCompare2PlayersStats" element={<SplitgateCompare2PlayersStats/>}/>
                <Route path="/SplitgateGetAPlayersRank" element={<SplitgateGetAPlayersRank/>}/>
                <Route path="/SplitgateGetYourFavouritePlayers" element={<SplitgateGetYourFavouritePlayers/>}/>
                <Route path="/SplitgateTop100" element={<SplitgateTop100/>}/>
            </Route>
        </Routes>
        </>
    )
}

export default App
