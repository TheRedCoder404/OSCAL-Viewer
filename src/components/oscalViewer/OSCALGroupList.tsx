import React from 'react';
import type { Group } from 'types/oscal-types.ts';
import { List } from '@mui/material';
import OSCALGroupListItem from './OSCALGroupListItem.tsx';

type Props = {
    groups: Group[] | undefined;
};

const OSCALGroupList = (props: Props): React.ReactNode => {
    const {
        groups,
    } = props;

    return (
        <List>
            {groups?.map((group) => (
                <OSCALGroupListItem group={group}/>
            ))}
        </List>
    );
};

export default OSCALGroupList;