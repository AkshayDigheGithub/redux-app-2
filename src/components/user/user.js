import React, { Component } from 'react';
import { get_user, get_user_list } from '../../redux/Actions/usersAction';
import { connect } from 'react-redux';

class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        this.props.getUser()
    }
    render() {
        return (
            <>
                <h1>User list</h1>
                <button onClick={this.props.userList}>click for single user</button>

                {
                    this.props.users.length === 0 ?
                        <p>NO USER FOUND</p> :
                        <p>
                            {this.props.users.length === 6 ? <b>number of users is {this.props.users.length}</b> : null}
                        </p>
                }
            </>
        );
    }
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