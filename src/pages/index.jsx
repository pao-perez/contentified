import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import Image from '../components/image';
import Tags from '../components/tags';
import useBlogList from '../hooks/use-blog-list';
import { SearchContext } from '../providers/search';
import unflattenNodes from '../utils/unflatten-nodes';
import './index.scss';


const IndexPage = () => {
  const { search } = useContext(SearchContext);
  const { index, store, nodes } = useBlogList();
  const searchResults = useFlexSearch(search, index, store);
  const searchResultsNodes = unflattenNodes(searchResults);
  const blogList = search.trim() === '' ? nodes : searchResultsNodes;

  return (
    <div className="home">
      <section className="blog-list">
        <ul>
          {blogList.map((node) => (
            <li key={node.id}>
              <Link to={node.fields.slug}>
                <article className="blog-item">
                  <header className="item-header">
                    <h1 className="title">{node.frontmatter.title}</h1>
                    <h2 className="meta">
                      <span className="author">{node.frontmatter.author}</span>
                      <span className="date">
                        <time dateTime="true">{node.frontmatter.date}</time>
                      </span>
                      <Tags tags={node.frontmatter.tags} />
                    </h2>
                  </header>
                  <main className="item-main">
                    <p>{node.excerpt}</p>
                  </main>
                  <footer className="item-footer">
                    <Image
                      image={node.frontmatter.thumbnail}
                      alt="Featured Image Thumbnail"
                    />
                  </footer>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default IndexPage;
