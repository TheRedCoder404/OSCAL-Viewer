import { useState } from 'react';
import { Helmet } from 'react-helmet';
import * as React from 'react';
import { OSCALCatalogLoader } from '@easydynamics/oscal-react-library';
import OverviewToolbar from 'components/overview/OverviewToolbar.tsx';
import { Box } from '@mui/material';

const Overview = (): React.ReactNode => {
    const [oscalData, setOscalData] = useState(null);
    
    return (
        <Box>
            <OverviewToolbar
                setOscalData={setOscalData}
            />
            <Helmet>Overview</Helmet>

            {oscalData && (
                <OSCALCatalogLoader onResolutionComplete={(): void => {}} catalog={oscalData} parentUrl={'http://localhost:5173/'}/>
            )}
        </Box>
    );
};

export default Overview;
