import { Content } from '../content/Content'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

export default function AboutPage() {
  return (
    <Main
      meta={
        <Meta
          title="About this blog"
          description="Notes on building, breaking, and shipping software."
        />
      }
    >
      <Content>
        <p>
          This space is my little lab for software stories — experiments with
          code, notes from real deployments, and lessons learned from shipping
          things that don’t always work the first time (or the second).
        </p>

        <p>
          I write about the parts of tech that actually show up in day-to-day
          work: debugging weird bugs, designing systems that can survive
          production, and building tools that make developers faster instead of
          slower. Some posts are tiny snippets you can copy-paste, others are
          deeper dives into how I think about architecture, DX, and reliability.
        </p>

        <p>
          If you like building things, breaking them, and then making them a bit
          less fragile each time — you’re in the right place.
        </p>
      </Content>
    </Main>
  )
}
