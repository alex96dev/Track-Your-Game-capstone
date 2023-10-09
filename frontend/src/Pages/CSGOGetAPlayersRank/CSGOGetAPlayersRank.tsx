import "./CSGOGetAPlayersRank.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Modal} from "react-bootstrap";
import {Navigate} from "react-router-dom";

type Player = {
    id: string;
    name: string;
    rank: string;
    rank_score: string;
    level: string;
    kills: string;
    damage: string;
    wins: string;
}

export default function CSGOGetAPlayersRank() {
    const [input, setInput] = useState("");
    const [playerrank, setPlayerrank] = useState("");
    const [playername, setPlayername] = useState("");
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [goToHomepage, setGoToHomepage] = useState(false);

    const [listofallplayer, setListofallplayer] = useState<Player[]>()

    useEffect(() => {
        axios({
            method: 'get',
            url: "/api/player/listofallplayer",
        })
            .then((response) => {
                setListofallplayer(response.data)
            })
    }, [show2])


    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);


    if (goToHomepage) {
        return <Navigate to="/Homepage_Dropdown"/>;
    }

    function getRank() {

        axios({
            method: 'get',
            url: "/api/player/name/" + input,
        })
            .then((response) => {
                setPlayername(response.data.name);
                setPlayerrank(response.data.rank);
                handleShow();
            })

    }

    return (
        <div className={"div1"}>
            <div className={"title_subpages"}>Get A Players Rank</div>
            <hr/>
            <form>
                <div className={"label_inputfield1"}>
                    <label className="label">Type in a players Name:</label><a> </a>
                    <input className={"inputfield_"} type="text" onChange={event => setInput(event.target.value)}/>
                </div>
                <div className={"showmetherank"}>
                    <Button className="btn btn-warning" onClick={getRank}>Show me the rank</Button>
                </div>

                <Button className="btn btn-warning" onClick={handleShow2}>Show me all Player names (Top 100)</Button>
                <br/>
                <br/>
                <hr/>
                <Button className="btn btn-light" onClick={() => setGoToHomepage(true)}>Back to Homepage</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>See the players rank:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>"{playername}" has rank <mark>{playerrank}</mark></Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>Top 100 Ranked</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            {listofallplayer?.map(player => <li key={player.id}><p>{player.name}</p></li>)}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={handleClose2}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </div>
    )
}