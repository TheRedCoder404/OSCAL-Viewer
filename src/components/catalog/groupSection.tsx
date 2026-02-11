import CatalogAccordion from './accordion'
import ControlItem from './controlItem'
import BausteinCheckbox from '../planBuilder/checkbox'

interface GroupSectionProps {
    group: any
    selected?: boolean
    selectionDisabled?: boolean
    onToggle?: (id: string, checked: boolean) => void
}

export default function GroupSection({group, selected = false, selectionDisabled = false, onToggle}: GroupSectionProps) {
    const checkbox = (
        <BausteinCheckbox
            checked={selected}
            disabled={selectionDisabled}
            onChange={(checked) => onToggle?.(group.id, checked)}
        />
    )

    return (
        <div className="group">
            <CatalogAccordion id={group.id} title={group.title} prefix={checkbox}>
                {group.groups?.map((sub: any) => {
                    const label = sub.props?.find((p: any) => p.name === 'label')?.value
                    return (
                        <CatalogAccordion key={sub.id} title={sub.title} label={label}>
                            {sub.controls?.map((ctrl: any) => <ControlItem key={ctrl.id} ctrl={ctrl}/>)}
                        </CatalogAccordion>
                    )
                })}
            </CatalogAccordion>
        </div>
    )
}
