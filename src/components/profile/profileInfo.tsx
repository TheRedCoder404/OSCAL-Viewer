import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface Metadata {
    version: string
    'oscal-version': string
    'last-modified': string
    parties?: { name: string; 'email-addresses'?: string[] }[]
    links?: { text?: string }[]
    remarks?: string
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('de-DE', {
        year: 'numeric', month: 'long', day: 'numeric',
    })
}

function InfoRow({label, value}: { label: string; value: string }) {
    return (
        <Box sx={{display: 'flex', gap: 1, py: 0.3}}>
            <Typography variant="body2" sx={{fontWeight: 600, minWidth: 160, flexShrink: 0}}>
                {label}
            </Typography>
            <Typography variant="body2">{value}</Typography>
        </Box>
    )
}

const textFormat = {mt: 1.5, opacity: 0.8, lineHeight: 1.6}

export default function ProfileInfo({metadata}: { metadata: Metadata }) {
    const party = metadata.parties?.[0]

    return (
        <Paper variant="outlined" sx={{p: 2.5, mb: 3}}>
            <InfoRow label="Dokumentversion" value={formatDate(metadata.version)}/>
            <InfoRow label="OSCAL-Version" value={metadata['oscal-version']}/>
            <InfoRow label="Zuletzt geändert" value={formatDate(metadata['last-modified'])}/>
            <InfoRow label="Herausgeber" value={party.name}/>
            <InfoRow label="Kontakt" value={party['email-addresses'][0]}/>
            <InfoRow label="Referenz" value={metadata.links[0].text}/>

            <Typography variant="body2" sx={textFormat}>{metadata.remarks}</Typography>
        </Paper>
    )
}