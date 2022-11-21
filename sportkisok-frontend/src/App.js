import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Startpage from './components/Startpage';
import Sport from './components/Sport';
import Rangliste from './components/Rangliste';
import { useState } from 'react';


function App() {
  const [pageViewed, setPageViewed] = useState("Start");
  const [username, setUsername] = useState(null);
  const [userid, setUserid] = useState(null);

  function displayPage() {
    switch(pageViewed) {
      case "Start": return <Startpage nav={setPageViewed}/>;
      case "Rangliste": return <Rangliste nav={setPageViewed} />;
      default: return <Sport nav={setPageViewed} sportid={pageViewed} />;
    }
  }

  return (
    <div className="App">
      <Navbar nav={setPageViewed} />
      

      { displayPage() }

    </div>
  );
}

export default App;
