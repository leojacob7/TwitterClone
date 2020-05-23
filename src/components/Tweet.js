import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

class Tweet extends Component {
    render() {
        const tweet = this.props;
        console.log("tweet",tweet);
        return (
            <div className="tweet">
                { "tweet" }
            </div>
        );
    }
}

function mapStateToProps( { tweets, users, authedUser }, { id } ) {
    const tweet = tweets[ id ] ;
    return {
        tweet: formatTweet( tweet, users[ id ], authedUser )
    }

}

export default connect(mapStateToProps)( Tweet );