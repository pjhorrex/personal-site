// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/index.scss'),
      ],
    })
}

module.exports = {
  siteName: 'pjhorrex.com',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/index/*.{md,yml}',
        typeName: 'IndexContent'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/events/*.md',
        typeName: 'Events'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/examples/*.md',
        typeName: 'Examples'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/resume.md',
        typeName: 'Resume'
      }
    }
  ],
  transformers: {
    remark: {}
  },
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    const svgRule = config.module.rule('svg')

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })

    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}