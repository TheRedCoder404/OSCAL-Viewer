import type { ReactElement } from 'react';
import { useCatalogsLoader } from 'contexts/CatalogsLoadedContext.tsx';
import { List } from '@mui/material';
import OSCALCatalogImporterListItem from './OSCALCatalogImporterListItem.tsx';
import CatalogJSONParserButton from 'components/utility/CatalogJSONParserButton.tsx';
import type { catalog } from 'types/oscal-types.ts';

type Props = {
    
};

const OSCALCatalogImporter = (props: Props): ReactElement => {
    const {
        
    } = props;
    
    const { catalogs, setCatalogs } = useCatalogsLoader();

    const loadCatalog = (catalog: catalog): void => {
        setCatalogs([...catalogs, catalog]);
    };
    
    return (
        <>
            <h2>OSCAL Catalog Importer</h2>
            <List>
                {catalogs?.map((catalog, index) => (
                    <OSCALCatalogImporterListItem catalog={catalog} index={index}/>
                ))}
                <CatalogJSONParserButton loadCatalog={loadCatalog}/>
            </List>
        </>
    );
};

export default OSCALCatalogImporter;