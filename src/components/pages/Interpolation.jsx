
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    Input, Descriptions,
    // Comment, Avatar,
} from 'antd';

function Interpolation() {
    const { t } = useTranslation();
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    return (
        <>
            <h2>Interpolation</h2>
            <Input style={{ width: 200, marginRight: 20 }} placeholder={t('lastName')} onChange={handleLastNameChange} />
            <Input style={{ width: 200 }} placeholder={t('firstName')} onChange={handleFirstNameChange} />
            <br />
            <br />
            <Descriptions title="User Info">
                <Descriptions.Item label="UserName">{t('nameDisplay', { lastName, firstName })}</Descriptions.Item>
            </Descriptions>
        </>
    );
}

export default Interpolation;


// <Comment
//     author={<div>{t('nameDisplay', { lastName, firstName })}</div>}
//     avatar={(
//         <Avatar
//             src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
//             alt={t('nameDisplay', { lastName, firstName })}
//         />
//     )}
//     content={(
//         <p>{t('introduceName', { lastName, firstName })}</p>
//     )}
// />;