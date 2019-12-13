import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col } from 'reactstrap';
import UserComponent from '../user/user';

class EmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.backPlease = this.backPlease.bind(this)
        this.state = {
            isBack: false
        }
    }

    backPlease = () => {
        this.setState({
            isBack: true
        })
        console.log("back button enter", this.props);
    }

    render() {
        const { userDetails, users } = this.props;
        const data = userDetails !== undefined ? userDetails : users;
        return (
            <>
                {
                    this.state.isBack === false
                        ?
                        <div>
                            <h1>Employee Id {data.id}</h1>
                            <br />
                            <button onClick={this.backPlease}>Back</button>
                            {Example(data)}
                        </div>
                        :
                        <UserComponent />
                }
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




const mapStateToProps = (state, opProps) => {
    return {
        employee: state.employee,
        users: state.users,
        userDetails: opProps.userDetails
    }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, null)(EmployeeComponent);