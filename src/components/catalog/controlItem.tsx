import CatalogAccordion from './accordion'

interface OscalParam {
    id: string
    label?: string
    values?: string[]
}

interface OscalPart {
    name: string
    prose?: string
}

interface OscalControl {
    id: string
    title: string
    params?: OscalParam[]
    parts?: OscalPart[]
}

function resolveProse(prose: string, params?: OscalParam[]): string {
    if (!params) return prose
    return prose.replace(/\{\{\s*insert:\s*param,\s*([^}\s]+)\s*}}/g, (_, id) => {
        const param = params.find((p) => p.id === id)
        return param?.values?.[0] ?? param?.label ?? id
    })
}

export default function ControlItem({ctrl}: { ctrl: OscalControl }) {
    const statement = ctrl.parts?.find((p) => p.name === 'statement')
    const guidance = ctrl.parts?.find((p) => p.name === 'guidance')

    return (
        <div className="control-item">
            <CatalogAccordion id={ctrl.id} title={ctrl.title}>
                <div className="ctrl-body" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    {statement && (
                        <div className="statement">
                            <p>{resolveProse(statement.prose ?? '', ctrl.params)}</p>
                        </div>
                    )}

                    {guidance && (
                        <div className="guidance">
                            <strong>Erläuterung:</strong>
                            <p style={{textAlign: 'justify'}}>{resolveProse(guidance.prose ?? '', ctrl.params)}</p>
                        </div>
                    )}
                </div>
            </CatalogAccordion>
        </div>
    )
}
