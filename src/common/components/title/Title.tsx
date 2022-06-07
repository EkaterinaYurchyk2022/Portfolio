import React from 'react';
import styles from './Title.module.scss';

type TitlePropsType = {
    text: string
}

export const Title: React.FC<TitlePropsType> = ({text}) => {
    return (
        <div className={styles.title}>
            <h2>{text}</h2>
        </div>

    );
};
