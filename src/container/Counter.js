import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Controller from '../components/controller/Controller';
import ControllerOutput from '../components/controllerOutput/ControllerOutput';


import { Row, Col } from 'react-bootstrap';

import '../components/controller/Controller.css'

import { connect } from 'react-redux';

class Counter extends Component {


    render() {
        console.log("props=======>", this.props);
        return (
            <div className="fluid">
                <ControllerOutput output={this.props.newCounter} />
                <Row>

                    <Col>
                        <Controller text={"Increment By 1"} click={this.props.incChangedHandler} />
                    </Col>
                    <Col>
                        <Controller text={"Decrement By 1"} click={this.props.decChangedHandler} />
                    </Col>
                    <Col>
                        <Controller text={"Increment By 5"} click={this.props.incFiveHandler} />
                    </Col>
                    <Col>
                        <Controller text={"Increment By 5"} click={this.props.decFiveHandler} />
                    </Col>
                </Row>



            </div>);
    }
}

const mapStateToProps = state => {
    return {
        newCounter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incChangedHandler: () => dispatch({ type: 'IncrementOne' }),
        decChangedHandler: () => dispatch({type: 'DecrementOne'}),
        incFiveHandler: () => dispatch({type:'IncrementFive',value:5}),
        decFiveHandler: () => dispatch({type:'DecrementFive',value:5}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);