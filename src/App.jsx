import React, {useState} from "react"
import questionsList from './assets/questions.json'
import ProgressBar from "./ProgressBar"
import Card from "./Card.jsx"


export default function App() {
  const [questions] = useState(questionsList);
  const [currentIndex,setIndex] = useState(1);
  const length = questions.length;

  function nextCard(){
    setIndex(prev => (prev < length  ? prev + 1 : prev));
  }
  function prevCard(){
    setIndex(prev => (prev > 1 ? prev - 1 : prev));
  }
  
  return(<>
    <h1 className="title">Flash Cards</h1>
    <ProgressBar comp={currentIndex} rem={length}/>
    <Card ques={questions[currentIndex-1].question} 
          ans={questions[currentIndex-1].answer}
          nextClick={nextCard}
          prevClick={prevCard}
    />
  </>)
}
