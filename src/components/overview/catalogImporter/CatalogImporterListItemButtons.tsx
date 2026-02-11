import type { ReactElement } from 'react';
import CatalogJSONParserButton from 'components/utility/CatalogJSONParserButton.tsx';
import { Button, FormLabel } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

type Props = {
    
};

const CatalogImporterListItemButtons = (props: Props): ReactElement => {
    const {
        
    } = props;

    const handleCatalogUpload = (): void => {

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
                <FormLabel>
                    <Button
                        color="primary"
                        variant="contained"
                        size="small"
                    >
                        Select
                    </Button>
                </FormLabel>
            </Grid2>
            <Grid2>
                <FormLabel>
                    <Button
                        color="primary"
                        variant="contained"
                        size="small"
                    >
                        Delete
                    </Button>
                </FormLabel>
            </Grid2>
        </Grid2>
    );
};

export default CatalogImporterListItemButtons;