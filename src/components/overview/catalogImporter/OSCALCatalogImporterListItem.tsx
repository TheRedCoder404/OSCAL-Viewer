import type { ReactElement } from 'react';
import { ListItem } from '@mui/material';
import type { catalog } from 'types/oscal-types.ts';
import CatalogImporterListItemButtons from './CatalogImporterListItemButtons.tsx';
import Grid2 from '@mui/material/Unstable_Grid2';

type Props = {
    catalog: catalog;
};

const OSCALCatalogImporterListItem = (props: Props): ReactElement => {
    const {
        catalog,
    } = props;
    
    return (
        <ListItem sx={{ width: '100%' }}>
            <Grid2 container={true} spacing={4} sx={{ width: '100%', alignItems: 'center', flexGrow: 1 }}>
                <Grid2 xs={8}>
                    <h3>{catalog.metadata.title}</h3>
                </Grid2>
                <Grid2 xs={4}>
                    <CatalogImporterListItemButtons/>
                </Grid2>
            </Grid2>
        </ListItem>
    ); 
};

export default OSCALCatalogImporterListItem;