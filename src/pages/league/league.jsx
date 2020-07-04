import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Table, TableBody, Tbody, Thead, TableHeader } from '../../components/js/Table'

export default function Competitions({ match }) {
    const [team, setTeam] = useState([])
    const [competition, setCompetition] = useState([])

    useEffect(() => {
        handlerTeams();
    }, [])

    const handlerTeams = async () => {
        axios.get(`http://api.football-data.org/v2/competitions/${match.params.id}/teams`, {
            headers: { 'X-Auth-Token': 'c710e33b71fe486c949abef77404ed69' },
        }).then(res => {
            setTeam(res.data.teams)
            setCompetition(res.data.competition)
        }
        )
    }

    return (
        <>
             <Table>
                <TableHeader>
                    <h1>{competition.name}</h1>
                </TableHeader>
                <TableBody>
                    <Thead>
                        <th>#</th>
                        <th>Name</th>
                    </Thead>
                    <Tbody>
                        {team.map(data => (
                            <tr>
                                <td>{data.id}</td>
                                <td>
                                    <Link className="link" to={`/league/${match.params.id}/equipe/${data.id}`}>
                                        <img className="img-32" src={data.crestUrl} alt=""></img>{data.name}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </Tbody>
                </TableBody>
            </Table>
        </>
    )
}