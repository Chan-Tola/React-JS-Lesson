import React from "react";
import styled from "styled-components";
import Author from "./Author";
import Doc from "./Doc";
import Image from "./Image";
<style scoped></style>;
const Profile = () => {
  return (
    <React.Fragment>
      <Container>
        <ImagePr>
          <img
            src="https://i.pinimg.com/236x/22/3f/a8/223fa84e2e58598d27a6d733b5ff99e7.jpg"
            alt="my_profile"
          />
        </ImagePr>
        <Author />
        <Image />
        <Doc />
      </Container>
    </React.Fragment>
  );
};
const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 3rem;
  place-items: center;
`;
const ImagePr = styled.div`
  width: 250px;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export default Profile;
