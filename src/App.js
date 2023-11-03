import logo from './logo.svg';
import './App.css';
import './assets/mateusinho.jpeg';

const users = [
  {
  name: 'Elosia',
  age: 19,
  imgURL: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 75
},
{
  name: 'Roberta',
  age: 19,
  imgURL: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 75
},
{
  name: 'Rosinha',
  age: 19,
  imgURL: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 75
},
{
  name: 'Losleine',
  age: 19,
  imgURL: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 75
},
{
  name: 'Roberta',
  age: 19,
  imgURL: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 75
},
{
  name: 'Elosia',
  age: 19,
  imgURL: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 75
},
{
  name: 'Losleine',
  age: 19,
  imgURL: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 75
},
]


function App() {
  return (
    <div className="App" id='App'>
      <div class="lista-usu"><Profile/></div>

    </div>
  );
}


function MyButton() {
  return (
    <button>I'm a button</button>
  );
}


function Profile(){

  const listaUsu = users.map(user => 
    <>
      <li key={user.name}>
        <h1>{user.name}</h1><br/>
        <img 
        className='avatar' 
        src={user.imgURL} 
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          heigth: user.imageSize
        }}
        />
      </li>
    </>
  );

  return(
    <>
      {/* <h1>{users[1].name}</h1>
        
        <img 
        className='avatar' 
        src={users[1].imgURL} 
        alt={'Foto de ' + users[1].name}
        style={{
          width: users[1].imageSize,
          heigth: users[1].imageSize
        }}
        /> */}
        {listaUsu}
    </>
  )

}

export default App
