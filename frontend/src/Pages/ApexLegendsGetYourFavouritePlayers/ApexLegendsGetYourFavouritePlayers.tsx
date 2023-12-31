import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Navigate} from "react-router-dom";
import "./ApexLegendsGetYourFavouritePlayers.css"

type Favouriteplayer = {
    id: string;
    name: string;
}

export default function ApexLegendsGetYourFavouritePlayers() {

    const [listofallfavouriteplayer, setListofallfavouriteplayer] = useState<Favouriteplayer[]>()
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [goToHomepage, setGoToHomepage] = useState(false)
    const [input, setInput] = useState("")
    const [input2, setInput2] = useState("")
    const [uuid, setUuid] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    useEffect(() => {
        axios({
            method: 'get',
            url: "/api/fplayerapex/listofallplayer",
        })
            .then((response) => {
                setListofallfavouriteplayer(response.data)
            })

    }, []);


    useEffect(() => {
        axios({
            method: 'post',
            url: "/api/fplayerapex/" + uuid,
            data: {
                id: uuid,
                name: input
            }
        })
    }, [uuid])


    if (goToHomepage) {
        return <Navigate to="/Homepage_Dropdown"/>;
    }


    function deleteFavouritePlayer() {

        axios({
            method: 'get',
            url: "/api/fplayerapex/name/" + input2,
        })
            .then((response) => {
                axios({
                    method: 'delete',
                    url: "/api/fplayerapex/" + response.data.id,
                })
            })

    }

    function updateList() {
        axios({
            method: 'get',
            url: "/api/fplayerapex/listofallplayer",
        })
            .then((response) => {
                setListofallfavouriteplayer(response.data)
            })
    }

    function createUuid() {
        setUuid(uuidv4())
    }

    return (
        <div className={"div1"}>
            <div className={"title_subpages"}>See Your Favourite Players</div>
            <hr/>
            <ul className={"list"}>
                {listofallfavouriteplayer?.length===0 ? <a>No Entries</a> : listofallfavouriteplayer?.map(favouriteplayer => <li key={favouriteplayer.id}>
                    <p>{favouriteplayer.name}
                    </p>
                </li>)}
            </ul>
            <hr/>
            <div className={"buttons"}>
            <Button className={"btn btn-warning"} onClick={handleShow}>Save new Player</Button>
            <Button className={"btn btn-warning"} onClick={handleShow2}>Delete Player</Button>
            <Button className={"btn btn-warning"} onClick={updateList}>Update List</Button>
            </div>
            <hr/>
            <Button className="btn btn-light" onClick={() => setGoToHomepage(true)}>Back to Homepage</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className={"modalheader"}>
                    <Modal.Title>Save a Player to the list</Modal.Title>
                </Modal.Header>
                <Modal.Body className={"modalbody"}>
                    <p className={"save_player_name"}><a className={"save_player_name_a"}>Name: </a><input className={"inputfield_"} type="text" onChange={event => setInput(event.target.value)}/></p>
                    <p className={"save_player_name"}><Button className={"btn btn-warning"} onClick={createUuid}>Confirm</Button></p>
                </Modal.Body>
                <Modal.Footer className={"modalfooter"}>
                    <Button className={"btn btn-warning"} variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton className={"modalheader"}>
                    <Modal.Title>Delete a Player from the list</Modal.Title>
                </Modal.Header>
                <Modal.Body className={"modalbody"}>
                    <p className={"save_player_name"}><a className={"save_player_name_a"}>Name: </a><input className={"inputfield_"} type="text" onChange={event => setInput2(event.target.value)}/></p>
                    <p className={"save_player_name"}><Button className={"btn btn-warning"} onClick={deleteFavouritePlayer}>Confirm</Button></p>
                </Modal.Body>
                <Modal.Footer className={"modalfooter"}>
                    <Button className={"btn btn-warning"} variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}