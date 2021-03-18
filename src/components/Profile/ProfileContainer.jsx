import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId; // индификатор user
        if (!userId) {
            userId = 15844;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        console.log(this.props.status)

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}
let mapStateToProps = (state) => {
    return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})};

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter
)(ProfileContainer);
