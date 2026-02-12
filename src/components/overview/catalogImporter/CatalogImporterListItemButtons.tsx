import type { ReactElement } from 'react';
import CatalogJSONParserButton from 'components/utility/CatalogJSONParserButton.tsx';
import { Button, Grid } from '@mui/material';
import { useManageCatalog } from 'contexts/CatalogsLoadedContext.tsx';
import type { catalog } from 'types/oscal-types.ts';

type Props = {
    index: number;
};

const CatalogImporterListItemButtons = (props: Props): ReactElement => {
    const {
        index,
    } = props;
    
    const { updateCatalog, deleteCatalog, selectCatalog } = useManageCatalog();

    const handleCatalogUpload = (catalog: catalog): void => {
        updateCatalog(index, catalog);
    };

    const handleDeleteCatalog = (): void => {
        deleteCatalog(index);
    };

    const handleSelectCatalog = (): void => {
        selectCatalog(index);
    };
    
    return (
        <Grid container={true}>
            <Grid>
                <CatalogJSONParserButton
                    loadCatalog={handleCatalogUpload}
                    buttonText={'Update'}
                />
            </Grid>
            <Grid>
                <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    onClick={handleSelectCatalog}
                >
                    Select
                </Button>
            </Grid>
            <Grid>
                <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    onClick={handleDeleteCatalog}
                >
                    Delete
                </Button>
            </Grid>
        </Grid>
    );
};

export default CatalogImporterListItemButtons;