import {Button, Modal} from "react-bootstrap";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import "./ApexLegendsCompare2PlayersStats.css"

type type = {
    stats: {
        level: { rank: string, value: string }
        kills: { rank: string, value: string }
        damage: { rank: string, value: string }
        matchesPlayed: { rank: string, value: string }
    }
}

type responseComparePlayer = {
    data: {
        platformInfo: {
            platformSlug: string;
            platformUserIdentifier: string;
            avatarUrl: string;
        };
        segments: type[];
    }
}

const defaultResponseComparePlayer: responseComparePlayer = {
    data: {
        platformInfo: {
            platformSlug: "Keine Daten vorhanden",
            platformUserIdentifier: "Keine Daten vorhanden",
            avatarUrl: "Keine Daten vorhanden",
        },
        segments: [{
            stats: {
                level: {rank: "Keine Daten vorhanden", value: "Keine Daten vorhanden"},
                kills: {rank: "Keine Daten vorhanden", value: "Keine Daten vorhanden"},
                damage: {rank: "Keine Daten vorhanden", value: "Keine Daten vorhanden"},
                matchesPlayed: {rank: "Keine Daten vorhanden", value: "Keine Daten vorhanden"}
            }
        }
        ]
    }
}

export default function ApexLegendsCompare2PlayersStats() {

    const [goToHomepage, setGoToHomepage] = useState(false);
    const [show, setShow] = useState(false);
    const [input1, setInput1] = useState("");
    const [inputPlatform, setInputPlatform] = useState("");
    const [input2, setInput2] = useState("");
    const [inputPlatform2, setInputPlatform2] = useState("");
    const [comparePlayerList1, setComparePlayerList1] = useState<responseComparePlayer>(() => defaultResponseComparePlayer);
    const [comparePlayerList2, setComparePlayerList2] = useState<responseComparePlayer>(() => defaultResponseComparePlayer);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    if (goToHomepage) {
        return <Navigate to="/Homepage_Dropdown"/>;
    }

    function comparePlayers() {

        axios({
            method: 'get',
            url: "/api/player/comparePlayer/" + inputPlatform + "/" + input1,
        })
            .then((response) => {
                setComparePlayerList1(response.data)

            })
            .then(() => axios({
                method: 'get',
                url: "/api/player/comparePlayer/" + inputPlatform2 + "/" + input2,
            })
                .then((response) => {
                    setComparePlayerList2(response.data)
                    handleShow()
                }))
    }

    return (
        <div className={"div1"}>
            <h1>Compare 2 Players Stats</h1>
            <hr/>
            <h3>(Please notice: Platforms can only be the following: "origin", "psn", "xbl")</h3>
            <br/>
            <form>
                <label>Name of Player 1:</label>
                <input className={"inputfield_"} type={"text"} onChange={event => setInput1(event.target.value)}/>
                <label>Platform Player 1:</label>
                <input className={"inputfield_"} type={"text"}
                       onChange={event => setInputPlatform(event.target.value)}/>
                <br/><br/>
                <label>Name of Player 2:</label>
                <input className={"inputfield_"} type={"text"} onChange={event => setInput2(event.target.value)}/>
                <label>Platform Player 2:</label>
                <input className={"inputfield_"} type={"text"}
                       onChange={event => setInputPlatform2(event.target.value)}/>
            </form>
            <br/>
            <Button className="btn btn-warning" onClick={comparePlayers}>Compare</Button>
            <hr/>
            <Button className="btn btn-light" onClick={() => setGoToHomepage(true)}>Back to Homepage</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className={"modalheader"}>
                    <Modal.Title><h2 className={"h2_compare"}>Comparison</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body className={"modalbody_compare"}>
                    <ul className={"ul_compare"}>
                        <form>
                        <label className={"l1"}>Player1</label>
                        <li className={"list1"}>
                            <p><h5>Name: </h5>{comparePlayerList1.data.platformInfo.platformUserIdentifier !== null ? comparePlayerList1.data.platformInfo.platformUserIdentifier : "No Data"}</p>
                            <p><h5>Platform: </h5>{comparePlayerList1.data.platformInfo.platformSlug !== null ? comparePlayerList1.data.platformInfo.platformSlug : "No Data"}</p>
                            <p><h5>Avatar: </h5>{comparePlayerList1.data.platformInfo.avatarUrl !== null ? <img src={comparePlayerList1.data.platformInfo.avatarUrl} width={100} height={100}/> : "No Data"}</p>
                            <p></p>
                            <p><h5>level: </h5>rank: {comparePlayerList1.data.segments[0].stats.level.rank !== null ? comparePlayerList1.data.segments[0].stats.level.rank : "No Data"} | value:{comparePlayerList1.data.segments[0].stats.level.value !== null ? comparePlayerList1.data.segments[0].stats.level.value : "No Data"}</p>
                            <p><h5>damage: </h5>rank: {comparePlayerList1.data.segments[0].stats.damage.rank !== null ? comparePlayerList1.data.segments[0].stats.damage.rank : "No Data"} | value:{comparePlayerList1.data.segments[0].stats.damage.value !== null ? comparePlayerList1.data.segments[0].stats.damage.value : "No Data"}</p>
                            <p><h5>kills: </h5>rank: {comparePlayerList1.data.segments[0].stats.kills.rank !== null ? comparePlayerList1.data.segments[0].stats.kills.rank : "No Data"} | value:{comparePlayerList1.data.segments[0].stats.kills.value !== null ? comparePlayerList1.data.segments[0].stats.kills.value : "No Data"}</p>
                            <p><h5>matches played: </h5>rank: {comparePlayerList1.data.segments[0].stats.matchesPlayed.rank !== null ? comparePlayerList1.data.segments[0].stats.matchesPlayed.rank : "No Data"} | value:{comparePlayerList1.data.segments[0].stats.matchesPlayed.value !== null ? comparePlayerList1.data.segments[0].stats.matchesPlayed.value : "No Data"}</p>
                        </li>
                        </form>
                        <form>
                        <label className={"l1"}>Player2</label>
                        <li className={"list2"}>
                            <p><h5>Name: </h5>{comparePlayerList2.data.platformInfo.platformUserIdentifier !== null ? comparePlayerList2.data.platformInfo.platformUserIdentifier : "No Data"}</p>
                            <p><h5>Platform: </h5>{comparePlayerList2.data.platformInfo.platformSlug !== null ? comparePlayerList2.data.platformInfo.platformSlug: "No Data"}</p>
                            <p><h5>Avatar: </h5>{comparePlayerList2.data.platformInfo.avatarUrl !== null ? <img src={comparePlayerList2.data.platformInfo.avatarUrl} width={100} height={100}/>: "No Data"}</p>
                            <p></p>
                            <p><h5>level: </h5>rank: {comparePlayerList2.data.segments[0].stats.level.rank!== null ? comparePlayerList2.data.segments[0].stats.level.rank: "No Data"} | value:{comparePlayerList2.data.segments[0].stats.level.value!== null ? comparePlayerList2.data.segments[0].stats.level.value: "No Data"}</p>
                            <p><h5>damage: </h5>rank: {comparePlayerList2.data.segments[0].stats.damage.rank!== null ? comparePlayerList2.data.segments[0].stats.damage.rank: "No Data"} | value:{comparePlayerList2.data.segments[0].stats.damage.value!== null ? comparePlayerList2.data.segments[0].stats.damage.value: "No Data"}</p>
                            <p><h5>kills: </h5>rank: {comparePlayerList2.data.segments[0].stats.kills.rank!== null ? comparePlayerList2.data.segments[0].stats.kills.rank: "No Data"} | value:{comparePlayerList2.data.segments[0].stats.kills.value!== null ? comparePlayerList2.data.segments[0].stats.kills.value: "No Data"}</p>
                            <p><h5>matches played: </h5>rank: {comparePlayerList2.data.segments[0].stats.matchesPlayed.rank!== null ? comparePlayerList2.data.segments[0].stats.matchesPlayed.rank: "No Data"} | value:{comparePlayerList2.data.segments[0].stats.matchesPlayed.value!== null ? comparePlayerList2.data.segments[0].stats.matchesPlayed.value: "No Data"}</p>
                        </li>
                        </form>
                    </ul>
                </Modal.Body>
                <Modal.Footer className={"modalfooter"}>
                    <Button variant="warning" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}