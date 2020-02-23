import React from 'react';
import { useTranslation } from 'react-i18next';

import { Alert } from 'antd';

function Essentials() {
    const { t } = useTranslation();

    return (
        <>
            <h2>Essentials</h2>
            <Alert
                message="Error"
                description={t(['error.404', 'error.unspecific'])}
                type="error"
                showIcon
            />
        </>
    );
}

export default Essentials;