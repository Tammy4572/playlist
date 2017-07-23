import React, {Component } from 'react';

export default class PlayListCard extends Component {
     constructor(props) {
          super(props);
     }
     render() {
          const { song } = this.props;
          return (
               <div className="col-sm-6">
               <div className="card margin-all">
                    <div className="card-block">
                         <h4 className="card-subtitile">Title: { song.songTitle } by: Artist/Band: { song.songArtist }</h4>
                         <h5 className="card-titile mb-2"> User Name: {song.userName } </h5>
                         <h5 className="card-text"> Notes: { song.songNotes }</h5>
                    </div>
                    </div>
               </div>
          )
     }
}
