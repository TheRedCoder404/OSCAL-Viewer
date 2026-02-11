declare module '@easydynamics/oscal-react-library' {
    import { ReactElement } from 'react';

    export interface OSCALCatalogLoaderProps {
        onResolutionComplete?: () => void;
        catalog: any;
        parentUrl?: string;
    }

    export interface OSCALProfileLoaderProps {
        onResolutionComplete?: () => void;
        profile: any;
        parentUrl?: string;
    }

    export function OSCALCatalogLoader(props: OSCALCatalogLoaderProps): ReactElement;
    export function OSCALProfileLoader(props: OSCALProfileLoaderProps): ReactElement;
}