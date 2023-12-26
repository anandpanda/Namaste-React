import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <UserClass name="John Doe" location="New York" contact="1234567890" />
        </div>
    );
}

export default About;