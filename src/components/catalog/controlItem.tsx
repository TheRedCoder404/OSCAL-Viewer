import CatalogAccordion from './accordion'

/** Helferklasse, um param durch tatsächlichen Wert zu ersetzen **/
function resolveProse(prose: string, params?: any[]): string {
    if (!params) return prose
    return prose.replace(/\{\{\s*insert:\s*param,\s*([^}\s]+)\s*}}/g, (_, id) => {
        const param = params.find((p: any) => p.id === id)
        return param?.values?.[0] ?? param?.label ?? id
    })
}

export default function ControlItem({ctrl}: { ctrl: any }) {
    const statement = ctrl.parts?.find((p: any) => p.name === 'statement')
    const guidance = ctrl.parts?.find((p: any) => p.name === 'guidance')

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
