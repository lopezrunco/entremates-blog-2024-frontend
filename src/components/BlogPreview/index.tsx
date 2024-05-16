import { Link } from 'react-router-dom';
import React from 'react';

import BackgroundImage from '../BackgroundImage';
import placeholderImageSrc from '../../assets/images/placeholder.webp';

export interface IBlogPreviewProps {
    _id: string;
    title: string;
    picture?: string;
    headline: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    children?: React.ReactNode;
}

const BlogPreview: React.FC<IBlogPreviewProps> = (props) => {
    const { _id, children, title, picture, author, createdAt, updatedAt } = props;

    // Fallback img if picture is missing or invalid.
    const imageUrl = picture || placeholderImageSrc;

    return (
        <BackgroundImage imageUrl={imageUrl} className="item">
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
        </BackgroundImage>
    );
};

export default BlogPreview;
