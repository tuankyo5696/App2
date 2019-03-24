import React, { Component } from 'react';

class TaskItem extends Component{
    render(){
        return(
            <div>
                <tr>
                                          <td>1</td>
                                            <td>Học React JS</td>
                                            <td className="text-center">
                                                <span className="label label-danger">Kích hoạt</span>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" className="btn btn-warning">
                                                        <span className="fa fa-pencil mr5"></span>Sửa
                                                </button>
                                                &nbsp;  
                                                <button type="button" className="btn btn-danger">
                                                        <span className="fa fa-trash mr5"></span>Xóa
                                                </button>
                                                
                                            </td>
                                          </tr>
            </div>
        )
    }
}
export default TaskItem;