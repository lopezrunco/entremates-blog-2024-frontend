import styled from 'styled-components';
import React from 'react';

interface BackgroundImageProps {
    imageUrl?: string
    className?: string
    children?: React.ReactNode
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl, className, children }) => {
    return (
        <div className={className} style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}>
            {children}
        </div>
    );
};

// styled(BackgroundImage)`; exports a styled version of the BackgroundImage component.
export default styled(BackgroundImage)``;
