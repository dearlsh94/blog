export default {
  origin: 'treefeely',
  site: 'https://treefeely.com',
  author: {
    displayName: 'Ethan',
  },
  seo: {
    title: 'treefeely',
    name: 'treefeely',
    description: 'Articles are contributed, mostly about the web, but also the author\'s own thoughts; writing is not their profession, but they retire to write fragrant pieces.',
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
  더 따뜻하고 편리한 세상이 되기를 바라며 개발자로 일하고 있는 이승환(Ethan)입니다. 종종 글을 씁니다.
  `,
  contacts: {
    github: 'https://github.com/dearlsh94',
    linkedin: 'https://www.linkedin.com/in/dearlsh94',
  }
};
