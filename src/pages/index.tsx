import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Index</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
