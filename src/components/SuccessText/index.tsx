import React from 'react';

export interface ISuccessTextProps {
    success: string;
}

const SuccessText: React.FC<ISuccessTextProps> = ({ success }) => {
    return success ? <small className="text-success">{success}</small> : null;
};

export default SuccessText;
