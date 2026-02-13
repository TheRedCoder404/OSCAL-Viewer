import React, { createContext, type ReactElement, useContext, useState } from 'react';
import type { catalog } from 'types/oscal-types.ts';

type CatalogsLoadedContextType = {
    catalogsLoaded: catalog[];
    setCatalogsLoaded: (catalogs: catalog[]) => void;
    catalogInUse: catalog | undefined;
    setCatalogInUse: (catalog: catalog | undefined) => void;
};

type CatalogsLoaderType = {
    catalogs: catalog[];
    setCatalogs: (catalogs: catalog[]) => void;
};

type CatalogLoaderType = {
    catalogInUse: catalog | undefined;
    setCatalogInUse: (catalog: catalog | undefined) => void;
};

type CatalogsLoadedContextProviderProps = {
    children: React.ReactNode;
};

type useManageCatalogsReturnType = {
    updateCatalog: (index: number, newCatalog: catalog | undefined) => void
    deleteCatalog: (index: number) => void
    selectCatalog: (index: number) => void
    importCatalog: (catalog: catalog) => void
};

const defaultContext: CatalogsLoadedContextType = {
    catalogsLoaded: [],
    catalogInUse: undefined,
    setCatalogsLoaded: () => {},
    setCatalogInUse: () => {},
};

export const CatalogsLoadedContext = createContext(defaultContext);

export const useCatalogsLoader = (): CatalogsLoaderType => {
    const context = useContext(CatalogsLoadedContext);

    return {
        catalogs: context.catalogsLoaded,
        setCatalogs: context.setCatalogsLoaded,
    };
};

export const useCatalogLoader = (): CatalogLoaderType => {
    const context = useContext(CatalogsLoadedContext);

    return {
        catalogInUse: context.catalogInUse,
        setCatalogInUse: context.setCatalogInUse,
    };
};

export const useManageCatalog = (): useManageCatalogsReturnType => {
    const context = useContext(CatalogsLoadedContext);

    const deleteCatalog = (index: number): void => {
        if (index >= context.catalogsLoaded.length) {
            return;
        }

        const filtered = context.catalogsLoaded.filter((_, cataIndex) => cataIndex !== index);
        context.setCatalogsLoaded(filtered);
    };

    const updateCatalog = (index: number, newCatalog: catalog | undefined): void => {
        if (index >= context.catalogsLoaded.length) {
            return;
        }

        if (newCatalog === undefined) {
            return;
        }

        const newCatalogs = [...context.catalogsLoaded];
        newCatalogs[index] = newCatalog;
        context.setCatalogsLoaded(newCatalogs);
    };

    const selectCatalog = (index: number): void => {
        if (index >= context.catalogsLoaded.length) {
            return;
        }

        context.setCatalogInUse(context.catalogsLoaded[index]);
    };

    const importCatalog = (catalog: catalog): void => {
        if (context.catalogsLoaded.every((catalogInArray) => {
            return  (catalogInArray.uuid !== catalog.uuid && catalogInArray.metadata.version !== catalog.metadata.version);
        })) {
            context.setCatalogsLoaded([...context.catalogsLoaded, catalog]);
        }
    };

    return {
        updateCatalog: updateCatalog,
        deleteCatalog: deleteCatalog,
        selectCatalog: selectCatalog,
        importCatalog: importCatalog,
    };
};

export const useCatalogInUse = (): catalog | undefined => {
    return useContext(CatalogsLoadedContext).catalogInUse;
};

export const useSetCatalogInUse = (catalog: catalog | undefined): void => {
    useContext(CatalogsLoadedContext).setCatalogInUse(catalog);
};

const CatalogsLoadedProvider = (props: CatalogsLoadedContextProviderProps): ReactElement => {
    const {
        children,
    } = props;
    
    const [catalogsLoaded, setCatalogsLoaded] = useState<catalog[]>([]);
    const [catalogLoaded, setCatalogLoaded] = useState<catalog | undefined>(undefined);
    
    return (
        <CatalogsLoadedContext.Provider value={{ catalogInUse: catalogLoaded, setCatalogInUse: setCatalogLoaded, catalogsLoaded, setCatalogsLoaded }}>
            {children}
        </CatalogsLoadedContext.Provider>
    );
};

export default CatalogsLoadedProvider;
