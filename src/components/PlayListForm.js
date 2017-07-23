import React, {Component } from 'react';

export default class PlayListForm extends Component {
     constructor(props){
          super(props);
          this.handleInputChange = this.handleInputChange.bind(this);
          this.submitSong = this.submitSong.bind(this);
          this.state = {
               userName: '',
               songArtist: '',
               songTitle: '',
               songNotes: ''
          }
     }
     handleInputChange(key) {
          return function(e) {
               var state = {};
               state[key] = e.target.value;
               this.setState(state);
          }.bind(this);
     }
     submitSong = (e) => {
          e.preventDefault();
          let listItem = JSON.stringify(this.state);

          fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting', {
               method: "POST",
               body: listItem,
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               }
          }
     ).then(response => {
          console.log(response, "Yay, it worked! ");
     }).catch(err => {
          console.log(err, "Boo, it didn't work!");
     });
     this.setState({ userName: '', songNotes: '', songArtist: '', songTitle: '' });
     }

     render() {
          return (
               <form className="margin-top card" onSubmit={this.submitSong}>
                    <div className="card-block form-div list-group">
                         <div className="form-group">
                              <label className="add-song-label">User Name: </label>
                              <input onChange={this.handleInputChange} type="text" className="form-control text-muted" placeholder="Username" aria-describedby="sizing-addon1" value={this.state.userName}/>
                         </div>
                         <div className="form-group">
                              <label className="add-song-label"> Artist or Band Name: </label>
                              <input onChange={this.handleInputChange} type="text" className="form-control text-muted" placeholder="Artist or Band Name" aria-describedby="sizing-addon1" value={this.state.artist}/>
                         </div>
                         <div className="form-group">
                              <label className="add-song-label">Song Title: </label>
                              <input onChange={this.handleInputChange} type="text" className="form-control" placeholder="Song Title" aria-describedby="sizing-addon1" value={this.state.songTitle}/>
                         </div>
                         <div className="form-group">
                              <label className="add-song-label">Song Notes: </label>
                              <textarea onChange={this.handleInputChange} className="form-control" rows="3" placeholder="Notes about this song" value={this.state.songNotes}></textarea>
                         </div>
                    </div>
                    <div className="button-div">
                              <button type="submit" className="btn submit-btn btn-primary margin-top">Submit</button>
                    </div>
               </form>
          )
     }
}
