import React from 'react';
import ReactDOM from 'react-dom';
import { creatRoot } from 'react-dom/client';
import App from './App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);