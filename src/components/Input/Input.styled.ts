import styled from '@emotion/styled';

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  border: 1.2px solid;
  border-color: #d3d8dc;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &::placeholder {
    color: #a1abb5;
  }

  &:is(:hover, :focus) {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentColor};
  }

  &:not(:placeholder-shown):invalid {
    border-color: ${({ theme }) => theme.colors.invalidColor};
  }

  &:not(:placeholder-shown):valid {
    border-color: ${({ theme }) => theme.colors.validColor};
  }
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const ShowPassBtn = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  border: none;
  background-color: transparent;

  & > svg {
    display: block;
    color: #67717b;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) > svg {
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.024em;
  text-align: left;
`;
