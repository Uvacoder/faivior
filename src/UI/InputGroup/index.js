import React, { useRef, useState } from 'react'
import Container from './styles'
import { Button } from '../../UI'
import { BsEye, BsEyeSlashFill } from 'react-icons/bs'

const InputGroup = ({
  children,
  onChange,
  componentType,
  className,
  label,
  type,
  ...props
}) => {
  const errorRef = useRef(null)
  const [showPassword, setDisplay] = useState(false)
  return (
    <Container
      className={`input--group ${
        componentType === 'password' ? 'password--container' : ''
      } ${className ? className : ''}`}
    >
      {children ? (
        children
      ) : (
        <>
          {label && <label>{label}</label>}
          <input
            {...props}
            type={showPassword ? 'text' : type ? type : 'text'}
            onChange={(e) => {
              errorRef.current.innerHTML = ''
              if (typeof onChange === 'function') onChange(e)
            }}
          />
          {componentType === 'password' && (
            <React.Fragment>
              {showPassword ? (
                <Button icon className={'password--icon'}>
                  <BsEye role="button" onClick={() => setDisplay(false)} />
                </Button>
              ) : (
                <Button icon className={'password--icon'}>
                  <BsEyeSlashFill
                    role="button"
                    onClick={() => setDisplay(true)}
                  />
                </Button>
              )}
            </React.Fragment>
          )}
        </>
      )}
      <p className="error-msg" ref={errorRef} />
    </Container>
  )
}

export default InputGroup
