import type { ReactElement } from 'react';
import { Paper } from '@mui/material';
import OSCALCatalogImporterTable from './OSCALCatalogImporterTable.tsx';

const OSCALCatalogImporter = (): ReactElement => {
    return (
        <Paper variant={'outlined'} square={false} sx={{ padding: 8 }}>
            <h2>OSCAL Catalog Importer</h2>
            <OSCALCatalogImporterTable/>
        </Paper>
    );
};

export default OSCALCatalogImporter;