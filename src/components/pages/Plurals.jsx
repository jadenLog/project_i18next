import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InputNumber, Descriptions } from 'antd';


function Plurals() {
    const { t } = useTranslation();

    const [count, setCount] = useState(0);

    const handleCountChange = (value) => {
        setCount(value);
    };

    return (
        <>
            <div>Plurals</div>
            <InputNumber
                style={{ width: 200, marginRight: 20 }}
                placeholder="count"
                onChange={handleCountChange}
                defaultValue={0}
                min={0}
            />
            <br />
            <br />
            <Descriptions>
                <Descriptions.Item label="item count">{t('item_interval', { postProcess: 'interval', count })}</Descriptions.Item>
            </Descriptions>
        </>
    );
}

export default Plurals;