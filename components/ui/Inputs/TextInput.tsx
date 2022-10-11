import styled from 'styled-components'

const TextInput = styled.input`
  padding: 3px 6px;
  border: none;
  border-bottom: ${(p) => `1px solid ${p.theme.colors.main}`};
  background: transparent;
  color: white;
  outline: none;
  text-align: center;
  font-size: 1rem;
  border-radius: 0px;
`

export default TextInput
