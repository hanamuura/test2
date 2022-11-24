import React, {useState} from "react";
import MyHeader from "./Components/MyHeader";
import "./styles/App.css"
import MyPost from "./Components/MyPost";

function App() {
  const [number, setNumber] = useState('');
  const [logo, setLogo] = useState('');
  const [posts, setPosts] = useState([
    {id: 1, title: 'post1', describtion: 'просто тут немного шалил XD, разных приколюх накидал и просто показываю что вообще могу =)'},
    {id: 2, title: 'post2', describtion: 'возьмите на работу :_('},
    {id: 3, title: 'попробовать эти URL(не знаю почему так но некоторые не работают)', describtion: 'https://free-png.ru/wp-content/uploads/2021/07/free-png.ru-7.png'},
  ]);

  const [result, setResult] = useState(0)

  function solveEquation() {
    let s1 = '', s2 = '';
    if (number.indexOf('+') != -1) {
      for(let i = 0; i < number.indexOf('+'); i++)
        s1 += number[i];
      for(let i = 1; i < number.length - number.indexOf('+'); i++)
        s2 += number[number.indexOf('+') + i];
      setResult(Number(s1) + Number(s2))
    }
    if (number.indexOf('/') != -1) {
      for(let i = 0; i < number.indexOf('/'); i++)
        s1 += number[i];
      for(let i = 1; i < number.length - number.indexOf('/'); i++)
        s2 += number[number.indexOf('/') + i];
      setResult(Number(s1) / Number(s2))
    }
    if (number.indexOf('*') != -1) {
      for(let i = 0; i < number.indexOf('*'); i++)
        s1 += number[i];
      for(let i = 1; i < number.length - number.indexOf('*'); i++)
        s2 += number[number.indexOf('*') + i];
      setResult(Number(s1) * Number(s2))
    }
    if (number.indexOf('-') != -1) {
      for(let i = 0; i < number.indexOf('-'); i++)
        s1 += number[i];
      for(let i = 1; i < number.length - number.indexOf('-'); i++)
        s2 += number[number.indexOf('-') + i];
      result = Number(s1) - Number(s2);
    }
  }

  return (
    <div>
        <MyHeader src = {logo}/>
        <input 
          value = {logo}
          onChange = {e => setLogo(e.target.value)}
          type = "text"
          placeholder="set logo for website"
        />
        {posts.map((post, id) => <MyPost post = {post} key = {post.id}/>)}
        <input 
          value = {number}
          onChange = {e => setNumber(e.target.value)}
          type = "text"
          placeholder="введите пример" 
          style={{width: "300px"}}
        />
        <button onClick={solveEquation}>Решить</button>
        <h1>{result}</h1>
    </div>
  );
}

export default App;
