import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = props => {
  const labels = props.data.site.siteMetadata.labels
  const aboutTags = [
    "react",
    "nodejs",
    "html",
    "css",
    "javascript",
    "git",
    "gatsby",
    "graphql",
    "vscode",
    "mongodb",
    "php",
    "angular",
    "java",
    "ruby",
    "python",
  ]
  const tags = {}
  labels.forEach(label => {
    aboutTags.forEach(tag => {
      if (tag === label.tag) {
        tags[tag] = label.name
      }
    })
  })

  return (
    <Layout>
      <SEO title="About" />
      <div className="post-page-main">
        <div className="sidebar px-4 py-2">
          <Sidebar />
        </div>

        <div className="post-main">
          <SEO title="About" />
          <div className="mt-3">
            <h2 className="heading">About</h2>
            <p>
              <i>
                Syntax.Rocks is a place where developers could collaborate with
                one another to horn their skills in their domain. From basics of
                coding with different languages to deep concepts in programming,
                [Syntax.Rocks] tries to deliver an easy experience to developers
                learning these concepts to get better at their craft.
              </i>
            </p>
            <br />
            <h4>Available Topics</h4>
            <div>
              <div className="ml-5">
                <TechTag
                  tag="react"
                  tech="React"
                  name={tags["react"]}
                  size={20}
                  color="deepskyblue"
                />
                <TechTag
                  tag="nodejs"
                  tech="Node.js"
                  name={tags["nodejs"]}
                  size={20}
                  color="lightgreen"
                />
                <TechTag
                  tag="html"
                  tech="HTML"
                  name={tags["html"]}
                  size={20}
                  color="darkorange"
                />
                <TechTag
                  tag="css"
                  tech="CSS"
                  name={tags["css"]}
                  size={20}
                  color="teal"
                />
                <TechTag
                  tag="git"
                  tech="Git"
                  name={tags["git"]}
                  size={20}
                  color="white"
                />
                <TechTag
                  tag="javascript"
                  tech="Javascript"
                  name={tags["javascript"]}
                  size={20}
                  color="yellow"
                />
                <TechTag
                  tag="python"
                  tech="Python"
                  name={tags["python"]}
                  size={20}
                  color="deepskyblue"
                />
                <TechTag
                  tag="ruby"
                  tech="Ruby"
                  name={tags["ruby"]}
                  size={20}
                  color="crimson"
                />
                <TechTag
                  tag="java"
                  tech="Java"
                  name={tags["java"]}
                  size={20}
                  color="wheat"
                />
                <TechTag
                  tag="angular"
                  tech="Angular"
                  name={tags["angular"]}
                  size={20}
                  color="red"
                />
                <TechTag
                  tag="php"
                  tech="Php"
                  name={tags["php"]}
                  size={20}
                  color="violet"
                />
                <TechTag
                  tag="mongodb"
                  tech="MongoDB"
                  name={tags["mongodb"]}
                  size={20}
                  color="green"
                />
                <TechTag
                  tag="vscode"
                  tech="VsCode"
                  name={tags["vscode"]}
                  size={20}
                  color="deepskyblue"
                />
                <TechTag
                  tag="graphql"
                  tech="GraphQL"
                  name={tags["graphql"]}
                  size={20}
                  color="hotpink"
                />
                <TechTag
                  tag="gatsby"
                  tech="Gatsby"
                  name={tags["gatsby"]}
                  size={20}
                  color="rebeccapurple"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query aboutQuery {
    site {
      siteMetadata {
        labels {
          tag
          tech
          name
          size
          color
        }
      }
    }
  }
`

export default AboutPage
