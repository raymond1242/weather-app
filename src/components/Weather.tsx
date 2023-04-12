import React, { useEffect } from 'react'


const Weather: React.FC = () => {

    useEffect(() => {
        console.log('Weather component mounted');
    }, []);
    
    return (
        <div>Weather Here</div>
    );
};

export default Weather;