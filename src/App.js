import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Post/Rowpost";
import {original,Action, trending,comedy,Document } from "./url";
  
function App() {
  return (
  
   <div>
    <Navbar />
    <Banner />
    <Rowpost url={original} title='Netflix Originals' />
    <Rowpost url={Action} title='Action' isSmall/>
    <Rowpost url={trending} title='Trending' isSmall/>
    <Rowpost url={comedy} title='Comedy' isSmall/>
    <Rowpost url={Document} title='Documentaries' isSmall/>
   </div>
  );
}

export default App;
