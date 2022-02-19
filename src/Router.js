import App from './App.js';
import Profile from './Profile.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Minigame from './MiniGame.js';
import Work from './Work.js';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/minigame" element={<Minigame/>}/>
                <Route path="/Work" element={<Work/>}/>
                </Routes>      
        </BrowserRouter>
    )
}

export default Router;