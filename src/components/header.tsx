import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
]

const defaultOgImageUrl = 'https://blog.gotch.work/og-image.png'

export default ({ pageTitle = '', ogImageUrl = '' }) => {
  const { pathname } = useRouter()
  const siteName = 'GW'
  const pageName = `${pageTitle ? `${pageTitle} |` : ''} ${siteName}`
  return (
    <header className={styles.header}>
      <Head>
        <title>{pageName}</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta name="og:title" content={pageName} />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@tofuaaa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl || defaultOgImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
