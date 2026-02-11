import './App.css';
import * as React from 'react';
import MainApp from './routing/app/MainApp';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import { useMemo, useState } from 'react';
import { UserPreferencesContext, type UserPreferenceType } from './contexts/UserPreferencesContext.ts';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: ({ theme }) => ({
                    border: 'solid 1px',
                    borderColor: theme.palette.grey['900'],
                    boxShadow: theme.shadows[1],
                }),
            },
        },
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: ({ theme }) => ({
                    border: 'solid 1px',
                    borderColor: theme.palette.grey['300'],
                    boxShadow: theme.shadows[1],
                }),
            },
        },
    },
});


const defaultPreferences: UserPreferenceType = {
    useDarkTheme: true,
};

const storageName = 'oscal-viewer-user-pref';
const setPreferences = (preference: UserPreferenceType): void => {
    localStorage.setItem(storageName, JSON.stringify(preference));
};

export const getStoredPreferences = (): UserPreferenceType => {
    const preference = localStorage.getItem(storageName);
    const overridePreferences = preference ? JSON.parse(preference) as UserPreferenceType : {};
    return { ...defaultPreferences, ...overridePreferences };
};

const App = (): React.ReactNode => {
    const [userPrefs, setUserPrefs] = useState<UserPreferenceType>(getStoredPreferences());
    const theme = useMemo(() => (userPrefs.useDarkTheme ? darkTheme : lightTheme), [userPrefs.useDarkTheme]);

    const setUserPreferences = (userPreferences: UserPreferenceType): void => {
        setPreferences(userPreferences);
        setUserPrefs(userPreferences);
    };
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <UserPreferencesContext.Provider value={{ userPrefs, setUserPrefs: setUserPreferences }}>
                    <CssBaseline/>
                    <MainApp/>
                </UserPreferencesContext.Provider>
            </ThemeProvider>
        </>
    );
};

export default App;
