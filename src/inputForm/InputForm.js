import React, {Component} from 'react'
import ReactWizard from "react-bootstrap-wizard";

import {Col, Row} from "reactstrap";
import './inputForm.css'
import "bootstrap/dist/css/bootstrap.css";
import {connect} from 'react-redux'
import * as actions from '../store/actions'

class FirstStep extends Component {

    state = {
        itemNo: '',
        itemName: '',
    }

    isValidated() {
        let {itemNo, itemName} = this.state
        if (itemNo && itemName) {
            return true
        }
        return false
    }

    render() {
        return (
            <div>
                <div className='form-group'>
                    <label> Item No</label>
                    <input className='form-control' placeholder='item number' onChange={event => this.setState({itemNo: event.target.value})}/>
                </div>
                <div className='form-group'>
                    <label> Item Name</label>
                    <input className='form-control' placeholder='item name' onChange={event => this.setState({itemName: event.target.value})}/>
                </div>

            </div>);
    }
}

class SecondStep extends Component {

    state = {
        itemTitle: '',
        itemPrice: '',
        validate: false
    }

    isValidated() {
        let {itemTitle, itemPrice} = this.state
        if (itemPrice && itemTitle) {
            return true
        }
        return false
    }

    render() {
        return (
            <div>
                <div className='form-group'>
                    <label> Item Title</label>
                    <input className='form-control' placeholder='item title' onChange={event => this.setState({itemTitle: event.target.value})}/>
                </div>
                <div className='form-group'>
                    <label> Item Price</label>
                    <input className='form-control' placeholder='item price' onChange={event => this.setState({itemPrice: event.target.value})}/>
                </div>

            </div>
        );
    }
}

class ThirdStep extends Component {

    state = {
        itemCode: '',
        itemDetail: '',
    }

    isValidated() {
        let {itemCode, itemDetail} = this.state
        if (itemCode && itemDetail) {
            return true
        }
        return false
    }

    render() {
        return (
            <div>
                <div className='form-group'>
                    <label> Item Code</label>
                    <input className='form-control' placeholder='item code' onChange={event => this.setState({itemCode: event.target.value})}/>
                </div>
                <div className='form-group'>
                    <label> Item Detail</label>
                    <input className='form-control' placeholder='item detail' onChange={event => this.setState({itemDetail: event.target.value})}/>
                </div>

            </div>
        );
    }
}

let steps = [
    // this step hasn't got a isValidated() function, so it will be considered to be true
    {stepName: "First", component: FirstStep},
    // this step will be validated to false
    {stepName: "Second", component: SecondStep},
    // this step will never be reachable because of the seconds isValidated() steps function that will always return false
    {stepName: "Third", component: ThirdStep}
];

class InputForm extends Component {
    finishButtonClick(state) {
        // console.log('daf', state);
    }

    componentDidMount() {
        console.log(" state ", this.props.items)
        this.props.test("login")
    }

    goToListItems=()=>{
        console.log(" e ")
        this.props.history.push('/items')
    }

    render() {
        return (
            <div  className='flex-column align-middle' style={{ display:'flex',marginTop: "15px"}}>
                <button className='btn-secondary' onClick={event => this.goToListItems(event)}>List Items</button>
                <Row>
                    <Col xs={12} md={6} className="mr-auto ml-auto">
                        <ReactWizard
                            steps={steps}
                            navSteps
                            title="Wizard Form"
                            // description="This will help you split a complicated flow or a complicated form in multiple steps."
                            description="This is an example of splitting form in multiple steps."
                            headerTextCenter
                            validate
                            color="primary"
                            finishButtonClick={this.finishButtonClick}
                            onStepChange={() => {
                                console.log("log")
                            }}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemReducer.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        test: (data) => dispatch(actions.addItemStart(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm)
