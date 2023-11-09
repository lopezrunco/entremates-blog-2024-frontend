import React from 'react';

import CenterPiece from '../CenterPiece';

export interface ILoadingProps {
    dotType?: string;
    children?: any
}

export const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
    const { children, dotType } = props;

    return (
        <div className="text-center">
            <div className="stage">
                <div className={dotType} />
            </div>
            {children}
        </div>
    );
};

Loading.defaultProps = {
    dotType: 'dot-bricks'
};

export interface ILoadingComponentProps {
    card?: boolean;
    dotType?: string;
    children?: any
}

export const LoadingComponent: React.FunctionComponent<ILoadingComponentProps> = (props) => {
    const { card, children, dotType } = props;

    if (card) {
        return (
            <CenterPiece>
                <Loading dotType={dotType}>{children}</Loading>
            </CenterPiece>
        );
    }

    return <Loading dotType={dotType}>{children}</Loading>;
};

LoadingComponent.defaultProps = {
    card: true,
    dotType: 'dot-bricks'
};

export default LoadingComponent;
