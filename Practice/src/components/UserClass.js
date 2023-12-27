import React from 'react';
import { GITHUB_URL } from '../utils/constants';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "",
                location: "",
                avatar_url: "", 
            }
        }
    }

    async componentDidMount(){
        const data = await fetch(GITHUB_URL + "anandpanda");
        const json = await data.json();

        this.setState({
            userInfo : json
        });
    }

    render() {

        // const { name, location, contact } = this.props;
        const { count } = this.state;
        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                {/* <h4>Contact : {contact}</h4> */}
            </div>
        )
    }
}

export default UserClass;