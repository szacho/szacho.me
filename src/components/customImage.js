import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function renderImage(props) {
    let normalizedProps = props
    if (props.fluid && props.fluid.presentationWidth) {
      normalizedProps = {
        ...props,
        style: {
          ...(props.style || {}),
          maxWidth: props.fluid.presentationWidth,
          margin: "0 auto", // Used to center the image
        },
      }
    }  
    return <Img {...normalizedProps} fluid={props.node.childImageSharp.fluid} />
}

const Image = ({ imagePath }) => (
    <StaticQuery
        query={graphql`
            query {
                images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
                edges {
                    node {
                        extension
                        relativePath
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                                presentationWidth
                            }
                        }
                    }
                }
                }
            }
        `}
        render={({ images }) => renderImage(images.edges.find(image => image.node.relativePath === imagePath)
        )}
    />
)



export default Image;