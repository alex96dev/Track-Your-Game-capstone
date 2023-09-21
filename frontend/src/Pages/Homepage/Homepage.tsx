import "./Homepage.css"
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

function Homepage_Dropdown() {
    const [titleofdropdown1, settitleofdropdown1] = useState("Choose a Game")
    const [titleofdropdown2, settitleofdropdown2] = useState("What do you want to see?")
    const [dropdownvalue1, setdropdownvalue1] = useState("")
    const [dropdownvalue2, setdropdownvalue2] = useState("")
    const [goToTop100Page, setgoToTop100Page] = useState(false)
    const [goToGetAPlayersRankPage, setgoToGetAPlayersRankPage] = useState(false)
    const [goToCompare2PlayersStatsPage, setgoToCompare2PlayersStatsPage] = useState(false)
    const [goToGetYourFavouritePlayersPage, setgoToGetYourFavouritePlayersPage] = useState(false)

    useEffect(() => setdropdownvalue1(titleofdropdown1), [titleofdropdown1]);
    useEffect(() => setdropdownvalue2(titleofdropdown2), [titleofdropdown2]);


    if (goToTop100Page) {
        return <Navigate to="/ApexLegendsTop100"/>;
    } else if (goToGetAPlayersRankPage) {
        return <Navigate to="/ApexLegendsGetAPlayersRank"/>;
    } else if (goToGetYourFavouritePlayersPage) {
        return <Navigate to="/ApexLegendsGetYourFavouritePlayers"/>;
    } else if (goToCompare2PlayersStatsPage) {
        return <Navigate to="/ApexLegendsCompare2PlayersStats"/>;
    }

    function setTitleOfDropdown1ToApexLegends() {
        settitleofdropdown1("Apex Legends");
    }

    function setTitleOfDropdown1RocketLeague() {
        settitleofdropdown1("CS:GO");
        setdropdownvalue1(titleofdropdown1);
    }

    function setTitleOfDropdown1CSGO() {
        settitleofdropdown1("Splitgate");
        setdropdownvalue1(titleofdropdown1);
    }

    function setGetAPlayersRank() {
        settitleofdropdown2("Get a Players Rank");
        setdropdownvalue2(titleofdropdown2);
    }

    function setGetYourFavouritePlayersOfThatGame() {
        settitleofdropdown2("Get your favourite players");
        setdropdownvalue2(titleofdropdown2);
    }

    function setCompare2PlayersStats() {
        settitleofdropdown2("Compare 2 players stats");
        setdropdownvalue2(titleofdropdown2);
    }

    function setGetTop100Ranked() {
        settitleofdropdown2("Get Top 100 (ranked)");
        setdropdownvalue2(titleofdropdown2);
    }

    return (
        <div className={"div1"}>
            <div className={"title"}>
                <h1 className={"title_homepage_h1"}>Track your Game</h1>
            </div>
            <div className="dropdown">
                <div className={"buttons_container"}>
                <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    {titleofdropdown1}
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={setTitleOfDropdown1ToApexLegends}>Apex Legends</a></li>
                    <li><a className="dropdown-item" onClick={setTitleOfDropdown1RocketLeague}>CS:GO</a>
                    </li>
                    <li><a className="dropdown-item" onClick={setTitleOfDropdown1CSGO}>Splitgate</a></li>
                </ul>
                <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    {titleofdropdown2}
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={setGetAPlayersRank}>Get a players rank</a></li>
                    <li><a className="dropdown-item" onClick={setGetYourFavouritePlayersOfThatGame}>Get your
                        favourite players</a></li>
                    <li><a className="dropdown-item" onClick={setCompare2PlayersStats}>Compare 2 players
                        stats</a></li>
                    <li><a className="dropdown-item" onClick={setGetTop100Ranked}>Get Top 100 (ranked)</a></li>
                </ul>
                </div>
                <div>
                    <button type="button" className="btn btn-light" onClick={() => {
                        dropdownvalue1 === "Apex Legends" && dropdownvalue2 === "Get Top 100 (ranked)" ?
                            setgoToTop100Page(true) : dropdownvalue1 === "Apex Legends" && dropdownvalue2 === "Get a Players Rank" ?
                                setgoToGetAPlayersRankPage(true) : dropdownvalue1 === "Apex Legends" && dropdownvalue2 === "Compare 2 players stats" ?
                                    setgoToCompare2PlayersStatsPage(true) : dropdownvalue1 === "Apex Legends" && dropdownvalue2 === "Get your favourite players" ?
                                        setgoToGetYourFavouritePlayersPage(true) : null
                    }}>Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Homepage_Dropdown