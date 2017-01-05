import React, { Component } from 'react';

import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.pokemon
            .map((pok) => {
              return (
                <PokemonIndexItem key={pok.id} pokemon={pok} />
              );
            })
          }
        </ul>
        {this.props.children}
      </div>
    );
  }
}
export default PokemonIndex;
