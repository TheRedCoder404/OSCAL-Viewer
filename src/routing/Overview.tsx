import { Helmet } from 'react-helmet';
import * as React from 'react';
import { Box } from '@mui/material';
import OSCALCatalogImporter from 'components/overview/catalogImporter/OSCALCatalogImporter.tsx';

const Overview = (): React.ReactNode => {
    return (
        <Box sx={{ mt: 8, mb: 2 }}>
            <Helmet>Overview</Helmet>

            <OSCALCatalogImporter/>
        </Box>
    );
};

export default Overview;
