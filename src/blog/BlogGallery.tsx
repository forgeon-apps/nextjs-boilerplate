import { format } from 'date-fns'
import Link from 'next/link'

import { Pagination, IPaginationProps } from '../pagination/Pagination'
import { PostItems } from '../utils/Content'

export type BlogGalleryProps = {
  posts: PostItems[]
  pagination: IPaginationProps
}

export function BlogGallery({ posts, pagination }: BlogGalleryProps) {
  if (!posts?.length) {
    return (
      <>
        <p className="text-sm text-gray-500">No posts yet.</p>
        <Pagination previous={pagination.previous} next={pagination.next} />
      </>
    )
  }

  return (
    <section className="space-y-4">
      <ul className="divide-y divide-gray-200">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="flex items-baseline justify-between py-3 gap-4"
          >
            <div className="min-w-0">
              <Link href="/posts/[slug]" as={`/posts/${post.slug}`} passHref>
                <a className="block text-base font-medium text-gray-900 hover:underline">
                  {post.title}
                </a>
              </Link>
            </div>

            <time
              className="shrink-0 text-sm text-gray-500 text-right"
              dateTime={post.date}
            >
              {format(new Date(post.date), 'LLL d, yyyy')}
            </time>
          </li>
        ))}
      </ul>

      <Pagination previous={pagination.previous} next={pagination.next} />
    </section>
  )
}
