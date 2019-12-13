import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col } from 'reactstrap';

class EmployeeComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { users } = this.props;
        console.log("Employee Component", users);

        return (
            <>
                <h1>Employee Component</h1>
                {Example(users)}
            </>
        );

    }
}


const Example = (props) => {
    return (
        <Table bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>avtar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{props.id}</th>
                    <td>{props.email}</td>
                    <td>{props.first_name}</td>
                    <td>{props.last_name}</td>
                    <td>
                        <img src={props.avatar} alt={props.avatar} style={{ height: "50px", width: "50px" }} />
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}




const mapStateToProps = (state) => {
    return {
        employee: state.employee,
        users: state.users
    }
}

export default connect(mapStateToProps, null)(EmployeeComponent);