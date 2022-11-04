export default {
  widgets: [
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
                  buildHookId: '6364d248ec3a886cdb770aa6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n8dyzp7s',
                  apiId: '506a4569-485a-4904-acc8-84ea0edf29b0'
                },
                {
                  buildHookId: '6364d248690f426a4149a0fb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4nt1qnqj',
                  apiId: '9de483b9-a22f-4c6f-aa73-2f66a874ef57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/miroslavbucek/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4nt1qnqj.netlify.app', category: 'apps'}
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
