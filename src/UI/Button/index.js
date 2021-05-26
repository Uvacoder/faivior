import React from 'react'
import Container from './style'
import Spinner from '../Spinner'

const Button = ({
  disabled = false,
  loading = false,
  primary = true,
  secondary,
  tertiary,
  full,
  style,
  small,
  type = 'button',
  className,
  rounded,
  icon,
  iconRight,
  iconLeft,
  bordered,
  spinnerWithTxt = false,
  hasShadow,
  onClick,
  children,
  ...rest
}) => {
  return (
    <Container
      className={`btn u--typo__btn ${loading ? 'loading--btn' : ''} ${
        className ? className : ''
      }`}
      icon={icon ? icon : undefined}
      iconRight={iconRight ? iconRight : undefined}
      spinnerWithTxt={spinnerWithTxt ? spinnerWithTxt : undefined}
      iconLeft={iconLeft ? iconLeft : undefined}
      disabled={disabled ? disabled : loading ? true : false}
      primary={primary}
      secondary={secondary ? secondary : undefined}
      tertiary={tertiary ? tertiary : undefined}
      rounded={rounded ? rounded : undefined}
      // hasShadow={hasShadow ? hasShadow : undefined}
      // bordered={bordered ? bordered : undefined}
      full={full ? full : undefined}
      small={small ? small : undefined}
      onClick={onClick}
      // loading={loading ? JSON.stringify(loading) : undefined}
      type={type}
      style={style}
      {...rest}
    >
      {spinnerWithTxt ? (
        <>
          {loading && <Spinner size={'1rem'} />} {children}
        </>
      ) : (
        <>{loading ? <Spinner size={'1rem'} /> : children}</>
      )}
    </Container>
  )
}
export default Button
