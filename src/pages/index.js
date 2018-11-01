import React from 'react'
import Layout from '../components/layout'
import ProjectCard from '../components/ProjectCard'
import DefaultImage from '../images/defaultProject.jpg'
import trackss from '../images/track-ss.png'
import assetss from '../images/asset-ss.png'
import redditss from '../images/reddit-ss.png'
import viewss from '../images/view-ss.png'

const ip = '35.197.46.142'
const trackml = <ProjectCard
  image={trackss}
  url={`http://${ip}:3000/`}
  title='Kaggle TrackML dataset visualization'
  description={`This app was developed to explore the Kaggle TrackML competition dataset. The data consists of multiple events, where each event consists of a set of 3D points specifying the locations of particles generated in a collision at the Large Hadron Collider at CERN. <br/><br/>
  More information about the competition is available <a href='https://www.kaggle.com/c/trackml-particle-identification/data'>here</a>.`}
  links={[
    { icon: 'github', link: 'https://github.com/viv-r/kaggle-trackml-event-viewer', 'text': 'Source' },
  ]}
/>

const reddit = <ProjectCard
  image={redditss}
  url={`http://${ip}:3001/`}
  title='LDA topic modelling on Reddit text'
  description={`
    This app was developed as a part of the HCDE 556 course at the University of Washington.
    (Team members:
      <a href='http://pf.lukewaninger.com/'>Luke Waninger</a>, <a href='https://github.com/moefasa/'>Mohammed Helal</a> and Me.) <br /> <br />

    This app is a d3.js visualization of the results of running a topic modelling algorithm on a text dataset obtained from scraping the /r/jokes subreddit. <br />`}
  links={[
    { icon: 'github', link: 'https://github.com/viv-r/topic-modeling-reddit', 'text': 'Source' },
    { icon: 'pdf', link: 'https://github.com/viv-r/topic-modeling-reddit/raw/master/docs/Final%20Paper.pdf', 'text': 'Project report' },
  ]}
/>
const kernelsvm = <ProjectCard
  image={DefaultImage}
  url='https://github.com/viv-r/kernel-svm-implementation/blob/master/digits_dataset_demo.ipynb'
  title='Kernel SVM implementation'
  description={`A library implementing the Kernel SVM algorithm using the huber-hinge loss function. The rbf, linear and polynomial kernels are currently implemented and multi-class classification is handled using the one-vs-one strategy.
  `}
  links={[
    { icon: 'github', link: 'https://github.com/viv-r/kernel-svm-implementation', 'text': 'Source' },
  ]}
/>

const asset = <ProjectCard
  image={assetss}
  url={`http://${ip}:8050/`}
  title='Asset allocation analysis'
  description={`
This app was developed as a part of the DATA 515 course at the University of Washington
(Team members: <a href='https://github.com/whamsy'>Vamsy Alturi</a>, <a href='https://github.com/WillBishop12'>Will Bishop</a> and Me). <br /> <br />
This is a Dash application that allows the user to: <br />

  - Compare asset portfolios composed of different stocks and bonds <br />
    - Compare quantitative measures of risk <br />
      - Standard deviation of return, historical probability of loss <br />
        - View risk and return over different time horizons <br /> `}
  links={[
    { icon: 'github', link: 'https://github.com/viv-r/asset-allocation', 'text': 'Source' },
    { icon: 'pdf', link: 'https://github.com/viv-r/asset-allocation/raw/master/doc/AssetAllocationDemo.pdf', 'text': 'Project report' },
  ]}
/>

const viewability = <ProjectCard
  image={viewss}
  url={`http://${ip}:1317/`}
  title='Tracking the visibility of ads on a webpage'
  description={`This tool was developed as a POC in using the <a href='https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementFromPoint'>elementFromPoint API</a> to keep track of DOM elements on a webpage.<br /> <br /> A large number of overlapping rectangles are randomly positioned on the webpage, and the proportion of area visible in the viewport is updated as the user scrolls/drags the elements around the page.`}
  links={[
    { icon: 'github', link: 'https://github.com/viv-r/viewability_tracking', 'text': 'Source' },
  ]}
/>

const IndexPage = () => (
  <Layout>
    {trackml}
    {reddit}
    {kernelsvm}
    {asset}
    {viewability}
  </Layout>
)

export default IndexPage
