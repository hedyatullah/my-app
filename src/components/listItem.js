import React, { Component } from 'react';

import Listheader from './listheader.js';

export default class ListItem extends Component {    
    render(){   
        console.log(this.props.mydata);
        return(            
                <tbody>            
                    {
                        this.props.mydata.map((row,index) => {
                            return(
                            <tr key={index}>
                            {
                                Object.keys(row).map(row_index => { 
                                    return <td>{row[row_index]}</td>
                                })
                            }
                            </tr>
                            )                            
                        })
                    }
                </tbody>                               
        )
    }      
}
    
//export default ListItem;

