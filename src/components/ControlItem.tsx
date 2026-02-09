import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import type {Control, Param} from '../types'

/** Helferklasse, um param durch tatsächlichen Wert zu ersetzen **/
function resolveProse(prose: string, params?: Param[]): string {
    if (!params) return prose
    return prose.replace(/\{\{\s*insert:\s*param,\s*([^}\s]+)\s*\}\}/g, (_, id) => {
        const param = params.find((p) => p.id === id)
        return param?.values?.[0] ?? param?.label ?? id
    })
}

export default function ControlItem({ctrl}: { ctrl: Control }) {
    const statement = ctrl.parts?.find((p) => p.name === 'statement')
    const guidance = ctrl.parts?.find((p) => p.name === 'guidance')

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography component="span" sx={{opacity: 0.5, fontSize: '0.85em', mr: 1}}>{ctrl.id}</Typography>
                <Typography component="span">{ctrl.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
    )
}
