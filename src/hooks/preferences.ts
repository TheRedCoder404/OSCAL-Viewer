import { useContext } from 'react';
import { UserPreferencesContext, type UserPreferenceType } from 'contexts/UserPreferencesContext';

export type UserPreferenceKeyType = keyof UserPreferenceType;

/**
 * useUserPreference is a hook for accessing a single user-specific preference.
 * It uses the closest surrounding UserPreferencesContext.
 */
export const useUserPreference = <K extends UserPreferenceKeyType>(pref: K): [UserPreferenceType[K], (newValue: UserPreferenceType[K]) => void] => {
    const context = useContext(UserPreferencesContext);
    const value = context.userPrefs[pref];
    const setValue = (newValue: UserPreferenceType[K]): void => {
        context.setUserPrefs({ ...context.userPrefs, [pref]: newValue });
    };

    return [value, setValue];
};
