import React from "react";
import * as S from './Counter.styled';

const Counter = ({title, count}) => {
    return (
        <S.Wrap>
            <S.Title>{title}</S.Title>
            <S.Counter>{count}</S.Counter>
        </S.Wrap>
    )
}

export default Counter;
