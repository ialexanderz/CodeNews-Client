import React from 'react';
import JumboTextTwo from '../JumboText/JumboTextTwo';
import Profile from '../Dashboard/Profile';

export default function Userprofile(props) {
    console.log(props)
    return (
        <>
            < JumboTextTwo />
            < Profile currentUser={props.currentUser} />
        </>
    )
}
