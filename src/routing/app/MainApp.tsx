import * as React from 'react';
import { Box, styled, useTheme } from '@mui/material';
import AppRouter from 'AppRouter';
import { Outlet } from 'react-router-dom';
import AppToolbar from 'components/AppToolbar.tsx';

const Root = styled('div')(({ theme }) => ({
    '& .notificationStyles': {
        marginTop: theme.spacing(6.25),
    },
}));

const MainApp = (): React.ReactNode => {
    const theme = useTheme();
    
    return (
        <Root>
            <Box
                sx={{
                    marginTop: theme.spacing(8),
                    padding: theme.spacing(1.875),
                }}
            >
                <AppRouter>
                    <AppToolbar/>
                    <Outlet/>
                </AppRouter>
            </Box>
        </Root>
    );
};

export default MainApp;