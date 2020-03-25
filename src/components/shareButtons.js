import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faFacebookF, faReddit, faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
    RedditShareButton
} from 'react-share'

const Share = ({ socialConfig, tags }) => (
	<div className="share-wrapper">
		<FacebookShareButton url={socialConfig.config.url} className="share-button facebook" >
			<FontAwesomeIcon icon={faFacebookF} />
		</FacebookShareButton>
		<TwitterShareButton url={socialConfig.config.url} className="share-button twitter" title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags} >
            <FontAwesomeIcon icon={faTwitter} />
		</TwitterShareButton>
		<LinkedinShareButton url={socialConfig.config.url} className="share-button linkedin" title={socialConfig.config.title} >
            <FontAwesomeIcon icon={faLinkedinIn} />
		</LinkedinShareButton>
		<RedditShareButton url={socialConfig.config.url} className="share-button reddit" title={socialConfig.config.title} >
            <FontAwesomeIcon icon={faReddit} />
		</RedditShareButton>
	</div>
);

Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};

export default Share;