import React, { Component } from 'react';

import ListItem from './listItem.js';
import NewListItem from './NewListItem.js'

import mydata from '../users.json';


class List extends Component {              
    render(){        
        return(
            <div>                                    
                <ListItem mydata={mydata} />
                <NewListItem mydata={mydata} />
            </div>    
        )
    }
} 
export default List;
