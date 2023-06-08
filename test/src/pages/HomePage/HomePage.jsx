import styled from 'styled-components';
import logo from '../../../src/assets/symbol-logo-gray.png';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
`;

const Img = styled.img`
  width: 100px;
`;

const Info = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  color: #767676;
`;

const Button = styled.button``;

const HomePage = () => {
  return (
    <Container>
      <Img src={logo} alt="감귤 마켓 로고" />
      <Info>유저를 검색해 팔로우 해보세요!</Info>
      <Button>검색하기</Button>
    </Container>
  );
};

export default HomePage;
