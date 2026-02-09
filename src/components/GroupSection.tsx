import Expandable from './Expandable'
import SubGroup from './SubGroup'
import type { Group } from '../types'

export default function GroupSection({ group }: { group: Group }) {
  return (
    <Expandable className="group" label={<><span className="group-id">{group.id}</span>{group.title}</>}>
      <div className="subgroups">
        {group.groups?.map((sub) => <SubGroup key={sub.id} sub={sub} />)}
      </div>
    </Expandable>
  )
}