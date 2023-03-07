import '../styles/globals.css'
import bg from '../public/images/bgtexture.png'
import Header from '../components/Header'

export const metadata = {
    title: 'Sativa Scents',
    viewport: 'width=device-width, initial-scale=1',
    description: 'cbd infused bath soaks and accessories',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className='bg-sativa-blue text-sativa-white'>
                <Header />
                <main className={`bg-[${ bg }] bg-cover`}>
                    { children }
                </main>
            </body>
        </html>
    )
}
