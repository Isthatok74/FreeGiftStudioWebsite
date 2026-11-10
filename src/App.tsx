import styled, { createGlobalStyle } from 'styled-components';

import ContentHome from './ContentHome';

function App(): JSX.Element {
  return (
    <RootContainer>
      <GlobalStyles />

      <AppHeader>
        <LogoImage src="/fgs-logo.png" alt="Free Gift Studio logo" />
        <Tagline>Indie games and apps</Tagline>
      </AppHeader>

      <AppMain>
        <ContentHome />
      </AppMain>

      <AppFooter>
        <p>&copy; 2023-{new Date().getFullYear()} Free Gift Studio</p>
      </AppFooter>
    </RootContainer>
  );
}

const RootContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const AppHeader = styled.header`
  background-color: #252525;
  padding: 2.5rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const LogoImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

const Tagline = styled.p`
  font-size: 1.1em;
  opacity: 0.6;
  margin: 0;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.85em;
`;

const AppMain = styled.main`
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 3rem 1rem;
  flex: 1;
`;

const AppFooter = styled.footer`
  background-color: #252525;
  color: rgba(255, 255, 255, 0.5);
  padding: 1rem;
  font-size: 0.85em;
`;

export default App;
