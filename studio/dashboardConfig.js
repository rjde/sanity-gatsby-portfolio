export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df536cdb041c731b4f32cd8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gi9hoyaf',
                  apiId: 'd596f1e4-6a3e-4058-8a44-78c0ebfac721'
                },
                {
                  buildHookId: '5df536cd9be67d5e576e8e1e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hnec7d5a',
                  apiId: 'f4c3125b-0fe3-44a2-81ee-f7d3b8687733'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rjde/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hnec7d5a.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
