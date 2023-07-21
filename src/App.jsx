// Import data

// Import components
import './App.css';
import SearchBar from './SeachBar';
import Directory from './Directory';
import SideBar from './SideBar';
import Gallary from './Gallery';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        {/* Your content will go here! */}
        <div>
        <SideBar/>
        </div>
        <div>
        <SearchBar/>
        <Directory/>
        <Gallary/>
        </div>
      </div>
    </div>
  );
}

export default App;
