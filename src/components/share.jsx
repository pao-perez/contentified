import React from 'react';

import './share.scss';

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
  <article className="share">
    <FacebookShareButton url={url}>
      <FacebookIcon size={40} round />
    </FacebookShareButton>

    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
    >
      <TwitterIcon size={40} round />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon size={40} round />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon size={40} round />
    </RedditShareButton>
  </article>
);
export default Share;
