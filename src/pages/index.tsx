import React, { JSX } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (

    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs">
            Get Started
          </Link>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/category/developers"
            style={{ marginLeft: '1rem' }}>
            Developer Docs
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for SuperSol - Cross-Chain Infrastructure">
      <HomepageHeader />
      <main>
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--12">
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Explore SuperSol</h2>
                <p className={styles.sectionDescription}>
                  Super Sol is a cross-chain infrastructure designed to enable seamless communication 
                  between blockchains. With Router, developers can build truly cross-chain applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}