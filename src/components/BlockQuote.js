import './BlockQuote.css';

export default function BlockQuote({ quote, author }) {
  return (
    <div className="blockquote-container">
      <figure>
        <blockquote>{quote}</blockquote>
        <figcaption>{author}</figcaption>
      </figure>
    </div>
  )
}
