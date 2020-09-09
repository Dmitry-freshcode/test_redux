import React, { Component } from 'react'
import { connect } from "react-redux";
import {add1 , sub1,add2 , sub2} from '../../redux/actionCreate'


 class Counter extends Component {
    render() {
        console.log(this.props);
        return (<>
            <div>
                {this.props.count1}
            </div>
            <div onClick={()=>this.props.count1Add(10)}>add count</div>
            <div onClick={()=>this.props.count1Sub(10)}>sub count</div>
            <br/>
            <div>
                {this.props.count2}
            </div>
            <div onClick={()=>this.props.count2Add(2)}>add count</div>
            <div onClick={()=>this.props.count2Sub(2)}>sub count</div>
            </>
        )
    }
}

function mapStateToProps( state){
    return {count: state.count,
    count1: state.count1.count,
    count2: state.count2.count   } 
  };
const mapDispatchToProps =dispatch =>{
    return{
        count1Add: (number)=>dispatch(add1(number)),
        count1Sub: (number)=>dispatch(sub1(number)),
        count2Add: (number)=>dispatch(add2(number)),
        count2Sub: (number)=>dispatch(sub2(number))
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
