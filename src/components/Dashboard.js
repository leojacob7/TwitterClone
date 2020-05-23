import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class Dashboard extends Component {

    render() {
        const { tweetIds } = this.props;
        return (
            <div>
                { tweetIds.map(tweetID => {
                    return <Tweet id={ tweetID } />
                }) }
            </div>
        );
    }
}

function mapStateToProps( { tweets } ) {
    return {
        tweetIds: Object.keys(tweets)
    }

}

export default  connect( mapStateToProps )( Dashboard );