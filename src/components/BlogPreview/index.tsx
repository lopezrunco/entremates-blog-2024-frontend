import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

export interface IBlogPreviewProps {
    _id: string;
    title: string;
    picture?: string;
    headline: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    children?: any;
}

const BlogPreview: React.FunctionComponent<IBlogPreviewProps> = (props) => {
    const { _id, children, title, picture, author, createdAt, updatedAt } = props;

    const BGImageStyledItem = styled.div`
        background-image: url(${picture});
    `;

    return (
        <BGImageStyledItem className="item">
            <Link to={`/blogs/${_id}`} style={{ textDecoration: 'none' }}>
                <div className="overlay-top">
                    <span className="category">Novedades</span>
                    <h4>{title}</h4>
                    <span className="date">
                        {createdAt !== updatedAt ? `Modificado por ${author}` : `Creado por ${author}`}
                        {children}
                    </span>
                </div>
            </Link>
        </BGImageStyledItem>
    );
};

export default BlogPreview;
