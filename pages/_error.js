import Link from "next/link";

function Error({ statusCode }) {
    return (
        <section className="NotFound information">
            <div className="wrapper">
                <h1>
                    {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
                </h1>
                <Link href="/">
                    <button>Home</button>
                </Link>
            </div>
        </section>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
