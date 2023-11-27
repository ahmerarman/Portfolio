import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ahmer Arman Portfolio',
    description: 'Created on Next.js, Sanity.io, Tailwind CSS',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // get all of pages
    const pages = await getPages();

    return (
        <html lang="en">
            <body className='max-w-6xl mx-auto py-3'>
                <header className='flex items-center justify-between'>
                    <Link
                        href='/'
                        className='text-lg font-bold hover:text-blue-600 transition'
                    >
                    Home
                    </Link>

                    <div className='flex items-center gap-10'>
                        {pages.map((page)=>(
                            <Link
                                key={page._id}
                                href={`/${page.slug}`}
                                className='hover:text-blue-600 hover:underline transition'
                            >
                                {page.title}
                            </Link>
                        ))}
                    </div>

                </header>
                <main className='py-10'>{children}</main>
            </body>
        </html>
    )
}
