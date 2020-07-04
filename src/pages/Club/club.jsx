import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, TableBody, Tbody, Thead, TableHeader } from '../../components/js/Table'
export default function Competitions({ match }) {

    const [Club, setClub] = useState([])
    const [player, setPlayer] = useState([])

    useEffect(() => {
        handlerClub()
    }, [])

    const handlerClub = async () => {
        await axios.get(`http://api.football-data.org/v2/teams/${match.params.id}`, {
            headers: { 'X-Auth-Token': 'c710e33b71fe486c949abef77404ed69' },
        })
        .then(res => {
            setPlayer(res.data.squad)
            setClub(res.data)
        }
        )
    }
    function setCoach(player) {
        for (let i = player.length - 1; i > 0; i--) {
            if (player[i].role === "COACH") {
                return player[i].name;
            }
        }
        return "--------";
    }
    function ageConvert(data) {
        var nasc = data.split("T")[0].split("-");
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var age = year - nasc[0];
        if (month < nasc[1] || (month === nasc[1] && day < nasc[2])){
            age--;
        }
        return age;
    }
    return (
        <>
            <Table>
                <TableHeader>
                    <img src={Club.crestUrl} alt="No Img"></img>
                    <h1>{Club.name}</h1>
                </TableHeader>
                <TableHeader>
                    <h5>Treinador: {setCoach(player)}</h5>
                </TableHeader>
                <TableBody>
                    <Thead>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Nationality</th>
                        <th>Age</th>
                    </Thead>
                    <Tbody>
                        {player.map(data => (
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.position}</td>
                                <td>{data.nationality}</td>
                                <td>{ageConvert(data.dateOfBirth)}</td>
                            </tr>
                        ))}
                    </Tbody>
                </TableBody>
            </Table>

        </>

    )
}