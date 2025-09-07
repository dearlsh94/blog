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
    id: 'G-TPFQF6SGEH' // G-XXXXXXXXXX
  },
  comments: {
    repo: 'dearlsh94/blog-comments',
  },
  heroText: `
  더 따뜻하고 편리한 세상이 되기를 바라며 개발자로 일하고 있습니다.\n
  서사의 위기 속에 살아남기 위해 글을 씁니다.
  `,
  contacts: {
    github: 'https://github.com/dearlsh94',
    linkedin: 'https://www.linkedin.com/in/dearlsh94',
  }
};
