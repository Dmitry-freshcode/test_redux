import React, { Component } from 'react'
import { connect } from "react-redux";
import {addCounter , removeCounter} from '../../redux/action'


 class Counter extends Component {
    render() {
        console.log(this.props);
        return (<>
            <div>
                {this.props.count}
            </div>
            <div onClick={this.props.onAdd}>add count</div>
            <div onClick={this.props.onSub}>sub count</div>
            <br/>
            <div>
                {this.props.test}
            </div>
            <div onClick={this.props.onAdd}>add count</div>
            <div onClick={this.props.onSub}>sub count</div>
            </>
        )
    }
}

function mapStateToProps( state){
    return {count: state.count,
    test: state.test,   } 
  };
const mapDispatchToProps =dispatch =>{
    return{
        onAdd: ()=>dispatch(addCounter),
        onSub: ()=>dispatch(removeCounter)
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
