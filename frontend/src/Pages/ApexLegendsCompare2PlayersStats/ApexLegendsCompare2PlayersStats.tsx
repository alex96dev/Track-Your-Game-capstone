import {Button, Modal} from "react-bootstrap";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import "./ApexLegendsCompare2PlayersStats.css"

type type = {
    type: {
        stats: {
            level: { rank: string, value: string }
            kills: { rank: string, value: string }
            damage: { rank: string, value: string }
            matchesPlayed: { rank: string, value: string }
        }
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

export default function ApexLegendsCompare2PlayersStats() {

    const [goToHomepage, setGoToHomepage] = useState(false);
    const [show, setShow] = useState(false);
    const [input1, setInput1] = useState("");
    const [inputPlatform, setInputPlatform] = useState("");
    const [input2, setInput2] = useState("");
    const [inputPlatform2, setInputPlatform2] = useState("");
    const [comparePlayerList1, setComparePlayerList1] = useState<[responseComparePlayer]>();
    const [comparePlayerList2, setComparePlayerList2] = useState<[responseComparePlayer]>();

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    if (goToHomepage) {
        return <Navigate to="/"/>;
    }

    function comparePlayers() {

        axios({
            method: 'get',
            url: "/api/player/comparePlayer/" + inputPlatform + "/" + input1,
        })
            .then((response) => {
                setComparePlayerList1(response.data)
            })

        axios({
            method: 'get',
            url: "/api/player/comparePlayer/" + inputPlatform2 + "/" + input2,
        })
            .then((response) => {
                setComparePlayerList2(response.data)
                handleShow()
            })


    }

    return (
        <div className={"div1"}>
            <h1>Compare 2 Players Stats</h1>
            <hr/>
            <h3>(Please notice: Platforms can only be the following: "origin", "psn", "xbl")</h3>
            <br/>
            <form>
                <label>Name of Player 1:</label>
                <input type={"text"} onChange={event => setInput1(event.target.value)}/>
                <label>Platform Player 1:</label>
                <input type={"text"} onChange={event => setInputPlatform(event.target.value)}/>
                <br/><br/>
                <label>Name of Player 2:</label>
                <input type={"text"} onChange={event => setInput2(event.target.value)}/>
                <label>Platform Player 2:</label>
                <input type={"text"} onChange={event => setInputPlatform2(event.target.value)}/>
            </form>
            <br/>
            <Button className="btn btn-warning" onClick={comparePlayers}>Compare</Button>
            <hr/>
            <Button className="btn btn-light" onClick={() => setGoToHomepage(true)}>Back to Homepage</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Comparison</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {comparePlayerList1?.map(r => <li key={"1"}>
                            <p>{r.data.platformInfo.platformUserIdentifier}</p>
                            <p>{r.data.platformInfo.platformSlug}</p>
                            <p>{r.data.platformInfo.avatarUrl}</p>
                            <p></p>
                            <p>rank: {r.data.segments[0].type.stats.level.rank} value:{r.data.segments[0].type.stats.level.value}</p>
                            <p>rank: {r.data.segments[0].type.stats.damage.rank} value:{r.data.segments[0].type.stats.damage.value}</p>
                            <p>rank: {r.data.segments[0].type.stats.kills.rank} value:{r.data.segments[0].type.stats.kills.value}</p>
                            <p>rank: {r.data.segments[0].type.stats.matchesPlayed.rank} value:{r.data.segments[0].type.stats.matchesPlayed.value}</p>
                        </li>)
                        }
                        {comparePlayerList2?.map(r => <li key={"2"}>
                            <p>{r.data.platformInfo.platformUserIdentifier}</p>
                            <p>{r.data.platformInfo.platformSlug}</p>
                            <p>{r.data.platformInfo.avatarUrl}</p>
                            <p></p>
                            <p>rank: {r.data.segments[0].type.stats.level.rank} value:{r.data.segments[0].type.stats.level.value}</p>
                            <p>rank: {r.data.segments[0].type.stats.damage.rank} value:{r.data.segments[0].type.stats.damage.value}</p>
                            <p>rank: {r.data.segments[0].type.stats.kills.rank} value:{r.data.segments[0].type.stats.kills.value}</p>
                            <p>rank: {r.data.segments[0].type.stats.matchesPlayed.rank} value:{r.data.segments[0].type.stats.matchesPlayed.value}</p>
                        </li>)
                        }

                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}