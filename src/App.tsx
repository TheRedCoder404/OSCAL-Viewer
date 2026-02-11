import catalogData from '../Stand-der-Technik-Bibliothek-main/Anwenderkataloge/Grundschutz++/Grundschutz++-catalog.json'
import ProfileInfo from './components/profile/profileInfo'
import BausteinAuswahl from './components/planBuilder/bausteinAuswahl'
import './App.css'

function App() {
    return (
        <div className="app">
            <h1>BSI Grundschutz Katalog</h1>
            <ProfileInfo metadata={catalogData.catalog.metadata}/>
            <BausteinAuswahl groups={catalogData.catalog.groups}/>
        </div>
    )
}

export default App