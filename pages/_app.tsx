import type { AppProps } from 'next/app'
import Head from "next/head";
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import GlobalStyled from 'styles/GlobalStyled';
import theme from 'styles/theme';

import GlobalHeader from 'components/atoms/GlobalHeader';

const Styled = {
	Wrapper: styled(GlobalStyled.HeightRow)`
		max-width: 720px;
		min-width: 360px;
		/* min-height: 920px; */
		height: 100vh;
	`,
};

const MyApp = ({ Component, pageProps }: AppProps) => {

	const navInfos = [
		{
			value: '/',
			label: '메인 페이지',
		},
		{
			value: '/ListPage',
			label: '리스트 페이지',
		},
	];


	return (
		<>
			<Head>
				<meta name="test" content="width=device-width, initial-scale=1" />
				<title>nextJS typescript test</title>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<GlobalStyled.Row justifyContent="center">
					<Styled.Wrapper>
						<GlobalHeader infos={navInfos} />
						<Component {...pageProps} />
					</Styled.Wrapper>
				</GlobalStyled.Row>
			</ThemeProvider>
		</>
	);
}

export default MyApp
