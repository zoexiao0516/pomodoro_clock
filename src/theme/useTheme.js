import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';
import _ from 'lodash';

export const useTheme = () => {
  const themes = getFromLS('all-themes');
  // This custom React hook returns the selected theme from localStorage and 
  // a boolean to indicate if the theme is loaded correctly from storage.
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    setToLS('theme', mode)
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'));
    return allFonts;
  }

  useEffect(() =>{
    const localTheme = getFromLS('theme');
    // localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
    localTheme ? setTheme(localTheme) : setTheme(themes.data.seaWave);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};