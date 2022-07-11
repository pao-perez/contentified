import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Font from '../components/font';
import SearchAction from '../components/search-action';
import SEO from '../components/seo';
import ThemeToggle from '../components/theme-toggle';
import useSiteMetadata from '../hooks/use-site-metadata';
import styled from 'styled-components';
import Div from '../components/core/div';
import Header from '../components/core/header';
import Main from '../components/core/main';
import Footer from '../components/core/footer';
import { ThemeContext } from '../providers/theme';

const StyledDiv = styled(Div)`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 10fr 1fr;
    grid-template-columns: auto;
    grid-template-areas:
        "header"
        "main"
        "footer";
`;

const StyledHeader = styled(Header)`
    font-family: ${props => props.theme.primary.font};
    color: ${props => props.theme.primary.text};
    background-color: ${props => props.theme.primary.background};
    position: fixed;
    width: 100%;
    z-index: 1;
    grid-area: header;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    >* {
        margin: 0px 5rem;
    }

    #brand {
        flex: 1 1 auto;
        justify-content: flex-start;
        color: ${props => props.theme.primary.text};
        font-family: ${props => props.theme.brand.font};
    }

    #header-actions {
        flex: 1 1 auto;
        display: flex;
        justify-content: flex-end;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        padding-bottom: 1rem;
    }
`;

const StyledMain = styled(Main)`
    grid-area: main;
    padding-top: 7rem;
    font-family: ${props => props.theme.secondary.font};
    color: ${props => props.theme.secondary.text};
    background-color: ${props => props.theme.secondary.background};
`;

const StyledFooter = styled(Footer)`
    font-family: ${props => props.theme.primary.font};
    color: ${props => props.theme.primary.text};
    background-color: ${props => props.theme.primary.background};
    z-index: 1;
    padding: 3rem;
    grid-area: footer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: large;
    font-weight: normal;
`;

const Layout = ({ children, location }) => {
  const { theme } = useContext(ThemeContext);
  const {
    siteDescription,
    siteUrl,
    siteTags,
    siteAuthor,
    siteIcon,
    siteTitle,
    siteLang,
    siteCharSet,
    siteViewport,
  } = useSiteMetadata();

  return (
    <>
      <SEO
        description={siteDescription}
        url={siteUrl}
        tags={siteTags}
        author={siteAuthor.name}
        icon={siteIcon}
        siteTitle={siteTitle}
        siteLang={siteLang}
        siteCharSet={siteCharSet}
        siteViewport={siteViewport}
      />
      <Font />
      <StyledDiv>
        <StyledHeader theme={theme}>
          <Link to='/' style={{ textDecoration: 'none' }} className='center'>
            <h1 id='brand' className='center'>{siteTitle}</h1>
          </Link>
          <section id='header-actions'>
            <ThemeToggle />
            <SearchAction theme={theme} isHidden={location.pathname !== '/'} />
          </section>
        </StyledHeader>

        <StyledMain theme={theme}>{children}</StyledMain>

        <StyledFooter theme={theme}>
          <p className='center'>© 2022 Contentified | All Rights Reserved</p>
        </StyledFooter>
      </StyledDiv>
    </>
  );
};

export default Layout;
