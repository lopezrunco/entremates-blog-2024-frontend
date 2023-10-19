import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';

export interface IBlogPreviewProps {
    _id: string;
    title: string;
    headline: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    children?: any;
}

const BlogPreview: React.FunctionComponent<IBlogPreviewProps> = (props) => {
    const { _id, children, title, headline, author, createdAt, updatedAt } = props;

    return (
        <Card className="border-0">
            <CardBody className="p-0">
                <Link to={`/blogs/${_id}`} style={{ textDecoration: 'none' }} className="text-primary">
                    <h1>
                        <strong>{title}</strong>
                    </h1>
                    <h3>{headline}</h3>
                </Link>
                {createdAt !== updatedAt ? (
                    <p>
                        Updated by {author} at {new Date(updatedAt).toLocaleString()}
                    </p>
                ) : (
                    <p>
                        Posted by {author} at {new Date(createdAt).toLocaleString()}
                    </p>
                )}
                {children}
            </CardBody>
        </Card>
    );
};

export default BlogPreview;
