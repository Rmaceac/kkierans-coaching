import './BlockQuote.css';

const BlockQuote = ({ className, quote, author }) => {
  return (
    <div className={`blockquote-container ${className}`}>
      <figure>
        <blockquote>{quote}</blockquote>
        <figcaption>{author}</figcaption>
      </figure>
    </div>
  )
}

export default BlockQuote;