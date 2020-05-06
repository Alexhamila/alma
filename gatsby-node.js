/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const { paginate } = require('gatsby-awesome-pagination');

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        
        return result;
      })
    )
  });
  
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    
    const getArticles = makeRequest(graphql, `
    {
        allStrapiEmission(sort: {fields: Date order: DESC}) {
            edges{
                node {
                    Date
                    Titre
                    Description
                    Categorie
                    Link
                }
            }
        }
    }
      `).then(result => {

        paginate({
            createPage,
            items: result.data.allStrapiEmission.edges,
            itemsPerPage: 10,
            pathPrefix: "/radio/emissions",
            component: path.resolve('src/components/radio/emissions.js')
        });
    
    });
}