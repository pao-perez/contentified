import PropTypes from 'prop-types';
import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share';
import Section from '../components/core/section';
import styled from 'styled-components';

const StyledSection = styled(Section)`
    display: flex;
    flex-direction: column;
`;

const Share = ({ title = '', url, twitterHandle = '', tags = [] }) => {
  return (
    <StyledSection>
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

      <EmailShareButton url={url} subject={title}>
        <EmailIcon size={40} round />
      </EmailShareButton>
    </StyledSection>);
};

Share.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Share;
