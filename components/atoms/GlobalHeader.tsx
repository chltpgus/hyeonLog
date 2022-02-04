import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'

import GlobalStyled from 'styles/GlobalStyled';


export interface GlobalHeaderInfoProps {
    label: string;
    value: string;
};

export interface GlobalHeaderProps {
    infos: Array<GlobalHeaderInfoProps>;
};

const Styled = {
    Wrapper: styled(GlobalStyled.Row)`
        height: 50px;
    `,
};

const GlobalHeader = (props: GlobalHeaderProps) => {
    const {
        infos,
    } = props;

    const list = infos.map((res: GlobalHeaderInfoProps, i: number) => {
        return (
            <GlobalStyled.Col
                key={i}
                p={2}
                fontWeight="bold"
            >
                <Link href={res?.value}>
                    <a> {res?.label}</a>
                </Link>
            </GlobalStyled.Col>
        );
    })

    return (
        <Styled.Wrapper
            justifyContent="space-between"
            bg="blue500"
            color="white"
        >
            {list}
        </Styled.Wrapper>
    );
};


GlobalHeader.defaultProps = {
    infos: [
        {
            value: '-',
            label: '-',
        },
        {
            value: '-',
            label: '-',
        },
    ],
}

export default GlobalHeader