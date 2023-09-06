import axios from "axios";
import {useEffect, useState} from "react";
import "./ApexLegendsTop100.css"

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

    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/listofallplayer',
        })
            .then(function (response) {
                setTop100list(response.data)
            });
    }, [])

    return (
        <div>
            <h1>Top 100 (ranked)</h1>
            <ul>
                {top100list?.map(player => <li key={player.id}>{player.rank}: {player.name}</li>)}
            </ul>
        </div>
    )
}