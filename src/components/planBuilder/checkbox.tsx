import Checkbox from '@mui/material/Checkbox'

interface BausteinCheckboxProps {
    checked: boolean
    disabled: boolean
    onChange: (checked: boolean) => void
}

export default function BausteinCheckbox({checked, disabled, onChange}: BausteinCheckboxProps) {
    return (
        <Checkbox
            checked={checked}
            disabled={disabled && !checked}
            onChange={(e) => {
                e.stopPropagation()
                onChange(e.target.checked)
            }}
            onClick={(e) => e.stopPropagation()}
            size="small"
            sx={{p: 0, mr: 1}}
        />
    )
}