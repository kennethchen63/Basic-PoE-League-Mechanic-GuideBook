import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Topbar from './components/Topbar';
import Home from './Pages/Other/Home'
import Ambush from './Pages/Ambush/Ambush'
import Abyss from './Pages/Abyss/Abyss';
import Bestiary from './Pages/Bestiary/Bestiary';
import Betrayal from './Pages/Betrayal/Betrayal';
import Beyond from './Pages/Beyond/Beyond';
import Blight from './Pages/Blight/Blight';
import Breach from './Pages/Breach/Breach';
import Bloodlines from './Pages/Bloodlines/Bloodlines';
import Delirium from './Pages/Delirium/Delirium';
import Delve from './Pages/Delve/Delve';
import Essence from './Pages/Essence/Essence';
import Expedition from './Pages/Expedition/Expedition';
import Harbinger from './Pages/Harbinger/Harbinger';
import Harvest from './Pages/Harvest/Harvest';
import Heist from './Pages/Heist/Heist';
import Incursion from './Pages/Incursion/Incursion';
import Invasion from './Pages/Invasion/Invasion';
import Legion from './Pages/Legion/Legion';
import Metamorph from './Pages/Metamorph/Metamorph';
import Nemesis from './Pages/Nemesis/Nemesis';
import Ritual from './Pages/Ritual/Ritual';
import Synthesis from './Pages/Synthesis/Synthesis';
import Torment from './Pages/Torment/Torment';
import ErrorPage from './Pages/Other/ErrorPage';

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