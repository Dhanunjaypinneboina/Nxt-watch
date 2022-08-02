import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${props => (props.backgroundColor ? '#0f0f0f' : '#f9f9f9')};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 1px 2px 30px 50px '#94a3b8';
`
export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
  margin-top: 10px;
`

export const Label = styled.label`
  font-size: 15px;
  color: ${props => (props.color ? '#ffffff' : '#181818')};
  font-weight: 500;
  padding: 10px;
`

export const Input = styled.input`
  width: 300px;
  height: 28px;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const LoginButton = styled.button`
  align-self: center;
  width: 300px;
  height: 30px;
  background-color: #4f46e5;
  color: #f8fafc;
  border: none;
  border-radius: 5px;
  color: #ffffff;
`
