import ReactMarkdown from 'react-markdown';

export default function Recipe({data}) {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <ReactMarkdown>
                    {data}
                </ReactMarkdown>
            </article>
        </section>
    )
}