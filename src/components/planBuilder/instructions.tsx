import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface InstructionsProps {
    selectedCount: number
    maxCount: number
}

export default function Instructions({selectedCount, maxCount}: InstructionsProps) {
    return (
        <div className="instructions">
            <Paper variant="outlined" sx={{p: 2.5, mb: 3}}>
                <Typography variant="body2" sx={{opacity: 0.8, lineHeight: 1.6}}>
                    Wähle bis zu {maxCount} Bausteine aus, um im nächsten Schritt einen Prüfplan zu erstellen.
                </Typography>
                <Typography variant="body2" sx={{mt: 1, fontWeight: 'bold'}}>
                    Bausteine ausgewählt: {selectedCount} / {maxCount}
                </Typography>
                <Button
                    variant="contained"
                    disabled={selectedCount === 0}
                    sx={{mt: 2}}
                >
                    Prüfplan erstellen
                </Button>
            </Paper>
        </div>
    )
}