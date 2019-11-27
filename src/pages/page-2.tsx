import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <h1>Page 2</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
