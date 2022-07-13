const unflattenNodes = (flatNnodes = []) =>
  flatNnodes.map((node) => {
    const { id, excerpt, slug, title, tags, author, date, thumbnail, featured } = node;
    return {
      id,
      excerpt,
      fields: { slug },
      frontmatter: { title, tags, author, date, thumbnail, featured },
    };
  });

export default unflattenNodes;
