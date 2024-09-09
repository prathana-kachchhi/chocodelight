import React, { useState } from 'react';
import Loader from './index';

const DelayedSuspense = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const handleLoad = () => {
        setIsLoaded(true);
    };
    if (!isLoaded) {
        setTimeout(handleLoad, 2000);
    }

    return isLoaded ? children : <Loader />;
};

export default DelayedSuspense;