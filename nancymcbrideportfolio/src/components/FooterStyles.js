import styled from 'styled-components';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Box = styled.div`
padding: 80px 60px;

position: absolute;
bottom: 0;
width: 100%;
height: 80px;


@media (max-width: 100%) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	margin: 0 auto;
	background: blue;
`;

export const Column = styled.div`
display: flex;

flex-direction: column;
text-align: center;
`;

export const Row = styled.div`
display: grid;

grid-template-columns: repeat(auto-fill,
						minmax(175px, 1fr));
grid-gap: 5px;

@media (max-width: 100%) {
	grid-template-columns: repeat(auto-fill,
						minmax(175px, 1fr));
}
`;

export const FooterLink = styled.a`
color: white;
position: center;
bottom: 0px;
height: 30px;
font-size: 18px;
text-decoration: none;
&:hover {
	color: red;
	transition: 200ms ease-in;
}
`;

// export const Heading = styled.p`
// font-size: 24px;
// color: #fff;
// margin-bottom: 0px;
// font-weight: bold;
// `;
