const unflattenNodes = (flatNnodes = []) =>
  flatNnodes.map((node) => {
    const { id, excerpt, slug, title, tags, author, date, thumbnail } = node;
    return {
      id,
      excerpt,
      fields: { slug },
      frontmatter: { title, tags, author, date, thumbnail },
    };
  });

export default unflattenNodes;
