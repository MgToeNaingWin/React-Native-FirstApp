import React from 'react';
import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faCircle,
    faTimes,
    faPencil,
} from '@fortawesome/free-solid-svg-icons';

type IconsProp = PropsWithChildren<{
    name: string;
}>;

const TicTacToeButton = ({ name }: IconsProp) => {
    switch (name) {
        case 'circle':
            return <FontAwesomeIcon icon={faCircle} size={60} color="green" />;
        case 'cross':
            return <FontAwesomeIcon icon={faTimes} size={60} color="red" />;
        default:
            return <FontAwesomeIcon icon={faPencil} size={30} color="#ccc" />;
    }
};

export default TicTacToeButton;