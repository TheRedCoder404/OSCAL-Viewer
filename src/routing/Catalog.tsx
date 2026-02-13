import React from 'react';
import { useCatalogInUse } from 'contexts/CatalogsLoadedContext.tsx';
import CustomOscalViewer from 'components/oscalViewer/CustomOscalViewer.tsx';


const Catalog = ():React.ReactNode => {
    const catalogInUse = useCatalogInUse();
    
    return (
        <>
            {catalogInUse ? (
                <CustomOscalViewer data={catalogInUse}/>
            ) : (
                <h1>No Catalog Selected!</h1>
            )}
        </>
    );
};

export default Catalog;