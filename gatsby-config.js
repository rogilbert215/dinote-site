module.exports = {
  siteMetadata: {
    title: 'dinote',
    description: 'Crowdfunding platform for digital term notes.',
    keywords: 'crowdfunding, term notes, digital notes, crypto, crypto currency, blockchain, '
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'qyk800exqaet',
        accessToken: '9b70a4e47a9d20f9b95864d102a342e607ea39f9e039526b3f79fcf495d2d135'
      }
    }
  ],
}