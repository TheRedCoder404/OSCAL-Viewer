import catalogData from '../Stand-der-Technik-Bibliothek-main/Anwenderkataloge/Grundschutz++/Grundschutz++-catalog.json'
import ProfileInfo from './components/profile/profileInfo'
import GroupSection from './components/catalog/groupSection'
import './App.css'

function App() {
    return (
        <div className="app">
            <h1>BSI Grundschutz Katalog</h1>
            <ProfileInfo metadata={catalogData.catalog.metadata}/>
            <div className="groups">
                {catalogData.catalog.groups.map((group) => (
                    <GroupSection key={group.id} group={group}/>
                ))}
            </div>
        </div>
    )
}

export default App