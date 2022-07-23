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
  border: 2px solid blue;
  padding: 20px;
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
  color: #475569;
  font-weight: 500;
  padding-top: 20px;
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
`
