import CatalogAccordion from './accordion'
import ControlItem from './controlItem'

export default function GroupSection({group}: { group: any }) {
    return (
        <div className="group">
            <CatalogAccordion id={group.id} title={group.title} bold>
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
