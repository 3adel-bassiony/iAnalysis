import { useContext } from 'react';
import { Theme } from '../enums/Theme';
import ThemeContext from '../ThemeContext';

type UseThemeContextReturn = {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
};

export default function useThemeContext(): UseThemeContextReturn {
    const context = useContext(ThemeContext);
    return context;
}
