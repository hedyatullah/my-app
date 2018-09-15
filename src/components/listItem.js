import React, { Component } from 'react';


export default class ListItem extends Component {    
    render(){   
        console.log(this.props.mydata);
        return(
            <table>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email Address</th>
                        <th>Contact Number</th>
                        <th>Website</th>
                    </tr>
                </thead>
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
            </table>
        )
    }      
}
    
//export default ListItem;
