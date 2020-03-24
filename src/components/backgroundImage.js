import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'


export default function({ fileName, children, className, tagName }) {
        const data = useStaticQuery(
            graphql`
                query {
                    placeholderImage: allFile(
                        filter: { sourceInstanceName: { eq: "images" } }
                    ) {
                        edges {
                            node {
                                relativePath
                                childImageSharp {
                                    fluid(maxWidth: 2480, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
            `
        );
    console.log(data)
    const image = data.placeholderImage.edges.find(
        ({ node }) => node.relativePath === fileName
    ).node;
    if (!image) {
        return null;
    }

    const backgroundFluidImageStack = [
        image.childImageSharp.fluid,
        `radial-gradient(ellipse closest-side, rgba(0, 0, 0, 0.4), #1B1C1E)`
      ].reverse()

    return (
            <BackgroundImage
                Tag={tagName}
                className={className}
                fluid={backgroundFluidImageStack}
                style={{
                    backgroundColor: `transparent`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center center`,
                }}>
                {children}
            </BackgroundImage>
    );
}
