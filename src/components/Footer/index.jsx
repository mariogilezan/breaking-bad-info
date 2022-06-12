import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  margin-top: 2rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color.primaryText};
    span {
      color: ${({ theme }) => theme.color.accent};
    }
  }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterSection>
      <p>
        &copy; {currentYear} <span>Br</span>eaking <span>Ba</span>d Info. All
        Rights Reserved.
      </p>
    </FooterSection>
  );
}
