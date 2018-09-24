import React, { Component } from 'react';

class InsetDataForm extends Component {
    render(){        
        console.log('insetdata...')
        console.log(this.props.serachres);
        if(this.props.serachres.length == 0) return null            
        
        return( 
            <tbody>
                <tr>
                    <td><input type='text' ref='id' value={this.props.serachres[0].id} /></td>
                    <td><input type='text' ref='name' value={this.props.serachres[0].name} /></td>
                    <td><input type='text' ref='username' value={this.props.serachres[0].username} /></td>
                    <td><input type='text' ref='email' value={this.props.serachres[0].email} /></td>
                    <td><input type='text' ref='phone' value={this.props.serachres[0].phone} /></td>
                    <td><input type='text' ref='website' value={this.props.serachres[0].website} /></td>
                </tr>                    
            </tbody>                                         
        )
    }
    showdata(){
        if(this.props.serachres.length == 0){
            //this.refs.id.value = '';
            console.log('undefined');
        }
        else{
            console.log('defined...value should be appear')
            console.log(this.props.serachres);
            //this.refs.id.value = this.
        }
    }
}
export default InsetDataForm;