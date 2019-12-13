import React, { Component } from 'react';
import { connect } from 'react-redux';
import { update_email, submit_email } from '../../redux/Actions/usersAction';

import EmployeeComponent from '../employee/employeeComponent';

class SingleUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.users.email
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailChange = this.emailChange.bind(this);
    }

    emailChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit() {
        this.props.users.email = this.state.email;
        this.props.submitEmail(this.props.users)
    }


    render() {
        console.log("SingleUserComponent", this.props);
        const { users } = this.props;
        return (
            <>
                <h1>{users.email} this is single user </h1>
                <label>
                    Name:
                    <input type="text" name="email" value={this.state.email} onChange={this.emailChange} />
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />

                <br />
                <EmployeeComponent />

            </>
        );
    }
}

// this.props.updateEmail
const mapStateToProps = state => {
    return {
        users: state.users
    }
}


const mapDispatchToProps = dispatch => {
    return {
        updateEmail: (e) => dispatch(update_email(e.target.value)),
        submitEmail: (data) => dispatch(submit_email(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleUserComponent);