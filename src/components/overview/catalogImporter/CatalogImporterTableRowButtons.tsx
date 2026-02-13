import type { ReactElement } from 'react';
import CatalogJSONParserButton from 'components/utility/CatalogJSONParserButton.tsx';
import { Button, ButtonGroup } from '@mui/material';
import { useManageCatalog } from 'contexts/CatalogsLoadedContext.tsx';
import type { catalog } from 'types/oscal-types.ts';

type Props = {
    index: number;
};

const CatalogImporterTableRowButtons = (props: Props): ReactElement => {
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
        <ButtonGroup>
            <CatalogJSONParserButton
                loadCatalog={handleCatalogUpload}
            >
                <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                >
                    Update
                </Button>
            </CatalogJSONParserButton>
            <Button
                color="primary"
                variant="outlined"
                size="small"
                onClick={handleSelectCatalog}
            >
                Select
            </Button>
            <Button
                color="primary"
                variant="outlined"
                size="small"
                onClick={handleDeleteCatalog}
            >
                Delete
            </Button>
        </ButtonGroup>
    );
};

export default CatalogImporterTableRowButtons;