import React from 'react';

import CenterElements from '../CenterElements';
import { Loading } from './Loading';

export interface ILoaderProps {
    card?: boolean;
    dotType?: string;
    children?: React.ReactNode;
}

export const Loader: React.FC<ILoaderProps> = (props) => {
    const { card, children, dotType } = props;

    if (card) {
        return (
            <CenterElements>
                <Loading dotType={dotType}>{children}</Loading>
            </CenterElements>
        );
    }
    return <Loading dotType={dotType}>{children}</Loading>;
};

Loader.defaultProps = {
    card: true,
    dotType: 'dot-bricks'
};

export default Loader;
