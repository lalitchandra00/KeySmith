



import { useState , useCallback, useEffect} from 'react'
import './App.css'

function App() {
  const [Length, setLength] = useState(8);
  const [NumAllowed, setNumAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  function genpass(){
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if (NumAllowed){
      str = str + "0123456789"
    }

    if (CharAllowed){
      str = str + "!@#$%^&*()_+=[]{}|:;'?><,."
    }

    for (let i = 1; i <= Length; i++) {

      // Generate a random index number from 1 to the length of the character string.
      let index = Math.floor(Math.random() * (str.length + 1));
      // Append the character at the random index to the password.
      pass = pass + str.charAt(index);
    }

    setPassword(pass)
  }


  const password = useCallback(genpass,[Length, NumAllowed, CharAllowed, setPassword])

  useEffect(()=>{password()}, [Length, NumAllowed, CharAllowed, password])

  return (
    <>
    <div className = "bg-black w-screen h-screen p-5">
     <h1 className="text-4xl text-center text-white">Generate Secure Passwords Instantly!</h1>
      <br />
      <div className = "rounded-2xl bg-gray-500 w-full max-w-fit h-auto mx-auto p-3">
        <h2 className = "text-2xl">Generate your all passwords here</h2>
        <br />
        <div className = "flex">
          <input type="text"
            value = {Password}
            className = "rounded-l-2xl bg-amber-200  w-130 h-10 flex justify-center mx-auto p-3 mr-0"
            placeholder = "password"
            readOnly
          />
          <button className = "bg-blue-400 rounded-r-2xl p-2">Copy</button>
        </div>
        <br />
        <div className = "flex justify-between">
          <span>
            <input 
              type="range"
              min = {8}
              max = {20}
              value = {Length}
              onChange = {(e) => {setLength(e.target.value)}}
            />
              
            <label className = "ml-1.5 mr-6 text-white">Length: {Length}</label>
          </span>
          
          <span>
            <input type="checkbox"
              defaultChecked = {NumAllowed}
              onChange = {() => {setNumAllowed((prev)=> (!prev))}}
            />
            <label className = "ml-1.5 mr-6 text-white">Numbers</label>
          </span>

         <span>
           <input type="checkbox"
            defaultChecked = {CharAllowed}
            onChange = {() => {setCharAllowed((prev)=> (!prev))}}
          />
          <label className = "ml-1.5 mr-6 text-white">Characters</label>
         </span>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
