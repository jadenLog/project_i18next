import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InputNumber, Descriptions } from 'antd';


function Nesting() {
    const { t } = useTranslation();

    const [numberOfBoys, setNumberOfBoys] = useState(1);
    const [numberOfGirls, setNumberOfGirls] = useState(1);

    const handleCountChange = (value) => {
        setNumberOfBoys(value);
    };

    const handleNumberOfGirlsChange = (value) => {
        setNumberOfGirls(value);
    };

    return (
        <>
            <h2>Nesting</h2>
            <h1>Number of Boys</h1>
            <InputNumber
                style={{ width: 200, marginRight: 20 }}
                placeholder="number of boys"
                onChange={handleCountChange}
                defaultValue={1}
                min={1}
            />
            <h1>Number of Girls</h1>
            <InputNumber
                style={{ width: 200, marginRight: 20 }}
                placeholder="number of girls"
                onChange={handleNumberOfGirlsChange}
                defaultValue={1}
                min={1}
            />
            <br />
            <br />
            <Descriptions>
                <Descriptions.Item label="Nested Number">{t('nesting1')}</Descriptions.Item>
                <Descriptions.Item label="Nested Girls and Boys">{t('girlsAndBoys', { count: numberOfBoys, girls: numberOfGirls })}</Descriptions.Item>
            </Descriptions>
        </>
    );
}

export default Nesting;