import { styled, type Theme as DefaultTheme } from '@mui/material/styles';
import type { StyledComponent } from '@emotion/styled';
import React from 'react';
import { createRow } from 'components/flexbox/Row.tsx';
import { Box } from '@mui/material';


export const createStyledComponent = <Theme = DefaultTheme, Props extends Record<string, unknown> = any>(
    component: React.ComponentType<any>,
    _displayName: string,
    styles: Record<string, unknown> | ((props: { theme: Theme } & Props) => Record<string, unknown>)): StyledComponent<any> => {
    return styled(component)(styles);
};

export const ToolbarRow = createStyledComponent(
    createRow({ alignItems: 'center', justifyContent: 'space-between' }),
    'ToolbarRow',
    ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        position: 'fixed',
        left: 'var(--appSideBarWidth)',
        width: 'calc(100% - var(--appSideBarWidth))',
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        borderBottom: `solid 1px ${theme.palette.divider}`,
        marginBottom: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        top: '64px',
        zIndex: 1000,
    }),
);


export const ToolbarItemBox = createStyledComponent(Box, 'ToolbarItemBox', ({ theme }) => ({
    marginRight: theme.spacing(2),
    display: 'flex',
}));