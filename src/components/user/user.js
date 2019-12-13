import React, { Component } from 'react';
import { get_user, get_user_list } from '../../redux/Actions/usersAction';
import { connect } from 'react-redux';
import { Table, Container } from 'reactstrap';
import EmployeeComponent from '../employee/employeeComponent';


class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: null
        };
    }

    UNSAFE_componentWillMount() {
        this.props.getUser()
    }

    handleClick = (e) => {
        this.setState({
            userDetails: e
        })
    }

    render() {
        const { users } = this.props;
        return (
            <>

                {
                    this.state.userDetails !== null
                        ?
                        <EmployeeComponent userDetails={this.state.userDetails} />
                        :
                        <Container>
                            <h1>User list</h1>
                            <button onClick={this.props.userList}>click for single user</button>

                            {
                                users.length === 0 ?
                                    <p>NO USER FOUND</p> :
                                    <div>
                                        <b>You can click on user id</b>
                                        {users.length === 6 ? usersTable(users, this.handleClick) : null}
                                    </div>

                            }
                        </Container>

                }
            </>
        );
    }
}




const usersTable = (props, handleClick) => {
    return (
        <Table hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>

                </tr>
            </thead>
            <tbody>
                {props.map(item => {
                    return <tr key={item.id} onClick={() => handleClick(item)}>
                        <th scope="row" value={item.id} >{item.id}</th>
                        <td value={item.first_name}>{item.first_name}</td>
                        <td value={item.last_name}>{item.last_name}</td>
                        <td value={item.email}>{item.email}</td>
                        <td>
                            <img src={item.avatar} alt={props.avatar} style={{ height: "50px", width: "50px" }} />
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
    );
}



const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
const mapDispatchToProsp = dispatch => {
    return {
        getUser: () => dispatch(get_user),
        userList: () => dispatch(get_user_list)
    }
}

export default connect(mapStateToProps, mapDispatchToProsp)(UserComponent);