import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures/HomepageFeatures';
import ExploreContent from "../components/ExploreContent/ExploreContent";
import PopularResources from '../components/PopularResource/PopularResource';
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={useBaseUrl("img/ag2.svg")} width="400em" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Getting-Started">
            Getting Started - 3min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`AutoGen`}
      description="Enabling Next-Gen LLM Applications via Multi-Agent Conversation Framework">
      <HomepageHeader />
      <PopularResources />
      <HomepageFeatures />
      <ExploreContent />
    </Layout>
  );
}
