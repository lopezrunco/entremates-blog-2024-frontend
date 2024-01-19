import React, { FC } from 'react';

interface ISectionTitleProps {
    title: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({ title }) => {
    return (
        <div className="title">
            <h2>{title}</h2>
            <hr />
        </div>
    );
};

export default SectionTitle;
