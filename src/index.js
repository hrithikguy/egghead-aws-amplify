import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';
import config from './aws-exports'

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig);

Amplify.configure(config)

ReactDOM.render(<ThemeProvider theme={studioTheme}>
 <App /> </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
