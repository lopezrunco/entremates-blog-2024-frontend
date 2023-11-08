import React, { FC } from 'react';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className="title">
            <h2>{title}</h2>
            <hr />
        </div>
    );
};

export default SectionTitle;
