import type { GetServerSideProps } from 'next'

import { Content } from '../content/Content'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

export type SsrTestPageProps = {
  time: string
  host: string | null
}

export default function SsrTestPage({ time, host }: SsrTestPageProps) {
  return (
    <Main
      meta={
        <Meta
          title="SSR Test"
          description="A small page to verify server-side rendering is working."
        />
      }
    >
      <Content>
        <h1 className="mb-4 text-2xl font-semibold">SSR Test</h1>

        <p className="mb-4">
          This page is rendered on the server on every request using{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">
            getServerSideProps
          </code>
          .
        </p>

        <div className="mb-4 rounded border border-gray-200 bg-gray-50 p-4 text-sm">
          <div className="mb-2 font-semibold text-gray-800">
            Server render timestamp
          </div>
          <pre className="whitespace-pre-wrap text-gray-700">{time}</pre>
        </div>

        {host && (
          <p className="text-sm text-gray-500">
            Request host detected on the server:{' '}
            <span className="font-mono">{host}</span>
          </p>
        )}
      </Content>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps<SsrTestPageProps> = async (
  context
) => {
  const time = new Date().toISOString()
  const host = (context.req.headers.host as string) || null

  return {
    props: {
      time,
      host,
    },
  }
}
