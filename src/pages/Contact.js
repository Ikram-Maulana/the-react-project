import { ListGroup } from "flowbite-react";
import React from "react";

const Contact = () => {
  return (
    <section className="p-5">
      <h1 className="section-title">Contact Me</h1>
      <p className="section-description">Get in touch with me</p>
      <div className="my-2">
        <ListGroup>
          <ListGroup.Item
            style={{
              textAlign: "left",
            }}
          >
            Email: ikram_maulana@onedrive.web.id
          </ListGroup.Item>
        </ListGroup>
      </div>
      <p className="section-description">Social media</p>
      <div className="my-2">
        <ListGroup>
          <ListGroup.Item
            href="https://instagram.com/ikram_maulana"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </ListGroup.Item>
          <ListGroup.Item
            href="https://bit.ly/ikram-link"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </ListGroup.Item>
          <ListGroup.Item
            href="https://github.com/ikram-maulana"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </ListGroup.Item>
          <ListGroup.Item
            href="https://dribbble.com/ikram_maulana"
            target="_blank"
            rel="noreferrer"
          >
            Dribbble
          </ListGroup.Item>
        </ListGroup>
      </div>
    </section>
  );
};

export default Contact;
