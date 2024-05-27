import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import Translate, { translate } from '@docusaurus/Translate';

export default function Home() {
  return (
    <Layout>
      <h1>
        <Translate>Welcome to my website</Translate>
      </h1>
      <main>
        <Translate
          id='homepage.visitMyBlog'
          description='The homepage message to ask the user to visit my blog'
          values={{
            blogLink: (
              <Link to='https://docusaurus.io/blog'>
                <Translate
                  id='homepage.visitMyBlog.linkLabel'
                  description='The label for the link to my blog'
                >
                  blog
                </Translate>
              </Link>
            ),
          }}
        >
          {'You can also visit my {blogLink}'}
        </Translate>

        <img
          src='/img/home.png'
          alt={translate({
            message: 'Home icon',
            description: 'The homepage icon alt message',
          })}
        />
      </main>
    </Layout>
  );
}
