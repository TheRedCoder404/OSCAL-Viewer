import React from 'react';
import { Box } from '@mui/material';
import { ToolbarItemBox, ToolbarRow } from 'components/utility/StyledComponents.tsx';
import FileInput from 'components/utility/FileInput.tsx';
import type { catalog } from 'types/oscal-types.ts';

type OverviewToolbarProps = {
    setOscalData: (data: catalog) => void;
};

const OverviewToolbar = (props: OverviewToolbarProps): React.ReactElement => {
    const {
        setOscalData,
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
                setOscalData(catalogData as catalog);
                return;
            }

            alert('Invalid JSON file');
        };

        reader.readAsText(file);
        return;
    };
    
    return (
        <Box role={'toolbar'} sx={{ width: '100%' }}>
            <ToolbarRow>
                <ToolbarItemBox sx={{ marginLeft: 'auto' }}>
                    <FileInput
                        onChange={handleUploadOscalData}
                        accept={'application/json'}
                        multiple={false}
                        standardButtonText={'Import Catalog'}
                    />
                </ToolbarItemBox>
            </ToolbarRow>
        </Box>
    );
};

export default OverviewToolbar;