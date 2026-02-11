import moment from 'moment';
import React from 'react';

export interface FeatureFlagType {
    active: boolean;
    activeUntil?: number;
    inactiveUntil?: number;
}

export interface AvailableFeaturesType {
}

export const isFeatureActive = (feature: FeatureFlagType): boolean => {
    return (!!feature.activeUntil && moment.now() < feature.activeUntil) || (!!feature.inactiveUntil && feature.inactiveUntil < moment.now()) || feature.active;
};

export interface UserPreferenceType extends AvailableFeaturesType {
    useDarkTheme: boolean;
}

export interface UserPreferenceContextState {
    userPrefs: UserPreferenceType;
    setUserPrefs: (prefs: UserPreferenceType) => void;
}

const defaultContext: UserPreferenceContextState = {
    userPrefs: {
        useDarkTheme: false,
    },
    setUserPrefs: () => {},
};

export const UserPreferencesContext = React.createContext<UserPreferenceContextState>(defaultContext);
