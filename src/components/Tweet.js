import React, { Component } from 'react'
import { formatTweet } from '../utils/helpers'
import { connect } from 'react-redux'
import { TiArrowBackOutline } from 'react-icons/ti'

class Tweet extends Component {
  render() {
    const { tweet } = this.props

    if (tweet === null) {
      return <p>This tweet doen't exists.</p>
    }

    return (
      <div className='tweet'>
        <div className='tweet-icon'>
          <TiArrowBackOutline className='tweet-icon' />
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, tweets, users }, { id }) {
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replayingTo] : null

  return {
    authedUser,
    tweet: tweet 
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  }
}

export default connect(mapStateToProps)(Tweet)