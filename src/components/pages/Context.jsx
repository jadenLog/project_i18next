import React from 'react';
import { useTranslation } from 'react-i18next';

import { Descriptions } from 'antd';

function Context() {
    const { t } = useTranslation();

    return (
        <>
            <h2>Context</h2>
            <Descriptions>
                <Descriptions.Item label="friend1">{t('friend')}</Descriptions.Item>
                <Descriptions.Item label="friend2">{t('friend', { context: 'male' })}</Descriptions.Item>
                <Descriptions.Item label="friend3">{t('friend', { context: 'female' })}</Descriptions.Item>
            </Descriptions>
        </>
    );
}

export default Context;
