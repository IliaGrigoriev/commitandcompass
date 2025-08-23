import '../subpages_layout/layout.css'

import Block            from '../subpages_layout/Block';
import Row              from '../subpages_layout/Row';
import PythonCodeWindow from '../code/python/PythonCodeWindow';

import NeoHoverButton from '../gadgets/NeoHoverButton.jsx';

function codeSentimentExample() {
  const myPythonCode = `def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)

print(factorial(5)) `;
  return (
    <div style={{ padding: "60px" }}>
      {/*<h1>Python Code Viewer</h1>*/}
      <PythonCodeWindow code={myPythonCode} />
    </div>
  );
}

export default function KeywordSearch() {
  return (
    <div className="page">
      <Row single>
        <NeoHoverButton name = {"Spacy"}/>   
        <NeoHoverButton name = {"BERT"}/> 
        <NeoHoverButton name = {"Dependency Parser"}/> 
      </Row>
      <Row single>
        <Block>dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</Block>
      </Row>
      <Row>
        <Block>{codeSentimentExample()}</Block>
        <Block><p>Text Block 3</p></Block>
      </Row>
      <Row single>
        <Block><img src="image2.jpg" alt="Large Image" /></Block>
      </Row>
      <Row>
        <Block><p>Text Block 4</p></Block>
        <Block><img src="image3.jpg" alt="Image 3" /></Block>
      </Row>
    </div>
  );
}