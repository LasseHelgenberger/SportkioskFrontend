import { useState } from "react";

function Keyboard(props) {

    const [text, setText] = useState("");
    
    function type(letter) {
        if(letter == "DELETE") {
            if(text.length > 0) {
                setText(text.substring(0, text.length-1));
            }
        } else {
            setText(text + letter);
        }
    }

    props.typeTo(text);

    return (
    <div className="keyboard">
        <div className="keyboardcontainer">
        <div className="keyboardkey" onClick={() => { type("Q")}}>Q</div>
        <div className="keyboardkey" onClick={() => { type("W")}}>W</div>
        <div className="keyboardkey" onClick={() => { type("E")}}>E</div>
        <div className="keyboardkey" onClick={() => { type("R")}}>R</div>
        <div className="keyboardkey" onClick={() => { type("T")}}>T</div>
        <div className="keyboardkey" onClick={() => { type("Z")}}>Z</div>
        <div className="keyboardkey" onClick={() => { type("U")}}>U</div>
        <div className="keyboardkey" onClick={() => { type("I")}}>I</div>
        <div className="keyboardkey" onClick={() => { type("O")}}>O</div>
        <div className="keyboardkey" onClick={() => { type("P")}}>P</div>
        <div className="keyboardkey" onClick={() => { type("Ü")}}>Ü</div>

        <div className="keyboardkey" onClick={() => { type("A")}}>A</div>
        <div className="keyboardkey" onClick={() => { type("S")}}>S</div>
        <div className="keyboardkey" onClick={() => { type("D")}}>D</div>
        <div className="keyboardkey" onClick={() => { type("F")}}>F</div>
        <div className="keyboardkey" onClick={() => { type("G")}}>G</div>
        <div className="keyboardkey" onClick={() => { type("H")}}>H</div>
        <div className="keyboardkey" onClick={() => { type("J")}}>J</div>
        <div className="keyboardkey" onClick={() => { type("K")}}>K</div>
        <div className="keyboardkey" onClick={() => { type("L")}}>L</div>
        <div className="keyboardkey" onClick={() => { type("Ö")}}>Ö</div>
        <div className="keyboardkey" onClick={() => { type("Ä")}}>Ä</div>

        <div className="keyboardkey" onClick={() => { type("Y")}}>Y</div>
        <div className="keyboardkey" onClick={() => { type("X")}}>X</div>
        <div className="keyboardkey" onClick={() => { type("C")}}>C</div>
        <div className="keyboardkey" onClick={() => { type("V")}}>V</div>
        <div className="keyboardkey" onClick={() => { type("B")}}>B</div>
        <div className="keyboardkey" onClick={() => { type("N")}}>N</div>
        <div className="keyboardkey" onClick={() => { type("M")}}>M</div>
        <div className="keyboardkey" onClick={() => { type(".")}}>.</div>
        <div className="keyboardkey" onClick={() => { type("-")}}>-</div>
        <div className="keyboardkey" onClick={() => { type("@")}}>@</div>
        <div className="keyboardkey" onClick={() => { type("ß")}}>ß</div>
        <div className="keyboardkey spacekey" onClick={() => { type(" ")}}>Leertaste</div>
        <div className="keyboardkey deletekey" onClick={() => { type("DELETE")}}>Löschen</div>
        </div>
    </div>);
}

export default Keyboard;