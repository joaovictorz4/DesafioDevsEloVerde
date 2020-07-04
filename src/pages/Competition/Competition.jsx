import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Table, TableBody, Tbody, Thead, TableHeader } from '../../components/js/Table'

export default function Competitions() {
    const [competitions, setCompetitions] = useState([])

    useEffect(() => {
        handlerCompetitions();
    }, [])

    const handlerCompetitions = async () => {
        axios.get("http://api.football-data.org/v2/competitions/", {
            headers: { 'X-Auth-Token': 'c710e33b71fe486c949abef77404ed69' },
        }).then(res => {
            setCompetitions(res.data.competitions)
        }
        )
    }

    return (
        <Table>
            <TableHeader>
                <h1>Leagues</h1>
            </TableHeader>
            <TableHeader>
                <p>Obs: Algumas ligas não possuem clubes</p>
            </TableHeader>
            <TableBody>
                <Thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>localização</th>
                </Thead>
                <Tbody>
                    {competitions.map(data => (
                        <tr>
                            <td>{data.id}</td>
                            <td key={data.id}>
                                <Link className="link" to={`/league/${data.id}`}>
                                    <img className="img-32" src={data.emblemUrl} alt="" />
                                    {data.name}
                                </Link>
                            </td>
                            <td>{data.area.name}</td>
                        </tr>
                    ))}
                </Tbody>
            </TableBody>
        </Table>
    )
}