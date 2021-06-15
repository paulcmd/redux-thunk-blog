import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        const { user } = this.props

        if (!user) {
            return null
        }

        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) }
     
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)

/*
-fetchUser action creator is coming in from actions expeting to receive an id from
this component. id is sent in as a prop from PostList as userId.
-ownProps is provided to grab this component's own props.
*/

/*

we are refactoring so that the component does not have to handle the logic, also
so that the component can be reused.

before refactor:
class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        const user = this.props.users.find(
            (user) => user.id === this.props.userId
        )

        if (!user) {
            return null
        }

        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

*/