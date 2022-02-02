import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

const User = () => {
    const baseURL = "https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentPost";
    
    const [postName, setPostName] = useState("");
    const [postAge, setPostAge] = useState("");
    const [postBio, setPostBio] = useState("");
    const [postLinkedin, setPostLinkedin] = useState("");
    const [postFacebook, setPostFacebook] = useState("");
    const [postInstagram, setPostInstagram] = useState("");
    const [postImage, setPostImage] = useState("");
    const [postResult, setPostResult] = useState("");

    const postData = async () => {
        const postData = {
            uid: "1",
            name: postName,
            age: postAge,
            bio: postBio,
            linkedin: postLinkedin,
            fb: postFacebook,
            instagram: postInstagram,
            img: postImage,
        }

        try {
            const res = await fetch(baseURL, {
                method: "post",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(postData),
              });

              if (!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
              }

        }
        catch (err) {
            setPostResult(err.message);
          }
    }

  return <div>
          <UserCard>
          <div><h2>Edit Profile</h2></div>
              <div >
                  <TextField 
                  label="Name" 
                  type="text" 
                  placeholder="Your Name" 
                  onChange={(e) => setPostName(e.target.value)} />
                  <TextField 
                  label="Age" 
                  type="text" 
                  placeholder="Your Age" 
                  onChange={(e) => setPostAge(e.target.value)} />
              </div>

              <div>
                  <TextField
                    label="Bio"
                    placeholder="Your Bio"
                    onChange={(e) => setPostBio(e.target.value)}
                  />
                  <TextField 
                  label="Linkedin"
                  type="text" 
                  placeholder="Linkedin profile" 
                  onChange={(e) => setPostLinkedin(e.target.value)}
                  />
              </div>
              <div>
                  <TextField 
                  label="Facebook"
                  type="text" 
                  placeholder="Facebook Profile" 
                  onChange={(e) => setPostFacebook(e.target.value)}
                  />
                  <TextField 
                  label="Instagram"
                  type="text" 
                  placeholder="Instagram Profile" 
                  onChange={(e) => setPostInstagram(e.target.value)}
                  />
              </div>
              <div>
                  <TextField 
                  label="Profile Photo"
                  type="text" 
                  placeholder="upload image" 
                  onChange={(e) => setPostImage(e.target.value)}
                  width="100px"
                  />
              </div>
              <div >
              <Button style={{margin:"5px"}} variant="contained" onClick={postData}>Save Changes</Button>
              { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
              </div> 
          </UserCard>
  </div>;
};

export default User;

const UserCard = styled.div`
    margin: 10px auto;
    max-width: 620px;
    padding: 20px;
    justify-content: space-around;
    border-bottom: 1px solid grey;
    div {
        display: flex;
        margin: 3px;
    }`