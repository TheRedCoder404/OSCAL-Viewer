import { AppBar, Checkbox, FormControlLabel, Stack, Toolbar } from '@mui/material';
import React from 'react';
import { useUserPreference } from 'hooks/preferences.ts';

const AppToolbar: React.FC = () => {
    const [useDarkTheme, setDarkTheme] = useUserPreference('useDarkTheme');
    const darkmodeToggle = false;
    
    return (
        <AppBar
            color={'inherit'}
            position="fixed"
            sx={{
                width: 'calc(100% - 200px)',
                flexDirection: 'row',
                justifyContent: 'flex-end',
            }}
        >
            <Toolbar>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    {darkmodeToggle && <FormControlLabel
                        control={
                            <Checkbox
                                checked={useDarkTheme}
                                onChange={(_event, checked) => {
                                    setDarkTheme(checked);
                                }}
                                color={'secondary'}
                            />
                        }
                        label={'Dark Mode'}
                    />}
                    <h1>OSCAL-Viewer</h1>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;
