import { useEffect, useState } from "react";

const apiKey = 'my-api-key'; 

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.result === 'success') {
                    setData(
                        res.conversion_rates
                    );
                } else {
                    setData({});
                }
            })
            .catch((error) => {
                console.error('Error fetching exchange rate:', error);
                setData({});
            });
    }, [currency]);
    return data;
}

