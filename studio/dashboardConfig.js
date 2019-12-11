export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5df12b9bb0251f5d7fee98d4',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-r8j17cux',
                  apiId: '62245cb4-679d-4cc1-9725-7f61d6596ab9'
                },
                {
                  buildHookId: '5df12b9b71797bef292e7466',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-zofb6zo8',
                  apiId: '07a498cf-de34-4fb1-907f-4fe9dbbdac8d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JordiYahii/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-zofb6zo8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
