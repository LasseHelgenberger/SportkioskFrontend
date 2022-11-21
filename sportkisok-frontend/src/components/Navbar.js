function Navbar(props) {
    function navStart() {
        props.nav("Start");
    }
    
    return (
        <div>
            <div onClick={navStart} className="navHome">⌂</div>
            <h1>ToDo Navbar</h1>
        </div>
    );
}

export default Navbar;