import { useState , useCallback} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [NumAllowed, setNumAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  function genpass(){
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if (NumAllowerd){
      str = str + "0123456789"
    }

    if (CharAllowed){
      str = str + "!@#$%^&*()_+=[]{}|:;'?><,."
    }

    for (let i = 1; i <= length; i++) {

      // Generate a random index number from 1 to the length of the character string.
      let index = Math.floor(Math.random() * str.length +1);
      // Append the character at the random index to the password.
      pass = pass + str.charAt(index);
    }

    setPassword(pass)
  }


  const password = useCallback(genpass,[length, NumAllowed, CharAllowed, setPassword])


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
            value = {password}
            className = "rounded-l-2xl bg-amber-200  w-130 h-10 flex justify-center mx-auto p-3 mr-0"
            placeholder = "password"
            readOnly
          />
          <button className = "bg-blue-400 rounded-r-2xl p-2">Copy</button>
        </div>
      </div>D
    </div>
    </>
  )
}

export default App
