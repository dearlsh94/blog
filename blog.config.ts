export default {
  origin: 'treefeely',
  site: 'https://treefeely.com',
  author: {
    displayName: 'Ethan',
  },
  seo: {
    title: 'treefeely',
    name: 'treefeely',
    description: 'I write to survive within the crisis of narrative.',
  },
  articles: {
    contentDirectory: 'content',
    generatedDirectory: '.generated',
    articlesDirectory: 'articles',
  },
  content: {
    directory: 'content',
    source: 'https://github.com/dearlsh94/blog/edit/main/content/',
  },
  image: {
    main: '/main-image.png', // public
    extensions: ['**/*.png', '**/*.jpg', '**/*.jpeg'],
  },
  ga: {
    id: 'G-YK9YNZ05GD' // G-XXXXXXXXXX
  },
  comments: {
    repo: 'dearlsh94/blog-comments',
  },
  heroText: `
  서사의 위기 속에 살아남기 위해 글을 씁니다.
  `,
  contacts: {
    github: 'https://github.com/dearlsh94',
    linkedin: 'https://www.linkedin.com/in/dearlsh94',
    brunch: 'https://brunch.co.kr/@b22ccabb9fb248b'
  }
};
