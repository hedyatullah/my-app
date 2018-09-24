import React, { Component } from 'react';

class Listheader extends Component {
    render(){
        //console.log(this.props.listhead);
        return(
            <thead>
                <tr>
                    {this.listheaderfun()}                
                </tr>           
            </thead>
        )
    }
    listheaderfun(){
        let listheaderdata = this.props.listhead;
        let final=[];
        for(let i=0;i<listheaderdata.length;i++){
            final.push(<th key={'col_'+i}>{listheaderdata[i]}</th>)
        }
        return final;
    }
}
export default Listheader;

