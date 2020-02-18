export default function(title: string, type: 'category' | 'article'): string {
  if (type === 'category') {
    return 'https://en.wikipedia.org/wiki/Category:' + title.replace(/ /g, '_')
  } else {
    return 'https://en.wikipedia.org/wiki/' + title.replace(/ /g, '_')
  }
}
