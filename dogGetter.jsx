function App() {
  const {Button} = ReactBootstrap;
  const {useState} = React;
  const [url, setUrl] = useState('https://images.dog.ceo/breeds/pointer-german/n02100236_2974.jpg');
  const [prevDogs, setPrevDogs] = useState([]);

  function handleClick() {
    setPrevDogs([...prevDogs, url]);
    async function dogGet() {
      let dog = await axios('https://dog.ceo/api/breeds/image/random')
      console.log(dog);
      setUrl(dog.data.message);
    }
    dogGet();
  }

  return (
    <div className='card' style={{width: window.innerWidth / 2, margin: 'auto', backgroundColor: '#809184'}}>
      <img className="card-img-top" style={{height: '500px'}} src={url}></img>
      <h5 className='card-title'></h5>
      <Button style={{backgroundColor: '#116A68'}} onClick={handleClick}>Get Me a Dog!</Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));