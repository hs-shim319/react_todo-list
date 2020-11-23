import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Palette from './components/Palette';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt, faEdit);


class App extends Component{

  id=1;
  state={
    input:'',
    todos:[
      {id:0, text:'안녀용', checked:true}
    ],
    color:'#343a40'
  }

  handleChange=(e)=>{
    this.setState({
      input:e.target.value
    })
  }  

  handleKeyPress=(e)=>{
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleCreate=()=>{
    const {input, todos, color} = this.state;
    if(!input) alert("내용을 입력해주세요.");
    else{this.setState({
      input:'',
      todos:todos.concat({
        id:this.id++,
        text:input,
        checked:false,
        color:color
      })
    })}
  }

  handleToggle=(id)=>{
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {...selected, checked: !selected.checked};

    this.setState({
      todos:nextTodos
    });
  }

  handleRemove=(id)=>{
    const {todos} = this.state;
    
    this.setState({
      todos:todos.filter(todo => todo.id !== id)
    })
  }

  handleSelectColor=(color)=>{
    this.setState({
      color
    })
  }

  render(){
    
    const colors=['#343a40', '#f03e3e', '#12b886', '#228ae6'];
    const {input, todos, color} = this.state;
    const {
      handleChange, 
      handleKeyPress, 
      handleCreate,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;
    return (
      <div>
      <TodoListTemplate 
        form={(
          <Form
            value={input}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onCreate={handleCreate}
            color={color}
          />)}        
        list={(
          <TodoItemList 
            todos={todos} 
            onToggle={handleToggle} 
            onRemove={handleRemove}
          />)}
        palette={(
          <Palette 
            colors={colors} 
            onSelect={handleSelectColor} 
            selected={color}
          />)}
      >
      </TodoListTemplate>
       </div>
    );
  }
}

export default App;
