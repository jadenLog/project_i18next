import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <div>{t('welcome')}</div>
    );
}

export default Home;