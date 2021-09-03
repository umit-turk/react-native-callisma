import {moduleName} from 'react-native';
import React from 'react';
import { ThemeProvider } from './src/utils/theme/ThemeContext';
import App from './App';

export default function AppWrap(){
    return (
    <ThemeProvider>
        <App />
    </ThemeProvider>
    )}