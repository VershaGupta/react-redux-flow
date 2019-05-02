import React, { Component } from 'react';
import {connect} from "react-redux"
const mapStateToProps = state =>{
    return {
        notes:state.notes
    }
}

class List extends Component{
    constructor(props){
        super(props);
      
    }
    render() { 
        return (  
           <div>
           { this.props.notes}
           </div>
         );
    }
}
 
export default connect(mapStateToProps) (List);