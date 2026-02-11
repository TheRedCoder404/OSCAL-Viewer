import React from 'react';
import { Box } from '@mui/material';
import type * as CSS from 'csstype';

interface FlexboxContainerProps {
    children: React.ReactNode[] | React.ReactNode;
    className?: string;
    direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    dataTestId?: string
}

export const FlexboxContainer: React.FC<FlexboxContainerProps> = (props) => {
    const {
        children, className, direction, dataTestId,
    } = props;

    return (
        <Box
            data-test-id={dataTestId}
            className={className}
            sx={{
                display: 'flex',
                flexDirection: direction,
            }}
        >
            {children}
        </Box>
    );
};

export interface FlexBoxCssProperties {
    alignItems?: CSS.Property.AlignItems;
    justifyContent?: CSS.Property.JustifyContent;
    flexWrap?: CSS.Property.FlexWrap;
}
