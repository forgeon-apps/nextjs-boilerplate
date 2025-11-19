// TODO: @mapbox/rehype-prism does not have typescript definition
// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export async function markdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    // @ts-ignore
    .use(rehypeRaw, { allowDangerousHtml: true }) // <-- process raw HTML like <img>
    .use(rehypePrism)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown)

  return String(file)
}
