import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ControlItem from './ControlItem'
import type {Group} from '../types'

export default function GroupSection({group}: { group: Group }) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography component="span" sx={{opacity: 0.5, fontSize: '0.85em', mr: 1}}>{group.id}</Typography>
                <Typography component="span" fontWeight={600}>{group.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {group.groups?.map((sub) => {
                    const label = sub.props?.find((p) => p.name === 'label')?.value
                    return (
                        <Accordion key={sub.id}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                {label && <Chip label={label} size="small" sx={{mr: 1}}/>}
                                <Typography component="span">{sub.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {sub.controls?.map((ctrl) => <ControlItem key={ctrl.id} ctrl={ctrl}/>)}
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </AccordionDetails>
        </Accordion>
    )
}
