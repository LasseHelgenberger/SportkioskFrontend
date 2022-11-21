import { useEffect, useState } from "react";
import Score from "../services/score.service";
import User from "../services/user.service";
import Team from "../services/team.service";
import Ressort from "../services/ressort.service";



function Rangliste(props) {

    const [loaddata, setloaddata] = useState(true);
    const [nxt, setNxt] = useState(false);
    const [scores, setScores] = useState();
    const [users, setUsers] = useState();
    const [teams, setTeams] = useState();
    const [ressorts, setRessorts] = useState();
    const [sortedby, setSortedby] = useState('score');
    
    useEffect(() => {
        loadScores();
    }, []);

    useEffect(() => {
        if(scores && loaddata) {
            setloaddata(false);
            loadUsers();
            loadTeams();
            loadRessorts();
        }
        if(scores && scores[0].username && !scores[0].teamname && teams) {
            matchTeams();
        }
        if(scores && scores[0].teamname && ![scores[0].ressortname] && ressorts) {
            matchRessorts();
        }

        //console.log("SCORES:");
        //console.log(scores);
    }, [scores, nxt]);

    useEffect(() => {
        matchUsers();
    }, [users]);

    useEffect(() => {
        matchTeams();
    }, [teams]);

    useEffect(() => {
        matchRessorts();
    }, [ressorts]);

    function loadScores() {
        Score.getAll().then(res => {
            setScores(res.data);
        }).catch(err => {
            console.error(err);
        });
    }

    function loadUsers() {
        User.getAll().then(res => {
            setUsers(res.data);
        }).catch(err => {
            console.error(err);
        });
    }

    function matchUsers() {
        if(scores && users) {
            var s = scores;
            setScores(null);
            s.forEach(element => {
                var u = findUser(element.userid);
                element.username = u.username;
                element.teamid = u.teamid;
            });
            setScores(s);
            setNxt(!nxt);
        }
    }

    function findUser(id) {
        var res = null;
        users.forEach(element => {
            if(element.id == id) {
                res = element;
                return;
            }
        });
        return res;
    }

    function loadTeams() {
        Team.getAll().then(res => {
            setTeams(res.data);
        }).catch(err => {
            console.error(err);
        });
    }

    function matchTeams() {
        if(scores && scores[0].username && !scores[0].teamname) {
            var s = scores;
            setScores(null);
            s.forEach(element => {
                var t = findTeam(element.teamid);
                element.teamname = t.teamname;
                element.ressortid = t.ressortid;
            });
            setScores(s);
            setNxt(!nxt);
        }
    }

    function findTeam(id) {
        var res = null;
        teams.forEach(element => {
            if(element.id == id) {
                res = element;
                return;
            }
        });
        return res;
    }

    function loadRessorts() {
        Ressort.getAll().then(res => {
            setRessorts(res.data);
        }).catch(err => {
            console.error(err);
        });
    }

    function matchRessorts() {
        if(scores && scores[0].teamname && ressorts) {
            var s = scores;
            setScores([null]);
            s.forEach(element => {
                var r = findRessort(element.ressortid);
                element.ressortname = r.ressortname;
            });
            setScores(s);
            setNxt(!nxt);
        }
    }

    function findRessort(id) {
        var res = null;
        ressorts.forEach(element => {
            if(element.id == id) {
                res = element;
                return;
            }
        });
        return res;
    }

    function sortBy(x) {
        console.log(x);
        var s = scores;
        console.log(s)
        switch(x) {
            case "name":
                s.sort((a, b) => {
                    if( a.username < b.username ) {
                        return -1;
                    }
                    if( a.username > b.username ) {
                        return 1;
                    }
                    return 0;
                })
                break;
            case "team":
                s.sort((a, b) => {
                    if( a.teamname < b.teamname ) {
                        return -1;
                    }
                    if( a.teamname > b.teamname ) {
                        return 1;
                    }
                    return 0;
                })
                break;
            case "ressort":
                s.sort((a, b) => {
                    if( a.ressortname < b.ressortname ) {
                        return -1;
                    }
                    if( a.ressortname > b.ressortname ) {
                        return 1;
                    }
                    return 0;
                })
                break;
            default:
                s.sort((a, b) => {
                    if( a.score < b.score ) {
                        return 1;
                    }
                    if( a.score > b.score ) {
                        return -1;
                    }
                    return 0;
                })
            break;
            
        }
        setScores(s);
        setNxt(!nxt);
        setSortedby(x);
    }

    return (
    <div>
        <h1>Rangliste</h1>
        <table>
            <tbody>
                <tr>
                    <th onClick={() => {sortBy("name")}}>Name {sortedby == 'name' ? "▼" : null}</th>
                    <th onClick={() => {sortBy("team")}}>Team {sortedby == 'team' ? "▼" : null}</th>
                    <th onClick={() => {sortBy("ressort")}}>Ressort {sortedby == 'ressort' ? "▼" : null}</th>
                    <th onClick={() => {sortBy("score")}}>Punkte {sortedby == 'score' ? "▼" : null}</th>
                </tr> 
                {!scores ? null : (scores.map((element, index) => {
                    return (
                        <tr key={'scoreboardRow' + index}>
                            <td>{element.username ? element.username : "Loading..."}</td>
                            <td>{element.teamname ? element.teamname : "Loading..."}</td>
                            <td>{element.ressortname ? element.ressortname : "Loading..."}</td>
                            <td>{element.score}</td>
                        </tr>
                    );
                }))}
            </tbody>
        </table>
    </div>);
}

export default Rangliste;