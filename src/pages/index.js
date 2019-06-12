import React from "react"
import { Transition, animated, config } from "react-spring/renderprops"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"

class IndexPage extends React.Component {
  state = {
    error: null,
    images: [],
    index: 0,
    loading: true,
    projects: [],
  }

  componentDidMount() {
    this.fetchProjects()
  }

  fetchProjects() {
    fetch(`http://localhost:3000/api/projects`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          projects: data.projects,
          isLoading: false,
          images: data.projects.map(project => {
            return style => (
              <animated.div
                className="img-container"
                onClick={this.changeImage}
                style={{ ...style, backgroundImage: `url(${project.image})` }}
              />
            )
          }),
        })
      })
      .catch(error => this.setState({ error, isLoading: false }))
  }

  changeImage = () => {
    this.setState(state => ({
      index: (state.index + 1) % state.projects.length,
    }))
  }

  render() {
    const { isLoading, projects, index, error } = this.state

    if (error) console.log(error)

    return (
      <Layout darkTheme={true}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section className="left">
          <Nav
            page="home"
            projectTitle={projects.length ? projects[index].title : ""}
          />
        </section>
        <section className="right">
          {!isLoading ? (
            <div className="img-wrapper">
              <Transition
                native
                reset
                unique
                config={config.default}
                items={this.state.index}
                from={{ opacity: 0, transform: "translate3d(100%,0,0)" }}
                enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                leave={{ opacity: 0, transform: "translate3d(-50%,0,0)" }}
              >
                {index => this.state.images[index]}
              </Transition>
            </div>
          ) : (
            <h3>Loading...</h3>
          )}
          {error && <p>An error occurred. Please try again later.</p>}
        </section>
      </Layout>
    )
  }
}

export default IndexPage
