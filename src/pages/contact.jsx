import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';

const ContactPage = ({ data }) => {
  const email = data.site.siteMetadata.founder.email;
  return (
    <Layout>
      <article>
        <h1>Get in touch</h1>
        <p>
          Drop me an email at <a href={`mailto:${email}`}> {email} or fill up the form below!</a>
        </p>
        <form aria-label="Contact">
          <label>
            <span>Contact</span>
            <textarea>Anything you'd like to talk about!</textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        founder {
          email
        }
      }
    }
  }
`;

export default ContactPage;
