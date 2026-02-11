import React from 'react';
import { ListItem } from '@mui/material';
import type { Group } from 'types/oscal-types.ts';

type Props = {
    group: Group;
};

const OSCALGroupListItem = (props: Props): React.ReactNode => {
    const {
        group,
    } = props;
    
    return (
        <ListItem>
            {group.title}
        </ListItem>
    ); 
};

export default OSCALGroupListItem;