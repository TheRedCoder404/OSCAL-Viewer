import CatalogJSONParserButton from 'components/utility/CatalogJSONParserButton.tsx';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import type { catalog } from 'types/oscal-types.ts';
import { useCatalogsLoader, useManageCatalog } from 'contexts/CatalogsLoadedContext.tsx';
import CatalogImporterTableRowButtons from './CatalogImporterTableRowButtons.tsx';

const OSCALCatalogImporterTable = () => {
    const { catalogs } = useCatalogsLoader();
    const { importCatalog } = useManageCatalog();

    const loadCatalog = (catalog: catalog): void => {
        importCatalog(catalog);
    };
    
    return (
        <TableContainer component={Paper} sx={{ padding: '2rem' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Catalog</TableCell>
                        <TableCell>Version</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {catalogs.length > 0 ? catalogs.map((catalog, index) => (
                        <TableRow
                            key={catalog.metadata.title + catalog.metadata.version}
                        >
                            <TableCell>{catalog.metadata.title}</TableCell>
                            <TableCell>{catalog.metadata.version}</TableCell>
                            <TableCell><CatalogImporterTableRowButtons index={index}/></TableCell>
                        </TableRow>
                    )) : (
                        <TableRow>
                            <TableCell>No Catalogs Loaded :(</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <CatalogJSONParserButton loadCatalog={loadCatalog}/>
        </TableContainer>
    );
};

export default OSCALCatalogImporterTable;