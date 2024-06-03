import React, { useState } from 'react';
import Markdown from 'react-markdown';
import './App.css';

function App() {
  const [type, setType] = useState(`
# This is an H1
## This is an H2
[This is a link](https://www.google.com)
\`This is inline code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 22
}
\`\`\`
- First item
- Second item
- Third item
> This is a blockquote
![Random Image](https://picsum.photos/536/354)
**This is bold text**
  `);

  return (
    <div className="Text">
      <textarea
        id="editor"
        onChange={(event) => setType(event.target.value)}
        value={type}
      ></textarea>
      <div id="preview">
        <Markdown>{type}</Markdown>
      </div>
    </div>
  );
}

export default App;