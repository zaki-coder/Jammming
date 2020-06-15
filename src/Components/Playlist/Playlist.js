import React from 'react';

class PlayList extends React.Component {
    state = {  }
    render() { 
        return ( <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        {/* <TrackList /> */}
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div> );
    }
}
 
export default PlayList;