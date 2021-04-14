
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customer = {
  'id' : 1,
  'image' : 'https://placeimg.com/120/120/any',
  'name' : '주경서',
  'birthday' : '860328',
  'gender' : '남자',
  'job' : '유부남'
}

class App extends Component{
    render(){
        return(
              <Customer
                id = {customer.id}
                image = {customer.image}
                name = {customer.name}
                birthday = {customer.birthday}
                gerder = {customer.gender}
                job = {customer.job}
              />
        )
    }
}


export default App;
