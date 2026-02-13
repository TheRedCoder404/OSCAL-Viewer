import { Helmet } from 'react-helmet';
import * as React from 'react';
import { Box } from '@mui/material';
import OSCALCatalogImporter from 'components/overview/catalogImporter/OSCALCatalogImporter.tsx';

const Overview = (): React.ReactNode => {
    return (
        <Box>
            <Helmet>Overview</Helmet>

            <OSCALCatalogImporter/>
        </Box>
    );
};

export default Overview;
