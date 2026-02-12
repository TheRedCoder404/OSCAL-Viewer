import React, { type ElementType } from 'react';
import { FlexboxContainer, type FlexBoxCssProperties } from 'components/flexbox/FlexboxContainer';
import { createStyledComponent } from 'components/flexbox/StyledComponent';

interface ColumnProps {
    children: React.ReactNode[] | React.ReactNode;
    useReverse?: boolean;
    className?: string;
    dataTestId?: string;
}

export const Column: React.FC<ColumnProps> = (props) => {
    const {
        children, useReverse, className, dataTestId,
    } = props;

    return (
        <FlexboxContainer
            className={className}
            direction={useReverse ? 'column-reverse' : 'column'}
            dataTestId={dataTestId}
        >
            {children}
        </FlexboxContainer>
    );
};

export function createColumn(flexBoxProps: FlexBoxCssProperties, displayName = 'Column'): ElementType {
    return createStyledComponent(Column, displayName, { ...flexBoxProps });
}
