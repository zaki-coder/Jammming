import React from 'react';

import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../Playlist/Playlist';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1}
    ]
    }
  }
  render() { 
    return ( 
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
            <PlayList />
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;
