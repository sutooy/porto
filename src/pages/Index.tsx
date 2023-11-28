import Link from 'next/link';


const Index = () => {

    return (
        < >
            <h1>
                TEST INDEX
            </h1>
            <Link
                href={`/`}
            >
                <button>
                    back
                </button>
            </Link>
        </ >
    )

}

export default Index