module.exports = {
siteMetadata: {
title: `JavaScript4React`,
siteUrl: `https://localhost/8000`,
description: `Learn JavaScript Essentials For React Development`
},
plugins: [
    `gatsby-transformer-remark`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `pages`,
            path: `${__dirname}/src/pages/`,
        },
    },
]

}