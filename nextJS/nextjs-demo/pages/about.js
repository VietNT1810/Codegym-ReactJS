import Link from "next/link"
import Layout from "../components/Layout"

export default function About() {
    return (
        <Layout>
            <p>This is about page</p>
            <Link href="/">
                <a>Go back to home</a>
            </Link>
        </Layout>
    );

}
