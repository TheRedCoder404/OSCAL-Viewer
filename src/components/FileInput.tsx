import React, {
    type ChangeEvent,
    type ReactNode,
    useRef,
} from 'react';
import { Button, FormLabel, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const StyledInput = styled('input')(() => ({
    display: 'none',
}));

export interface FileInputProps {
    accept?: string,
    multiple?: boolean,
    onChange?: (files: FileList) => void,
    disabled?: boolean,
    children?: ReactNode,
}

/**
 * FileInput wraps a React node (defaults to button), which opens a browser-native file dialog.
 */
const FileInput: React.FC<FileInputProps> = (props): React.ReactElement => {
    const {
        accept, multiple = false, onChange, disabled = false, children,
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files) {
            onChange?.(event.target.files);
        }
    };

    const openFileSelection = (): void => {
        if (inputRef.current) {
            // Reset value so that onChange is triggered each time even if file selection is the same
            inputRef.current.value = '';
            inputRef.current.click();
        }
    };

    return (
        <>
            <FormLabel onClick={openFileSelection}>
                {children ?? (
                    <Button
                        className="FileInput-Button"
                        color="primary"
                        variant="contained"
                        size="small"
                        startIcon={<CloudUploadIcon className="FileInput-Icon"/>}
                        disabled={disabled}
                    >
                        Import
                    </Button>
                )}
            </FormLabel>
            <StyledInput
                accept={accept}
                multiple={multiple}
                className={'FileInput-input'}
                onChange={handleChange}
                ref={inputRef}
                type={'file'}
                disabled={disabled}
                data-test-id={'file-input'}
            />
        </>
    );
};

export default FileInput;
