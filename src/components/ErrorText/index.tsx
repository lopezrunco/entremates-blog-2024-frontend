import React from 'react';

export interface IErrorTextProps {
    error: string;
}

const ErrorText: React.FC<IErrorTextProps> = ({ error }) => {
    return error ? <small className="text-danger">{error}</small> : null;
};

export default ErrorText;
