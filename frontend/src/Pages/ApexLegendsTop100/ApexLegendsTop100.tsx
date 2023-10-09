import axios from "axios";
import {useEffect, useState} from "react";
import "./ApexLegendsTop100.css"
import {Navigate} from "react-router-dom";
import {Button} from "react-bootstrap";

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

export default function ApexLegendsTop100() {
    const [top100list, setTop100list] = useState<Player[]>()
    const [goToHomepage, setGoToHomepage] = useState(false);

    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/player/listofallplayer',
        })
            .then(function (response) {
                setTop100list(response.data)
            });
    }, [])

    useEffect(()=>{
        top100list?.sort()
    }, [top100list])


    if (goToHomepage) {
        return <Navigate to="/Homepage_Dropdown"/>;
    }


    return (
        <div className={"div1"}>
            <div className={"title_subpages"}>Apex Legends Top 100 (ranked)</div>
            <hr/>
            <ul className={"top100_list"}>
                {top100list?.map(player => <li key={player.id}>{player.rank}: {player.name}</li>)}
            </ul>
            <hr/>
            <Button className="btn btn-light" onClick={() => setGoToHomepage(true)}>Back to Homepage</Button>
        </div>
    )
}