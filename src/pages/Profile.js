import React, { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    document.title = "Profile - The React Project";
  }, []);

  return (
    <section className="container p-5 mx-auto">
      <h1 className="section-title">Profile</h1>
      <p className="section-description">
        Hello, I'm Ikram Maulana, a Full-stack web developer and UI designer. I
        am someone who is very interested in the world of IT and the creative
        industry, where I can explore and imagine expressing my ideas visually.
        I am very happy to learn new things to add insight and feel challenged
        to learn it.
      </p>
    </section>
  );
};

export default Profile;
