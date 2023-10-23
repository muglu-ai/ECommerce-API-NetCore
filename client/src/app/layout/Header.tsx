import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import DarkIcon from "/icons/darkmode.png";
import LightIcon from "/icons/lightmode.png";
interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}


export default function Header({darkMode, handleThemeChange}:Props){
    return(
        <AppBar position='static' sx={{mb:4}}>
            <Toolbar>
                <Typography variant="h6">AmazeStore</Typography>
                <IconButton onClick={handleThemeChange}>
                    <img src={darkMode ? DarkIcon : LightIcon} alt="Mode" />
                </IconButton>
            </Toolbar>
            
        </AppBar>
    )
}