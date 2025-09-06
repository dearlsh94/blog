import { generateRobotsTxt } from '~/utils/robotstxt/generate-robotstxt';

export function loader() {
  return generateRobotsTxt([
    { type: 'sitemap', value: 'https://treefeely.com/sitemap.xml' },
  ]);
}
