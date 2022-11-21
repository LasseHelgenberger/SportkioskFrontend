import Keyboard from "./Keyboard";
import User from "../services/user.service";
import Sport from "../services/sport.service";
import { useEffect, useState } from "react";

function Startpage(props) {

    const [text, setText] = useState("");
    const [sports, setSports] = useState(null);

    useEffect(() => {
        loadSports();
    }, []);

    function loadSports() {
        Sport.getAll().then(res => {
            setSports(res.data);
        }).catch(err => {
            console.error(err);
        });
    }

    return (
    <div>
        <div className="startpagegrid">

            { sports == null ? (console.log()) : (Array.isArray(sports) ? (
                sports.map((sport, index) => {
                    return(
                        <div className="startpagegriditem" key={'griditem' + index} onClick={() => {props.nav(sport.id)}}>{sport.sportname}</div>
                    )
                })
            ) : (console.log("Error Startpage.js")))}

            <div className="startpagegriditem" onClick={() => {props.nav("Rangliste")}}>Rangliste</div>
        </div>
    </div>);
}

export default Startpage;