import './BlockQuote.css';

const BlockQuote = ({ quote, author }) => {
  return (
    <div className="blockquote-container">
      <figure>
        <blockquote>{quote}</blockquote>
        <figcaption>{author}</figcaption>
      </figure>
    </div>
  )
}

export default BlockQuote;