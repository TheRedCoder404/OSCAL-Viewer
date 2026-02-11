import CatalogAccordion from './accordion'
import ControlItem from './controlItem'
import BausteinCheckbox from '../planBuilder/checkbox'

interface GroupSectionProps {
    group: any
    selected?: boolean
    selectionDisabled?: boolean
}

export default function GroupSection({group, selected = false, selectionDisabled = false}: GroupSectionProps) {
    const checkbox = (
        <BausteinCheckbox
            checked={selected}
            disabled={selectionDisabled}
            onChange={() => {
            }}
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
