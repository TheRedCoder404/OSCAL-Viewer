import React from 'react';
import { Box } from '@mui/material';
import { ToolbarItemBox, ToolbarRow } from 'components/utility/StyledComponents.tsx';
import FileInput from 'components/FileInput.tsx';
import { Row } from 'components/flexbox/Row.tsx';

type OverviewToolbarProps = {
    setOscalData: (data: any) => void;
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
                setOscalData(json);
                return;
            }

            alert('Invalid JSON file');
        };

        reader.readAsText(file);
    };
    
    return (
        <Box role={'toolbar'}>
            <ToolbarRow>
                <Row alignItems={'center'}>
                    <ToolbarItemBox>
                        <FileInput
                            onChange={handleUploadOscalData}
                            accept={'application/json'}
                            multiple={false}
                        />
                    </ToolbarItemBox>
                </Row>
            </ToolbarRow>
        </Box>
    );
};

export default OverviewToolbar;