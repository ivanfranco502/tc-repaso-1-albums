/*
  Sólo se deben mostrar los primeros [limit]
  Implementar Filtro por título de album
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchAll } from '../services/albums';

import Album from '../components/Album';
import Filter from '../components/Filter';

class AlbumList extends Component {
  state = {
    albums: [],
    query: '',
    loading: true
  };

  componentDidMount() {
    fetchAll().then(albums => {
      this.setState({ albums, loading: false })
    });
  }

  onChangeFilter = query => {
    this.setState({ query });
  }

  render() {
    const { query, loading, albums } = this.state;
    const { limit } = this.props;

    if (loading) return 'Cargando ...';
    
    return (
      <div>
        <Filter
          query={query}
          onChange={this.onChangeFilter}
        />
        <ul>
          {
            albums
              .filter(album => album.title.includes(query))
              .slice(0, limit)
              .map(album =>
                <Album key={album.id} {...album} />
              )
          }
        </ul>
      </div>
    );
  }

  static propTypes = {
    limit: PropTypes.number
  };

  static defaultProps = {
    limit: 20
  };
};

export default AlbumList;