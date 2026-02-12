import type { ReactElement } from 'react';
import CatalogJSONParserButton from 'components/utility/CatalogJSONParserButton.tsx';
import { Button, Grid2 } from '@mui/material';
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
        <Grid2 container={true}>
            <Grid2>
                <CatalogJSONParserButton
                    loadCatalog={handleCatalogUpload}
                    buttonText={'Update'}
                />
            </Grid2>
            <Grid2>
                <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    onClick={handleSelectCatalog}
                >
                    Select
                </Button>
            </Grid2>
            <Grid2>
                <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    onClick={handleDeleteCatalog}
                >
                    Delete
                </Button>
            </Grid2>
        </Grid2>
    );
};

export default CatalogImporterListItemButtons;