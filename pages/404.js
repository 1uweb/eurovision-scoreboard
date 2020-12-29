import Link from "next/link";

export default function esc404() {
    return (
        <section className="NotFound information">
            <div className="wrapper">
                <h1>404 - Site not Found</h1>
                <Link href="/">
                    <button>Home</button>
                </Link>
            </div>
        </section>
    )
}
