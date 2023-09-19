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
            </Route>
        </Routes>
        </>
    )
}

export default App
