
import { useEffect, useState } from "react";
import Ressort from "../services/ressort.service";
import Team from "../services/team.service";
import User from "../services/user.service";
import Keyboard from "./Keyboard";

function SelectUser(props) {

    const [ressorts, setRessorts] = useState();
    const [ressort, setRessort] = useState();
    const [teams, setTeams] = useState();
    const [team, setTeam] = useState();
    const [users, setUsers] = useState();
    const [user, setUser] = useState();
    const [newUser, setNewUser] = useState(false);
    const [newUsername, setNewUsername] = useState();
    
    useEffect(() => {
        loadRessorts();
    }, []);

    function loadRessorts() {
        Ressort.getAll().then(res => {
            setRessorts(res.data);
        }).catch(err => {
            console.error(err);
        });
    }

    function ressortChanged(event) {
        setRessort(event.target.value);
        loadTeams();
    }

    function loadTeams() {
        Team.getAll().then(res => {
            setTeams(res.data);
        }).catch(err => {
            console.error(err);
        });
    }

    function teamChanged(event) {
        setTeam(event.target.value);
        loadUsers();
    }

    function loadUsers() {
        User.getAll().then(res => {
            setUsers(res.data);
        }).catch(err => {
            console.error(err);
        });
    }

    function userChanged(event) {
        setUser(event.target.value);
    }

    function createNewUser() {
        User.create({
            "username": newUsername,
            "teamid": team
        });
    }

    return (
    <div>
        <div>
            <div>
                <select className="selectUserFormItem" value={ressort} onChange={ressortChanged}>
                    <option value="choose">Bitte wähle dein Ressort.</option>
                    {ressorts ? (ressorts.map((element, index) => {
                        return (
                                <option value={element.id}>{element.ressortname}</option>
                        );
                            })) : null}
                </select>
            </div>
        
            {ressort ? (
                <div>
                    <select className="selectUserFormItem" value={team} onChange={teamChanged}>
                        <option value="choose">Bitte wähle dein Team.</option>
                        {teams ? (teams.map((element, index) => {
                            if(element.ressortid == ressort) {
                                return (
                                        <option value={element.id}>{element.teamname}</option>
                                );
                            }
                        })) : null}
                    </select>
                </div>
            ) : null}

            {(team && !newUser) ? (
                <div>
                    <select className="selectUserFormItem" value={user} onChange={userChanged}>
                        <option value="choose">Bitte wähle deinen Namen aus.</option>
                        {users ? (users.map((element, index) => {
                            if(element.teamid == team) {
                                return (
                                        <option value={element.id}>{element.username}</option>
                                );
                            }
                        })) : null}
                    </select>
                    <div className="selectUserFormItem" onClick={() => {props.setUser(user)}}>
                        Mit dem gewählten Benutzer starten!
                    </div>
                    <div className="selectUserFormItem" onClick={() => { setNewUser(true);}}>
                        Neuen Benutzer anlegen.
                    </div>
                </div>
            ) : null}
            {newUser ? (
                <div>
                    <div className="selectUserFormItem">{newUsername? newUsername : "Bitte Namen eingeben..."}</div>
                    <Keyboard typeTo={setNewUsername} />
                    <div className="selectUserFormItem" onClick={createNewUser}>Speichern</div>
                </div>
            ) : null}
        </div>
    </div>);
}

export default SelectUser;