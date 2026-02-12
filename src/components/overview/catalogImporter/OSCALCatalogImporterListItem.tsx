import type { ReactElement } from 'react';
import { Grid, ListItem } from '@mui/material';
import type { catalog } from 'types/oscal-types.ts';
import CatalogImporterListItemButtons from './CatalogImporterListItemButtons.tsx';

type Props = {
    catalog: catalog;
    index: number;
};

const OSCALCatalogImporterListItem = (props: Props): ReactElement => {
    const {
        catalog,
        index,
    } = props;
    
    return (
        <ListItem sx={{ width: '100%' }}>
            <Grid container={true} spacing={4} sx={{ width: '100%', alignItems: 'center', flexGrow: 1 }}>
                <Grid size={8}>
                    <h3>{catalog.metadata.title}</h3>
                </Grid>
                <Grid size={4}>
                    <CatalogImporterListItemButtons
                        index={index}
                    />
                </Grid>
            </Grid>
        </ListItem>
    ); 
};

export default OSCALCatalogImporterListItem;