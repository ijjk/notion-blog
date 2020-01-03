import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const CodeHighlight = ({ children, language }) => {
  return (
    <SyntaxHighlighter language={language.toLowerCase()}>
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeHighlight
