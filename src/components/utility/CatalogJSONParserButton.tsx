import { type ReactElement } from 'react';
import FileInput from './FileInput.tsx';
import { ToolbarItemBox } from './StyledComponents.tsx';
import type { catalog } from 'types/oscal-types.ts';

type Props = {
    loadCatalog: (catalog: catalog) => void,
    buttonText?: string,
    disabled?: boolean,
};

const CatalogJSONParserButton = (props: Props): ReactElement => {
    const {
        loadCatalog,
        buttonText,
        disabled = false,
    } = props;

    const handleUploadOscalData = (files: FileList): void => {
        const file = files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            if (e && e.target && e.target.result && typeof e.target.result === 'string') {
                const json = JSON.parse(e.target.result);
                // OSCAL files wrap the catalog in a root object
                const catalogData = json.catalog || json;
                loadCatalog(catalogData as catalog);
                return;
            }

            alert('Invalid JSON file');
        };

        reader.readAsText(file);
        return;
    };
    
    return (
        <ToolbarItemBox sx={{ marginLeft: 'auto' }}>
            <FileInput
                onChange={handleUploadOscalData}
                accept={'application/json'}
                multiple={false}
                standardButtonText={buttonText ?? 'Import Catalog'}
                disabled={disabled}
            />
        </ToolbarItemBox>
    );
};

export default CatalogJSONParserButton;