import React from 'react';

const EmailNewsletter = () => (
  <article>
    <h2>Email NewsLetter</h2>
    <form aria-label="Subscribe to Newsletter">
      <label>
        <span>Subscribe</span>
        <input type="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  </article>
);

export default EmailNewsletter;
