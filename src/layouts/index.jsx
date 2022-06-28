import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Font from '../components/font';
import SearchBar from '../components/search-bar';
import SEO from '../components/seo';
import ThemeToggle from '../components/theme-toggle';
import useSiteMetadata from '../hooks/use-site-metadata';
import styled from 'styled-components';
import Wrapper from '../components/core/wrapper';
import Header from '../components/core/header';
import Main from '../components/core/main';
import Footer from '../components/core/footer';
import { ThemeContext } from '../providers/theme';
import '../styles/_base.scss';

const StyledWrapper = styled(Wrapper)`
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
    background-color: ${props => props.theme.primary.background};
    z-index: 1;
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

        form.search {
            margin-left: 1rem;

            input {
                outline: none;
                padding: 1rem;
                border: none;
                border-radius: .3rem;
                color: black;
                background-color: rgba(255, 255, 255, 0.8);
                font-family: ${props => props.theme.primary.font};
                font-weight: bolder;
                font-size: large;
            }
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column;

        .search {
            padding-bottom: 1rem;
        }
    }
`;

const StyledMain = styled(Main)`
    grid-area: main;
    margin-top: 7rem;
`;

const StyledFooter = styled(Footer)`
    font-family: ${props => props.theme.primary.font};
    background-color: ${props => props.theme.primary.background};
    z-index: 1;
    grid-area: footer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    font-size: large;
    font-weight: normal;

    p {
        color: ${props => props.theme.primary.text};
    }
`;

const Layout = ({ children, location }) => {
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);
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
      <StyledWrapper>
        <StyledHeader theme={theme}>
          <Link to='/' style={{ textDecoration: 'none' }} className='center'>
            <h1 id='brand' className='center'>{siteTitle}</h1>
          </Link>
          <section id='header-actions'>
            <ThemeToggle />
            <SearchBar isHidden={location.pathname !== '/'} />
          </section>
        </StyledHeader>

        <StyledMain>{children}</StyledMain>

        <StyledFooter theme={theme}>
          <p className='center'>© 2022 Contentified | All Rights Reserved</p>
        </StyledFooter>
      </StyledWrapper>
    </>
  );
};

export default Layout;
