import catalogData from '../Stand-der-Technik-Bibliothek-main/Anwenderkataloge/Grundschutz++/Grundschutz++-catalog.json'
import GroupSection from './components/Catalog/GroupSection'
import './App.css'

function App() {
    return (
        <div className="app">
            <h1>BSI Grundschutz Katalog</h1>
            <div className="groups">
                {catalogData.catalog.groups.map((group) => (
                    <GroupSection key={group.id} group={group}/>
                ))}
            </div>
        </div>
    )
}

export default App