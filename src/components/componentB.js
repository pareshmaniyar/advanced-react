import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../pages/context';
import ComponentC from "./componentD";

export default function ComponentB () {
    let user = useContext(UserContext);
    let channel = useContext(ChannelContext);
    return (
        <div>
            ComponentB: {user.title} {channel}
            <ComponentC />
        </div>
    );
}
