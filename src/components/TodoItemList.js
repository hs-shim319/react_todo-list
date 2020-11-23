import React, {Component} from 'react';
import './TodoItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class TodoItem extends Component{
    render(){
        const {text, checked, id, onToggle, onRemove, color} = this.props;
        return(
            <div className="todo-item" onClick={()=>onToggle(id)}>
                <div className={`checked-circle ${checked ? 'checked':''}`} style={{borderColor:color, color:checked?'#fff':color, backgroundColor:checked?color:''}}>✓</div>
                <div className={`todo-text ${checked ? 'checked' : ''}`}>
                    {text}
                </div>
                {/* <div className="edit" onClick={(e)=>{
                    e.stopPropagation();
                    onEdit(id)}}><FontAwesomeIcon icon="edit"/>
                </div> */}
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation(); 
                    onRemove(id)}}><FontAwesomeIcon icon="trash-alt"/>
                </div>
            </div>
        )
    }
}

class TodoItemList extends Component{
    render(){
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(
            ({id, text, checked, color}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    key={id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    color={color}
                />
            )
        );
        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;