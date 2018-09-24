import React, { Component } from 'react';

import ListItem from './listItem.js';
import NewListItem from './NewListItem.js';
import InsetDataForm from './InsetDataForm.js';
import Listheader from './listheader.js';

import mdata from '../users.json';
import mydata1 from '../users1.json';


class List extends Component {  
    constructor(){
        super();
        this.state = {
            mydata: mdata,            
            searchresults: []
        }  
    }            
    render(){   
        const listheader = ['Sr No.','Customer Name','User Name','Email Address','Contact Number','Website'];     
        return(
            <div> 
                <p>
                    <input type="text" ref='search' /> 
                    <button onClick={this.searchcustomer.bind(this)}>Search Customer</button>
                    <button onClick={this.cancelcustomersearch.bind(this)}>Cancel Search</button>
                </p>      
                <table>
                <Listheader listhead={listheader} />                 
                <InsetDataForm serachres={this.state.searchresults} />
                </table>
                <br />
                <table>                         
                    <Listheader listhead={listheader} />                 
                    
                    <ListItem mydata={this.state.mydata} />                    
                </table>                
            </div>    
        )
    }
    cancelcustomersearch(){
        if(this.refs.search.value == ''){
            alert('Text box is empty.')
        }
        else{
            this.setState({mydata:this.oldmydata});
            this.refs.search.value ='';
        }
    }

    searchcustomer(){
        let textval = this.refs.search.value;
        console.log(textval);
        this.oldmydata = this.state.mydata;

        if(this.refs.search.value == ''){
            alert('Text box is empty.')
        }
        else{
            let searchresult = this.state.mydata.filter(function(item,index){
                return(item.username.indexOf(textval) >-1) ? true:false
            })
            this.setState({searchresults:searchresult});
            console.log(searchresult);
            
        }
    }
} 
export default List;
