import React from "react";
import ProfileForm from "./ProfileForm";


class EditProfile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    bandname: "",
    bio: "",
  };

  updateFirstName(firstName) {
    this.setState({ firstName });
  }

  updateLastName(lastName) {
    this.setState({ lastName });
  }

  updateUsername(username) {
    this.setState({ username });
  }

  updatePassword(password) {
    this.setState({ password });
  }

  updateBandName(bandname) {
    this.setState({ bandname });
  }

  updateBio(bio) {
    this.setState({ bio });
  }

  handleUpdateProfile(profile) {
    this.props.updateProfile(profile);
    this.props.history.push("/profile");

    const id = profile.id;
    console.log(profile.id);

    const url = `https://food-on-tour-api.herokuapp.com/profiles/${id}`;
    const options = {
      method: "PATCH",
      body: JSON.stringify(profile),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then((data) => {
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Edit My Profile</h2>
        <ProfileForm
          handleSubmit={this.handleUpdateProfile.bind(this)}
          profile={this.props.profile}
        />
      </div>
    );
  }
}

export default EditProfile;
