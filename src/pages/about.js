// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout.js'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

// Step 3: Export your component
export const Head = () => <title>Arsewipe</title>

export default AboutPage