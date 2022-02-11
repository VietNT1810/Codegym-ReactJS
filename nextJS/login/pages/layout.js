import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/home">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Logout</a>
                    </Link>
                </li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}