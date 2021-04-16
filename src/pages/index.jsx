import React from "react";

import "./index.scss";
import Layout from "../components/layout";
import Share from "../components/share";
import Subscribe from "../components/subscribe";

const IndexPage = ({ children }) => (
  <Layout>
    <main>
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
    </main>

    <aside aria-label="Sidebar">
      <Share />
      <Subscribe />
    </aside>
  </Layout>
);
export default IndexPage;

/**
 * 3. Write all mark up (No styling / logic) in index page
 * 4. Break down Markup
 * 5. Add styling
 * 6. Add logic
 */
