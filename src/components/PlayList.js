import React, { Component } from 'react';
import PlayListItem from './PlayListItem';

export default class PlayList extends Component {
     constructor(props) {
          super(props)

          this.state = {
               songs: []
          }
     }
     componentDidMount() {
          fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
               return results.json()
          }).then((data) => {
               this.setState({ songs: data });
          })
     }
     fetch = (e) => {
          e.preventDefault();
          fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
               return results.json();
          }).then( data => {
               this.setState({ songs: data });
          })
     }
     render(){
          return (
               <div className="border card-padding card-opacity card-margin">
                    <div className="text-center">
                         <button type="submit" className="btn btn-success"> Update List </button>
                    </div>
                    <div className="row ma">
                         {this.state.songs && this.state.songs.map(song => {
                              return <PlayListItem song={song} key={song._id} />
                         })}
                    </div>
               </div>
          )
     }
}
