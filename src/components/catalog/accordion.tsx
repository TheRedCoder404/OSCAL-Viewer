import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import type {ReactNode} from 'react'

interface CatalogAccordionProps {
    id?: string
    title: string
    label?: string
    prefix?: ReactNode
    children: ReactNode
}

export default function CatalogAccordion({id, title, label, prefix, children}: CatalogAccordionProps) {
    return (
        <div className="catalog-accordion">
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    {prefix}
                    {label && <Chip label={label} size="small" sx={{mr: 1}}/>}
                    {id &&
                        <Typography component="span" sx={{opacity: 0.5, fontSize: '0.85em', mr: 1}}>{id}</Typography>}
                    <Typography component="span">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
        </div>
    )
}
