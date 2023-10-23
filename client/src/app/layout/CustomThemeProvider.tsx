import { useState } from 'react';
import { createTheme, IconButton } from '@mui/material';
import LightIcon from '../../../public/icons/lightmode.png';
import DarkIcon from '../../../public/icons/darkmode.png';

const LightDarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <IconButton onClick={toggleDarkMode} color="primary">
        <img src={darkMode ? DarkIcon : LightIcon} alt="Mode" />
        </IconButton>
    );
};

export default LightDarkModeSwitch;
