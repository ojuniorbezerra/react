import React  from 'react'
import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import { markAsDone, markAsPeding, remove } from './todoActions'

import IconButton from '../template/iconButton'

const TodoList = props =>{

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                     <IconButton style="success" icon="check" hide={todo.done}
                        onClick={() => props.markAsDone(todo)}/>
                     <IconButton style="warning" icon="undo"  hide={!todo.done}
                        onClick={() => props.markAsPeding(todo)}/>
                     <IconButton style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => props.remove(todo)}/>
                       
                </td>
            </tr>
        ));
    }
   return (
       <table className="table">
           <thead>
               <tr>
                   <th>
                       Description
                   </th>
                   <th className="tableActions">
                       Ações
                   </th>
               </tr>
           </thead>
           <tbody>
             {renderRows()}  
           </tbody>
       </table>
   );
}


const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPeding, remove}, dispatch)

const mapStateToProps = state => ({list: state.todo.list})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)