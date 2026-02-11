import {useState} from 'react'
import Instructions from '../planBuilder/instructions'
import GroupSection from '../catalog/groupSection'

const MAX_BAUSTEINE = 6

export default function BausteinAuswahl({groups}: { groups: any[] }) {
    const [selected, setSelected] = useState<string[]>([])

    const handleToggle = (id: string, checked: boolean) => {
        setSelected(prev =>
            checked ? [...prev, id] : prev.filter(b => b !== id)
        )
    }

    return (
        <div className="baustein-auswahl">
            <Instructions selectedCount={selected.length} maxCount={MAX_BAUSTEINE}/>
            <div className="groups">
                {groups.map((group) => (
                    <GroupSection
                        key={group.id}
                        group={group}
                        selected={selected.includes(group.id)}
                        selectionDisabled={selected.length >= MAX_BAUSTEINE}
                        onToggle={handleToggle}
                    />
                ))}
            </div>
        </div>
    )
}