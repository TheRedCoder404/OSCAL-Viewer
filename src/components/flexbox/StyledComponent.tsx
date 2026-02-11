import React from 'react';
import { styled, type Theme as DefaultTheme } from '@mui/material/styles';
import { type StyledComponent } from '@emotion/styled';

export const createStyledComponent = <Theme = DefaultTheme, Props extends Record<string, unknown> = any>(
    component: React.ComponentType<any>,
    _displayName: string,
    styles: Record<string, unknown> | ((props: { theme: Theme } & Props) => Record<string, unknown>)): StyledComponent<any> => {
    return styled(component)(styles);
};
