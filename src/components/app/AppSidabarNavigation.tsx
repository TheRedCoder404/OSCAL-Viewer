import React from 'react';
import { Icon, List, ListItemButton, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const links = [
    { title: 'Overview', path: '/overview' },
    { title: 'Catalog', path: '/catalog' },
    { title: 'Catalog Piecer', path: '/' },
    { title: 'Profile', path: '/' },
];

const AppSidabarNavigation = ():React.ReactNode => {
    const { pathname } = useLocation();
    
    return (
        <List component="nav" aria-label="sidebar navigation">
            {links.map(link => {
                const { path } = link;

                return (
                    <ListItemButton
                        key={path}
                        selected={pathname.startsWith(path)}
                        component={Link}
                        to={path}
                        divider={true}
                    >
                        <ListItemText primary={link.title} />
                        <Icon color="action">
                            <KeyboardArrowRightIcon/>
                        </Icon>
                    </ListItemButton>
                );
            })}
        </List>
    );
};

export default AppSidabarNavigation;
