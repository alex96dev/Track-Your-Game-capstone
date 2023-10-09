import "./Homepage.css"
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";


function Homepage_Dropdown() {
    const [titleofdropdown1, settitleofdropdown1] = useState("Choose a Game")
    const [titleofdropdown2, settitleofdropdown2] = useState("What do you want to see?")
    const [dropdownvalue1, setdropdownvalue1] = useState("")
    const [dropdownvalue2, setdropdownvalue2] = useState("")
    const [goToApexTop100Page, setgoToApexTop100Page] = useState(false)
    const [goToApexGetAPlayersRankPage, setgoToApexGetAPlayersRankPage] = useState(false)
    const [goToApexCompare2PlayersStatsPage, setgoToApexCompare2PlayersStatsPage] = useState(false)
    const [goToApexGetYourFavouritePlayersPage, setgoToApexGetYourFavouritePlayersPage] = useState(false)
    const [goToCsgoCompare2PlayersStats, setgoToCsgoCompare2PlayersStats] = useState(false)
    const [goToCsgoGetAPlayersRank, setgoToCsgoGetAPlayersRank] = useState(false)
    const [goToCsgoGetYourFavouritePlayers, setgoToCsgoGetYourFavouritePlayers] = useState(false)
    const [goToCsgoTop100Page, setgoToCsgoTop100Page] = useState(false)
    const [goToSplitgateCompare2PlayersStats, setgoToSplitgateCompare2PlayersStats] = useState(false)
    const [goToSplitgateGetAPlayersRank, setgoToSplitgateGetAPlayersRank] = useState(false)
    const [goToSplitgateGetYourFavouritePlayers, setgoToSplitgateGetYourFavouritePlayers] = useState(false)
    const [goToSplitgateTop100Page, setgoToSplitgateTop100Page] = useState(false)

    useEffect(() => setdropdownvalue1(titleofdropdown1), [titleofdropdown1]);
    useEffect(() => setdropdownvalue2(titleofdropdown2), [titleofdropdown2]);

    if (goToApexTop100Page) {
        return <Navigate to="/ApexLegendsTop100"/>;
    } else if (goToApexGetAPlayersRankPage) {
        return <Navigate to="/ApexLegendsGetAPlayersRank"/>;
    } else if (goToApexGetYourFavouritePlayersPage) {
        return <Navigate to="/ApexLegendsGetYourFavouritePlayers"/>;
    } else if (goToApexCompare2PlayersStatsPage) {
        return <Navigate to="/ApexLegendsCompare2PlayersStats"/>;
    } else if (goToCsgoCompare2PlayersStats) {
        return <Navigate to="/CSGOCompare2PlayersStats"/>;
    } else if (goToCsgoGetAPlayersRank) {
        return <Navigate to="/CSGOGetAPlayersRank"/>;
    } else if (goToCsgoGetYourFavouritePlayers) {
        return <Navigate to="/CSGOGetYourFavouritePlayers"/>;
    } else if (goToCsgoTop100Page) {
        return <Navigate to="/CSGOTop100"/>;
    } else if (goToSplitgateCompare2PlayersStats) {
        return <Navigate to="/SplitgateCompare2PlayersStats"/>;
    } else if (goToSplitgateGetAPlayersRank) {
        return <Navigate to="/SplitgateGetAPlayersRank"/>;
    } else if (goToSplitgateGetYourFavouritePlayers) {
        return <Navigate to="/SplitgateGetYourFavouritePlayers"/>;
    } else if (goToSplitgateTop100Page) {
        return <Navigate to="/SplitgateTop100"/>;
    }

    function setTitleOfDropdown1ToApexLegends() {
        settitleofdropdown1("Apex Legends");
    }

    function setTitleOfDropdown1CSGO() {
        settitleofdropdown1("CS:GO");
        setdropdownvalue1(titleofdropdown1);
    }

    function setTitleOfDropdown1Splitgate() {
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
                <div className={"title_homepage_h1"}>Track your Game</div>
            </div>
            <div className="dropdown">
                <div className={"buttons_container"}>
                    <div className={"dropdown1_homepage"}>
                        <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            <a className={"titleofdropdown1_hompage"}>{titleofdropdown1}</a>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" onClick={setTitleOfDropdown1ToApexLegends}>Apex Legends</a>
                            </li>
                            <li><a className="dropdown-item" onClick={setTitleOfDropdown1CSGO}>CS:GO</a>
                            </li>
                            <li><a className="dropdown-item" onClick={setTitleOfDropdown1Splitgate}>Splitgate</a></li>
                        </ul>
                    </div>
                    <div className={"dropdown2_homepage"}>
                        <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            <a className={"titleofdropdown2_hompage"}>{titleofdropdown2}</a>
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
                </div>
                <div>
                    <button type="button" className="btn btn-light" onClick={() => {
                        dropdownvalue1 === "Apex Legends" && dropdownvalue2 === "Get Top 100 (ranked)" ?
                            setgoToApexTop100Page(true) : dropdownvalue1 === "Apex Legends" && dropdownvalue2 === "Get a Players Rank" ?
                                setgoToApexGetAPlayersRankPage(true) : dropdownvalue1 === "Apex Legends" && dropdownvalue2 === "Compare 2 players stats" ?
                                    setgoToApexCompare2PlayersStatsPage(true) : dropdownvalue1 === "Apex Legends" && dropdownvalue2 === "Get your favourite players" ?
                                        setgoToApexGetYourFavouritePlayersPage(true) :

                                        dropdownvalue1 === "CS:GO" && dropdownvalue2 === "Compare 2 players stats" ?
                                            setgoToCsgoCompare2PlayersStats(true) : dropdownvalue1 === "CS:GO" && dropdownvalue2 === "Get a Players Rank" ?
                                                setgoToCsgoGetAPlayersRank(true) : dropdownvalue1 === "CS:GO" && dropdownvalue2 === "Get your favourite players" ?
                                                    setgoToCsgoGetYourFavouritePlayers(true) : dropdownvalue1 === "CS:GO" && dropdownvalue2 === "Get Top 100 (ranked)" ?
                                                        setgoToCsgoTop100Page(true) :

                                                        dropdownvalue1 === "Splitgate" && dropdownvalue2 === "Compare 2 players stats" ?
                                                            setgoToSplitgateCompare2PlayersStats(true) : dropdownvalue1 === "Splitgate" && dropdownvalue2 === "Get a Players Rank" ?
                                                                setgoToSplitgateGetAPlayersRank(true) : dropdownvalue1 === "Splitgate" && dropdownvalue2 === "Get your favourite players" ?
                                                                    setgoToSplitgateGetYourFavouritePlayers(true) : dropdownvalue1 === "Splitgate" && dropdownvalue2 === "Get Top 100 (ranked)" ?
                                                                        setgoToSplitgateTop100Page(true) : null
                    }}><a className={"titleofconfirmbutton_hompage"}>Confirm</a>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Homepage_Dropdown