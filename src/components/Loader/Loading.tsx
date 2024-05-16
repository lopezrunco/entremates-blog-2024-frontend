import React from "react";

export interface ILoadingProps {
    dotType?: string;
    children?: React.ReactNode;
}

export const Loading: React.FC<ILoadingProps> = (props) => {
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
