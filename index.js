/*

Ver componente containers/AlbumList.jsx

*/

import React from 'react';
import { render } from 'react-dom';

import Layout from './components/Layout';
import AlbumList from './containers/AlbumList';

import './style.css';

const App = () => (
  <Layout>
    <AlbumList limit={10}/>
  </Layout>
);

render(<App />, document.getElementById('root'));
