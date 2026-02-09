import Expandable from './Expandable'
import ControlItem from './ControlItem'
import type { SubGroup as SubGroupType } from '../types'

export default function SubGroup({ sub }: { sub: SubGroupType }) {
  const label = sub.props?.find((p) => p.name === 'label')?.value

  return (
    <Expandable className="subgroup" label={<>{label && <span className="sub-label">{label}</span>}{sub.title}</>}>
      <div className="controls">
        {sub.controls?.map((ctrl) => <ControlItem key={ctrl.id} ctrl={ctrl} />)}
      </div>
    </Expandable>
  )
}