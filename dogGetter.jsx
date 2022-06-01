function App() {
  const {Button} = ReactBootstrap;
  const {useState} = React;
  const [url, setUrl] = useState('https://images.dog.ceo/breeds/pointer-german/n02100236_2974.jpg');

  function handleClick() {
    async function dogGet() {
      let dog = await axios('https://dog.ceo/api/breeds/image/random')
      setUrl(dog.data.message);
    }
    dogGet();
  }

  return (
    <>
      <img src={url}></img>
      <Button onClick={handleClick}>Get Me a Dog!</Button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));