import React, { Component } from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
export default class PlayerExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // playerSource: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      // inputVideoUrl: 'http://www.w3schools.com/html/mov_bbb.mp4'
      playerSource:"/Home_Video.mp4",
      inputVideoUrl:'/Home_Video.mp4'
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playerSource !== prevState.playerSource) {
      this.player.load();
    }
  }

  handleValueChange(e) {
    const { value } = e.target;
    this.setState({
      inputVideoUrl: value
    });
  }

  updatePlayerInfo() {
    const { inputVideoUrl } = this.state;
    this.setState({
      playerSource: inputVideoUrl
    });
  }

  render() {
    return (
      <div>
        <div className='lg:!pt-0 mb-1'>
        <Player  videoId="video-1" muted autoPlay fluid>
          <source src={this.state.playerSource} />
        </Player>
        </div>
      </div>
    );
  }
}
