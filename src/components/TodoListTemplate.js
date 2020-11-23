import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({palette, form, list, color}) =>{
    return(
        <main>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="list-wrapper">
                {list}
            </section>
        </main>
    )
}

export default TodoListTemplate;