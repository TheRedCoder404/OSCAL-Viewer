import React from 'react';
import { useCatalogInUse } from 'contexts/CatalogsLoadedContext.tsx';


const Catalog = ():React.ReactNode => {
    const catalogInUse = useCatalogInUse();
    
    return (
        <>
            {catalogInUse ? (
                <h1>{catalogInUse.metadata.title}</h1>
            ) : (
                <h1>No Catalog Selected!</h1>
            )}
        </>
    );
};

export default Catalog;