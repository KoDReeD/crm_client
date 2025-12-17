import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'light', //режим темы
        primary: { //основные цвета
            main: '#1976d2',  // Основной оттенок
            light: '#42a5f5', // Светлый оттенок 
            dark: '#1565c0',  // Темный оттенок 
        },
        secondary: {   // Второстепенный цвет (акценты)
            main: '#dc004e',
        },
        background: {  // Фоны
            default: '#f5f5f5', // Основной фон страницы
            paper: '#ffffff',   // Фон карточек, панелей
        },
    }
});

//тема для темного режима
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
    },
});

export default theme;