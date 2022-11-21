import { useState } from "react";
import SelectUser from "./SelectUser";

function Sport(props) {
    
    const [user, setUser] = useState(null);

    return (
    <div>
        {!user ? <SelectUser setUser={setUser} /> : (
            <div>USER GESETZT !</div>
        )}
    </div>);
}

export default Sport;