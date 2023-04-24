import './App.css';
import {useRef, useState, useEffect} from 'react';
import { uploadfile } from './services/api';

function App() {

  const [file, setfile] = useState('');
  const [result, setresult] = useState('');


const fileinputref = useRef();
  //const logo = 'https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg';<img src={logo} alt='coder'/> 
   // className='zeta'
  const onUpload = () => {
    fileinputref.current.click()
  }

  useEffect(()=>{
    const getImage = async ()=>{
      if(file){
          const data = new FormData();

          data.append("name",file.name );
          data.append("file", file);

        let response= await uploadfile(data);
        
        setresult(response.path);
      }
    }
    getImage();

  }, [file])
  console.log(file);

  return (
    <div className="App">
      <div className='container'>
        <div className='right'>
          <div className='box'>
            <h7>you can upload your files here </h7>
            <button onClick={() => onUpload()} > upload here</button>
            <input type='file'
             ref = {fileinputref}
             style={{ display: 'none'}}
             onChange={(e)=> setfile(e.target.files[0])}

            />
            <a href={result} target='_blank' style={{position: 'absolute', top: '55%', left: '25%'  }}>{result}</a>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
