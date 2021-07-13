import React from 'react';

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';

const Share = ({ title, url, twitterHandle, tags }) => (
  <div>
    <FacebookShareButton url={url}>
      <FacebookIcon size={40} round={true} />
    </FacebookShareButton>

    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
    >
      <TwitterIcon size={40} round={true} />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon size={40} round={true} />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon size={40} round={true} />
    </RedditShareButton>
  </div>
);
export default Share;
