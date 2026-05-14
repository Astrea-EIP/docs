import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Official engineering standards and cross-repository guidance for Astrea-EIP.">
      <header className={styles.heroBanner}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className={styles.lead}>
            Use this handbook to understand repository boundaries, contribution
            standards, CI requirements, release rules, and deployment
            orchestration.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/intro">
              Open the handbook
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/contribution/getting-started">
              Start contributing
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.mainContent}>
        <section className="container">
          <div className={styles.grid}>
            <article className={styles.card}>
              <Heading as="h2">Architecture</Heading>
              <p>
                Repository boundaries, environment ownership, release strategy,
                and documentation governance.
              </p>
              <Link to="/architecture/overview">Review architecture rules</Link>
            </article>
            <article className={styles.card}>
              <Heading as="h2">Contribution</Heading>
              <p>
                Workflow from issue to merge, branch naming, Conventional
                Commits, reviews, and mandatory repository files.
              </p>
              <Link to="/contribution/getting-started">
                Read contribution rules
              </Link>
            </article>
            <article className={styles.card}>
              <Heading as="h2">Workflows</Heading>
              <p>
                CI, semantic tagging, documentation synchronization, and release
                flow across repositories.
              </p>
              <Link to="/workflows/ci">Inspect workflow standards</Link>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
