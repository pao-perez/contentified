import React from 'react';

import Layout from '../components/layout';

const ContactPage = ({ data }) => (
  <Layout>
    <article>
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </article>
  </Layout>
);

export default ContactPage;
