import type { ReactNode } from 'react'
import { useState } from 'react'

import { Content } from '../content/Content'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

type PlaygroundSectionProps = {
  title: string
  children: ReactNode
}

function PlaygroundSection({ title, children }: PlaygroundSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <div className="text-base text-gray-700">{children}</div>
    </section>
  )
}

function Counter() {
  const [value, setValue] = useState(0)

  return (
    <div className="inline-flex items-center gap-3 rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm">
      <button
        type="button"
        onClick={() => setValue((v) => v - 1)}
        className="rounded border border-gray-300 bg-white px-2 py-1 hover:bg-gray-100"
      >
        -
      </button>
      <span className="min-w-[2rem] text-center font-mono text-base">
        {value}
      </span>
      <button
        type="button"
        onClick={() => setValue((v) => v + 1)}
        className="rounded border border-gray-300 bg-white px-2 py-1 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  )
}

export default function PlaygroundPage() {
  return (
    <Main
      meta={
        <Meta
          title="Playground"
          description="A little sandbox for experiments, snippets, and random ideas."
        />
      }
    >
      <Content>
        <h1 className="mb-4 text-2xl font-semibold">Playground</h1>
        <p className="mb-6 text-base text-gray-700">
          This is the sandbox. Things here might be broken, experimental, or
          just weird on purpose. Perfect place to try UI ideas, code snippets,
          or anything you don&apos;t want to ship to the main pages yet.
        </p>

        <PlaygroundSection title="Tiny state demo">
          <p className="mb-2">
            Here&apos;s a super small interactive counter, just for fun:
          </p>
          {/* Minimal client-side interaction without going too wild */}
          <Counter />
        </PlaygroundSection>

        <PlaygroundSection title="Future ideas">
          <ul className="list-disc pl-6">
            <li>Animation tests for buttons and tabs</li>
            <li>Layout prototypes before using them on real pages</li>
            <li>API latency / loading skeleton demo</li>
          </ul>
        </PlaygroundSection>
      </Content>
    </Main>
  )
}
