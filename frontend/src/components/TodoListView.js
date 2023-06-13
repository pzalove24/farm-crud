
import TodoItem from './Todo'

export default function TodoView(props) {
    return (
        <div>
            <ul>
                {props.todoList.map((todo,index) => {
                  return (
                    <li key={index}>
                      <TodoItem todo={todo} />
                    </li>
                  )
                })}
            </ul>
        </div>
    )
}