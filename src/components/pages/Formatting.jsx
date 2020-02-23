import React from 'react';
import { useTranslation } from 'react-i18next';

import { Descriptions } from 'antd';

function Formatting() {
    const { t } = useTranslation();

    return (
        <>
            <h2>Formatting</h2>
            <Descriptions>
                <Descriptions.Item label="date">{t('dateDisplay', { date: new Date() })}</Descriptions.Item>
                <Descriptions.Item label="uppercase">{t('uppercaseDisplay', { text: 'can you hear me' })}</Descriptions.Item>
            </Descriptions>
        </>
    );
}

export default Formatting;
