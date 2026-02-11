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
