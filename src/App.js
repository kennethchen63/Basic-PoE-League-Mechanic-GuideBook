import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Topbar from './components/Topbar';
import Home from './Pages/Home'
import Ambush from './Pages/Ambush'
import Abyss from './Pages/Abyss';
import Bestiary from './Pages/Bestiary';
import Betrayal from './Pages/Betrayal';
import Beyond from './Pages/Beyond';
import Blight from './Pages/Blight';
import Breach from './Pages/Breach';
import Bloodlines from './Pages/Bloodlines';
import Delirium from './Pages/Delirium';
import Delve from './Pages/Delve';
import Essence from './Pages/Essence';
import Expedition from './Pages/Expedition';
import Harbinger from './Pages/Harbinger';
import Harvest from './Pages/Harvest';
import Heist from './Pages/Heist';
import Incursion from './Pages/Incursion';
import Invasion from './Pages/Invasion';
import Legion from './Pages/Legion';
import Metamorph from './Pages/Metamorph';
import Nemesis from './Pages/Nemesis';
import Ritual from './Pages/Ritual';
import Synthesis from './Pages/Synthesis';
import Torment from './Pages/Torment';
import ErrorPage from './Pages/ErrorPage';

const App = () => {

    return (
        <BrowserRouter>
            <Topbar/>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home/> }/>
                    <Route exact path="/Abyss" element={<Abyss/> }/>
                    <Route exact path="/Ambush" element={<Ambush/> }/>
                    <Route exact path="/Bestiary" element={<Bestiary/> }/>
                    <Route exact path="/Betrayal" element={<Betrayal/> }/>
                    <Route exact path="/Beyond" element={<Beyond/> }/>
                    <Route exact path="/Blight" element={<Blight/> }/>
                    <Route exact path="/Bloodlines" element={<Bloodlines/> }/>
                    <Route exact path="/Breach" element={<Breach/> }/>
                    <Route exact path="/Delirium" element={<Delirium/> }/>
                    <Route exact path="/Delve" element={<Delve/> }/>
                    <Route exact path="/Essence" element={<Essence/> }/>
                    <Route exact path="/Expedition" element={<Expedition/> }/>
                    <Route exact path="/Harbinger" element={<Harbinger/> }/>
                    <Route exact path="/Harvest" element={<Harvest/> }/>
                    <Route exact path="/Heist" element={<Heist/> }/>
                    <Route exact path="/Incursion" element={<Incursion/> }/>
                    <Route exact path="/Invasion" element={<Invasion/> }/>
                    <Route exact path="/Legion" element={<Legion/> }/>
                    <Route exact path="/Metamorph" element={<Metamorph/> }/>
                    <Route exact path="/Nemesis" element={<Nemesis/> }/>
                    <Route exact path="/Ritual" element={<Ritual/> }/>
                    <Route exact path="/Synthesis" element={<Synthesis/> }/>
                    <Route exact path="/Torment" element={<Torment/> }/>
                    <Route path='*' element={<ErrorPage/>}/>
                </Routes>
            </div>      
        </BrowserRouter>
    )
}

export default App;