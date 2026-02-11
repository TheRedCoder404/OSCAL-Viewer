import React from 'react';
import type { catalog } from 'types/oscal-types.ts';
import { Box } from '@mui/material';
import OSCALGroupList from './OSCALGroupList.tsx';

type Props = {
    data: catalog | undefined;
};

const CustomOscalViewer = (props: Props): React.ReactNode => {
    const {
        data,
    } = props;

    return (
        <Box>
            <h2>{data?.metadata.title}</h2>
            <OSCALGroupList groups={data?.groups}/>
        </Box>
    );
};

export default CustomOscalViewer;