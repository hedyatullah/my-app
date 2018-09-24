import React, { Component } from 'react';

class InsetDataForm extends Component {
    render(){
        console.log('insetdata...')
        console.log('props' + this.props.serachres);
        return( 
            <tbody>
                <tr>
                    <td><input type='text' ref='id' value={this.showdata()}/></td>
                    <td><input type='text' ref='name' /></td>
                    <td><input type='text' ref='username' /></td>
                    <td><input type='text' ref='email' /></td>
                    <td><input type='text' ref='phone' /></td>
                    <td><input type='text' ref='website' /></td>
                </tr>                    
            </tbody>                                         
        )
    }
    showdata(){
        if(this.props.serachres == undefined){
            //this.refs.id.value = '';
            console.log('undefined');
        }
        else{
            console.log('defined...value should be appear')
            console.log(this.props.searches);
        }
    }
}
export default InsetDataForm;