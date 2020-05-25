import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline} from 'react-icons/ti/index'
import { formatTweet, formatDate } from '../utils/helpers';
import { saveToggleLike } from '../redux/actions/tweets';

class Tweet extends Component {

    toParent = (event, parentId) => {
        event.preventDefault();

    }

    handleLike = (event) => {
        const { dispatch, tweet, authedUser } = this.props;
        event.preventDefault();
        dispatch(saveToggleLike({ authedUser, tweet }));

    }

    render() {
        const {
            name, avatar, timestamp, text, hasLiked, likes, replies, parent
        } = this.props.tweet;
        console.log("tweet",name);
        return (
			<div className="tweet">
				<img
					src={avatar}
					alt={`Avatar of ${name}`}
					className="avatar"
				/>
				<div className="tweet-info">
					<div>
						<span>{name}</span>
						<div>{formatDate(timestamp)}</div>
						{parent && (
							<button
								className="replying-to"
								onClick={(e) => this.toParent(e, parent.id)}
							>
								Replying to @{parent.author}
							</button>
						)}
						<p>{text}</p>
					</div>
					<div className="tweet-icons">
						<TiArrowBackOutline className="tweet-icon" />
						<span>{replies !== 0 && replies}</span>
						<button
							className="heart-button"
							onClick={event =>this.handleLike(event)}
						>
							{hasLiked === true ? (
								<TiHeartFullOutline
									color="#e0245e"
									className="tweet-icon"
								/>
							) : (
								<TiHeartOutline className="tweet-icon" />
							)}
						</button>
						<span>{likes !== 0 && likes}</span>
					</div>
				</div>
			</div>
		);
    }
}

function mapStateToProps( { tweets, users, authedUser }, { id } ) {
    const tweet = tweets[ id ] ;
    const parent = tweets[tweet.replyingTo];

    return {
        authedUser,
        tweet: formatTweet( tweet, users[ tweet.author ], authedUser, parent )
    }

}

export default connect(mapStateToProps)( Tweet );