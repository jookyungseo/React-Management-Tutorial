
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/120/120/1',
  'name' : '주경서',
  'birthday' : '860328',
  'gender' : '남자',
  'job' : '유부남'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/120/120/2',
  'name' : '엄혜영',
  'birthday' : '900821',
  'gender' : '여자',
  'job' : '유부녀'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/120/120/3',
  'name' : '박준환',
  'birthday' : '860327',
  'gender' : '남자',
  'job' : '쏠로'
}

]

class App extends Component{
    render(){
        return(
          <div>
              {
                customers.map(c => {
                  return(
                    <Customer
                        id={c.id}
                        image={c.image}
                        name={c.name}
                        birthday={c.birthday}
                        gender={c.gender}
                        job={c.job}
                    />
                  )
                })
              } 
          </div>
        )

    }
}


export default App;
