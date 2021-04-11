import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  background-color: var(--purple-500);
  font-size: 4rem;
  margin-left: 2rem;
  z-index: 2;
  position: relative;
  transform: skew(-7deg);
  border: 10px solid var(--grey-900);

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--grey-900, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-content: center;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--grey-900, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Gilliland Fitness</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
