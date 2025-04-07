import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Voyager Bridge',
    svg: require('@site/static/img/voyager-icon.svg').default,
    description: (
      <>
        Transfer assets seamlessly across multiple blockchains with Voyager, 
        Router's next-gen cross-chain bridge with enhanced security and user experience.
      </>
    ),
  },
  {
    title: 'CrossTalk Messaging',
    svg: require('@site/static/img/crosstalk-icon.svg').default,
    description: (
      <>
        Enable smart contracts on different chains to communicate with each other 
        using CrossTalk, our secure cross-chain messaging framework.
      </>
    ),
  },
  {
    title: 'PathFinder API',
    svg: require('@site/static/img/pathfinder-icon.svg').default,
    description: (
      <>
        Find the most optimal routes for cross-chain transactions with PathFinder, 
        our API service that ensures the best rates and lowest fees.
      </>
    ),
  },
];

function Feature({title, svg: Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconContainer}>
          {/* <Svg className={styles.featureIcon} role="img" /> */}
        </div>
        <div className="text--center">
          {/* <h3 className={styles.featureTitle}>{title}</h3> */}
        </div>
        {/* <div className={styles.featureDescription}>{description}</div> */}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}