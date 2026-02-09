import Expandable from './Expandable'
import type { Control, Param } from '../types'

/** Ersetzt OSCAL-Platzhalter param durch den tatsächlichen Wert **/
function resolveProse(prose: string, params?: Param[]): string {
  if (!params) return prose
  return prose.replace(/\{\{\s*insert:\s*param,\s*([^}\s]+)\s*\}\}/g, (_, id) => {
    const param = params.find((p) => p.id === id)
    return param?.values?.[0] ?? param?.label ?? id
  })
}

export default function ControlItem({ ctrl }: { ctrl: Control }) {
  const statement = ctrl.parts?.find((p) => p.name === 'statement')
  const guidance = ctrl.parts?.find((p) => p.name === 'guidance')

  return (
    <Expandable className="control" label={<><span className="ctrl-id">{ctrl.id}</span>{ctrl.title}</>}>
      <div className="ctrl-body">
        {statement && (
          <div className="part">
            <p>{resolveProse(statement.prose ?? '', ctrl.params)}</p>
          </div>
        )}
        {guidance && (
          <div className="part guidance">
            <strong>Erläuterung:</strong>
            <p>{resolveProse(guidance.prose ?? '', ctrl.params)}</p>
          </div>
        )}
      </div>
    </Expandable>
  )
}