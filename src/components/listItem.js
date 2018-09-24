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
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.username}</td>
                                <td>{row.email}</td>
                                <td>{row.phone}</td>
                                <td>{row.website}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>                               
        )
    }      
}
    
//export default ListItem;

