import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Index=({data})=>{
    const { edges } = data.allMarkdownRemark;
    return(<div>
     <Layout />
     {edges.map((edge)=>{
         const {frontmatter}= edge.node;
         return (<div key={frontmatter.path}>
            {frontmatter.title}
            </div>)
     })}
    </div>)
}


export const query = graphql `
query HomepageQuery {
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    title
                    path
                    date
                }
            }
        }
    }
}

`

export default Index;