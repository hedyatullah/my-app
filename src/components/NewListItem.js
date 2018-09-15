import React, { Component } from 'react';

// Using function..

const NewListItem = (data) => {
  return(    
      data.mydata.map((item,index) => {
        return(
          <ul key={index}>
          <li>{item.id}</li>
          <li>{item.name}</li>
          </ul>
        )
      })    
  )
}
export default NewListItem;