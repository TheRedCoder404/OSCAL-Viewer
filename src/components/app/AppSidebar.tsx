import React from 'react';
import { Drawer, Stack, Toolbar } from '@mui/material';
import clsx from 'clsx';
import AppSidabarNavigation from 'components/app/AppSidabarNavigation.tsx';
import Logo from 'assets/oscal-viewer_topright_logo_outlined.svg';

const AppSidebar = ():React.ReactNode => {
    return (
        <Drawer
            className={clsx('AppSidebar')}
            open={true}
            variant="permanent"
            anchor="left"
            slotProps={{ paper: { sx: { width: 'var(--appSideBarWidth)' } } }}

        >
            <Toolbar
                variant="dense"
                disableGutters={true}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 'var(--app-navigation-width)',
                    paddingLeft: 1.5,
                }}
            >
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        alignItems: 'baseline',
                        justifyContent: 'flex-start',
                    }}
                >
                    <img 
                        src={Logo} 
                        alt="logo"
                        width="150.69814mm"
                        height="150.69814mm" 
                    />
                </Stack>
            </Toolbar>
            <AppSidabarNavigation/>
        </Drawer>
    );
};

export default AppSidebar;
