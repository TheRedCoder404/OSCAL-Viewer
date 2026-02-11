import { type FlexBoxCssProperties } from 'components/flexbox/FlexboxContainer';
import { createStyledComponent } from 'components/flexbox/StyledComponent';
import { Stack, type StackProps } from '@mui/material';
import { type StyledComponent } from '@emotion/styled';
import React from 'react';

type RowStackProps = Omit<StackProps, 'direction'>;
interface RowProps {
    useReverse?: boolean;
    children?: React.ReactNode[] | React.ReactNode;
}

export const Row: React.FC<RowProps & RowStackProps> = (props) => {
    const {
        children, useReverse = false,
    } = props;

    return (
        <Stack
            direction={useReverse ? 'row-reverse' : 'row'}
            {...props}
        >
            {children}
        </Stack>
    );
};

export const createRow = (flexBoxProps: FlexBoxCssProperties, displayName = 'Row'): StyledComponent<any> => {
    return createStyledComponent(Row, displayName, { ...flexBoxProps });
};
