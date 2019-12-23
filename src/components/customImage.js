import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function renderImage(props, style, alt) {
    let normalizedProps = props
    if (style === undefined) {
        style = {}
    }
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
    let styles = {width: '300px', margin: '0 auto'};
    return <Img {...normalizedProps} fluid={props.node.childImageSharp.fluid} style={style} alt={alt} />
}

function Image(props) {
    console.log(props)
    return (
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
        render={({ images }) => renderImage(images.edges.find(image => image.node.relativePath === props.imagePath), props.styles, props.alt
        )}
    />
)}




export default Image;