import "./ApexLegendsGetAPlayersRank.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {Modal, Button} from "react-bootstrap";

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

export default function ApexLegendsGetAPlayersRank() {
    const [input, setInput] = useState("");
    const [playerrank, setPlayerrank] = useState("");
    const [playername, setPlayername] = useState("");
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const [listofallplayer, setListofallplayer] = useState<Player[]>()

    useEffect(() => {
        axios({
            method: 'get',
            url: "/api/listofallplayer",
        })
            .then((response) => {
                setListofallplayer(response.data)
            })
    }, [show2])


    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleShow2 = () => {

        setShow2(true);

    }

    function getRank() {

        axios({
            method: 'get',
            url: "/api/name/" + input,
        })
            .then((response) => {
                setPlayername(response.data.name);
                setPlayerrank(response.data.rank);
                handleShow();
            })

    }

    return (
        <div>
            <h1>Get A Players Rank</h1>
            <br/>
            <form>
                <label className="label">Type in a players Name:</label><a> </a>
                <input type="text" onChange={event => setInput(event.target.value)}/>
                <Button onClick={getRank}>Show me the rank</Button>
                <br/>
                <br/>
                <Button onClick={handleShow2}>Show me all Player names (Top 100)</Button>
                <br/>
                <br/>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>See the players rank:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{playername} has rank {playerrank}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
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
                            {listofallplayer?.map(player => <li key={player.id}><p>{player.rank}: {player.name} </p></li>)}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </div>
    )
}