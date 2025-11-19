import type { ReactNode } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { AppConfig } from '../utils/AppConfig'

export type MainProps = {
  meta: ReactNode
  children: ReactNode
}

type NavItem = {
  href: string
  label: string
  external?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/ssr-test/', label: 'SSR' },
  { href: '/playground/', label: 'Playground' },
  { href: '/about/', label: 'About' },
  {
    href: 'https://github.com/forgeon-apps/nextjs-boilerplate',
    label: 'GitHub',
    external: true,
  },
]

function NavTab({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const baseClasses =
    'inline-flex items-center rounded-md px-4 py-1.5 text-sm font-medium transition-colors border'

  const activeClasses =
    'bg-gray-900 text-white border-gray-900 shadow-sm cursor-default'
  const inactiveClasses =
    'bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200 hover:text-gray-900'

  const className = `${baseClasses} ${
    isActive ? activeClasses : inactiveClasses
  }`

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {item.label}
      </a>
    )
  }

  return (
    <Link href={item.href} passHref>
      <a className={className}>{item.label}</a>
    </Link>
  )
}

export function Main({ meta, children }: MainProps) {
  const year = new Date().getFullYear()
  const router = useRouter()

  return (
    <div className="w-full px-3 text-gray-700 antialiased md:px-0">
      {meta}

      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">
          <div className="pt-16 pb-6">
            <h1 className="text-3xl font-semibold text-gray-900">
              {AppConfig.title}
            </h1>
            <p className="mt-2 text-xl text-gray-700">
              {AppConfig.description}
            </p>
          </div>

          <nav className="pb-4">
            <div className="inline-flex flex-wrap gap-2 rounded-md bg-gray-50 p-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  !item.external &&
                  (router.pathname === item.href ||
                    (item.href !== '/' &&
                      router.pathname.startsWith(item.href.replace(/\/$/, ''))))

                return (
                  <NavTab key={item.label} item={item} isActive={isActive} />
                )
              })}
            </div>
          </nav>
        </header>

        <main className="py-5 text-xl">{children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm text-gray-600">
          © {year} {AppConfig.title}. Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          by{' '}
          <a
            href="https://forgeon.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Forgeon
          </a>
        </footer>
      </div>
    </div>
  )
}
