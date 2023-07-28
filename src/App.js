import './App.css';
import React, { useState, useEffect } from 'react';


const App = () => {

  const [nouns, setNouns] = useState([]);
  const [verbs, setVerbs] = useState([]);
  const [adjectives, setAdjectives] = useState([]);
  const [adverbs, setAdverbs] = useState([]);
  const [pronouns, setPronouns] = useState([]);
  const [prepositions, setPrepositions] = useState([]);
  const [conjunctions, setConjunctions] = useState([]);
  const [determiners, setDeterminers] = useState([]);
  const [exclamations, setExclamations] = useState([]);

  const [currNouns, setCurrNouns] = useState("");
  const [currVerbs, setCurrVerbs] = useState("");
  const [currAdjectives, setCurrAdjectives] = useState("");
  const [currAdverbs, setCurrAdverbs] = useState("");
  const [currPronouns, setCurrPronouns] = useState("");
  const [currPrepositions, setCurrPrepositions] = useState("");
  const [currConjunctions, setCurrConjunctions] = useState("");
  const [currDeterminers, setCurrDeterminers] = useState("");
  const [currExclamations, setCurrExclamations] = useState("");

  const [sentence, setSentence] = useState("");


  // const freeApi = 'https://jsonplaceholder.typicode.com/todos'
  const wordsApi = 'https://localhost:44347/api/PartOfSpeech'

  useEffect(() => {
    fetch(wordsApi)
      .then(response => response.json())
      .then(res => {
        setVerbs(res.filter((item) => item.type === 'Verb'))
        setNouns(res.filter((item) => item.type === 'Noun'))
        setAdjectives(res.filter((item) => item.type === 'Adjective'))
        setAdverbs(res.filter((item) => item.type === 'Adverb'))
        setPronouns(res.filter((item) => item.type === 'Pronoun'))
        setPrepositions(res.filter((item) => item.type === 'Preposition'))
        setConjunctions(res.filter((item) => item.type === 'Conjunction'))
        setDeterminers(res.filter((item) => item.type === 'Determiner'))
        setExclamations(res.filter((item) => item.type === 'Exclamation'))

      })
  }, [])

   useEffect(() => {
    setSentence(sentence + " " + currNouns)
  }, [currNouns])

  useEffect(() => {
    setSentence(sentence + " " + currVerbs)
  }, [currVerbs])

  useEffect(() => {
    setSentence(sentence + " " + currAdjectives)
  }, [currAdjectives])

  useEffect(() => {
    setSentence(sentence + " " + currAdverbs)
  }, [currAdverbs])

  useEffect(() => {
    setSentence(sentence + " " + currPronouns)
  }, [currPronouns])

  useEffect(() => {
    setSentence(sentence + " " + currPrepositions)
  }, [currPrepositions])

  useEffect(() => {
    setSentence(sentence + " " + currConjunctions)
  }, [currConjunctions])

  useEffect(() => {
    setSentence(sentence + " " + currDeterminers)
  }, [currDeterminers])

  useEffect(() => {
    setSentence(sentence + " " + currExclamations)
  }, [currExclamations])

  if (!nouns || !verbs || !adjectives
    || !adverbs
    || !pronouns
    || !prepositions
    || !conjunctions
    || !determiners
    || !exclamations) return

  return (
    <>
    <div className='box'>
      <ul>
      <li><span>Nouns</span>
      <select onChange={(e) => { setCurrNouns(e.target.value) }}>
        <option key="key" value=""></option>
        {nouns.map((word, index) => (
          <option key={index} value={word.word}>{word.word}</option >
        ))}
      </select></li>

     <li><span>Verbs</span>
      <select onChange={(e) => { setCurrVerbs(e.target.value) }}>
        <option key="key" value=""></option>
        {verbs.map((word, index) => (
          <option key={index} value={word.word}>{word.word}</option >
        ))}
      </select></li>

      <li><span>Adjectives</span>
      <select onChange={(e) => { setCurrAdjectives(e.target.value) }}>
        <option key="key" value=""></option>
        {verbs.map((word, index) => (
          <option key={index} value={word.word}>{word.word}</option >
        ))}
      </select></li>

      <li><span>Adverbs</span>
      <select onChange={(e) => { setCurrAdverbs(e.target.value) }}>
        <option key="key" value=""></option>
        {verbs.map((word, index) => (
          <option key={index} value={word.word}>{word.word}</option >
        ))}
      </select></li>

     <li> <span>Pronouns</span>
      <select onChange={(e) => { setCurrPronouns(e.target.value) }}>
        <option key="key" value=""></option>
        {verbs.map((word, index) => (
          <option key={index} value={word.word}>{word.word}</option >
        ))}
      </select></li>

      <li><span>Prepositions</span>
      <select onChange={(e) => { setCurrPrepositions(e.target.value) }}>
        <option key="key" value=""></option>
        {verbs.map((word, index) => (
          <option key={index} value={word.word}>{word.word}</option >
        ))}
      </select></li>

      <li><span>Conjunctions</span>
      <select onChange={(e) => { setCurrConjunctions(e.target.value) }}>
        <option key="key" value=""></option>
        {verbs.map((word, index) => (
          <option key={index} value={word.word}>{word.word}</option >
        ))}
      </select></li>

      <li><span>Determiners</span>
      <select onChange={(e) => { setCurrDeterminers(e.target.value) }}>
        <option key="key" value=""></option>
        {verbs.map((word, index) => (
          <option key={index} value={word.word}>{word.word}</option >
        ))}
      </select></li>

      <li><span>Exclamations</span>
      <select onChange={(e) => { setCurrExclamations(e.target.value) }}>
        <option key="key" value=""></option>
        {verbs.map((word, index) => (
          <option key={index} value={word.word}>{word.word}</option >
        ))}
      </select></li>
      </ul>
      <div className='texteditor'>
        <h1>Build a sentence</h1>
        <div>{sentence}</div>
        <br></br>

        <input onClick={() => setSentence("")} type="submit" value="Clear"></input>

      </div>
     
      </div>
    </>
  )

}

export default App;
