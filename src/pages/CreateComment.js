import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

const CreateComment = () => {
    const [ content, setContent ] = useState("");
    const [ articleid,  setarticleid  ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("content : ", content);
        console.log("articleid : ", articleid);
    }

    const handleChange = (event) => {
        console.log("target name  : ", event.target.name);
        console.log("target value : ", event.target.value);

        switch(event.target.name) {
            case "content":
                setContent(event.target.value);
                break;
            case "articleid":
                setarticleid(event.target.value);
                break;
            // no default
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="comments.content">
                    <Form.Label>Ecrire votre commentaire</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        onChange={handleChange}
                        value={content}
                    />
                </Form.Group>
                <Form.Group controlId="article.articleid">
                    <Form.Label>Choissiser id de l'article à commenter</Form.Label>
                    <Form.Control
                        type="number"
                        name="articleid"
                        onChange={handleChange}
                        value={articleid}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Postez votre commentaire.</Button>
            </Form>
        </Container>
    )
};

export default CreateComment;