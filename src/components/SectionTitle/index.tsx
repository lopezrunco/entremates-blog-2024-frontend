import React from 'react';

interface ISectionTitleProps {
    title: string;
    useSeparator?: boolean;
}

const SectionTitle: React.FC<ISectionTitleProps> = ({ title, useSeparator = true }) => {
    return (
        <div className="title">
            <h2>{title}</h2>
            {useSeparator && <hr />}
        </div>
    );
};

export default SectionTitle;
