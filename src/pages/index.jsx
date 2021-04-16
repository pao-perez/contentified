import React from "react";

import "./index.scss";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <article>
      <ul>
        <li>
          <article>
            <h1>
              <a href="#">Main article heading</a>
            </h1>
            <p>Article description</p>
          </article>
        </li>
        <li>
          <article>
            <h2>
              <a href="#">Article secondary heading</a>
            </h2>
            <p>Article description</p>
          </article>
        </li>
      </ul>
    </article>
  </Layout>
);
export default IndexPage;

/**
 * 3. Write all mark up (No styling / logic) in index page
 * 4. Break down Markup
 * 5. Add styling
 * 6. Add logic
 */
