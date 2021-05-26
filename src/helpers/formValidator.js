export const isEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  )
}

const formValidator = (inputs) => {
  let validated = true
  Array.from(inputs).map((input) => {
    const { type, value, name, required } = input
    if (required) {
      if (value) {
        input.parentElement.getElementsByClassName('error-msg')[0].innerHTML =
          ''
      } else {
        validated = false
        input.parentElement.getElementsByClassName(
          'error-msg',
        )[0].innerHTML = `${name} cannot be blank`
      }
    }

    if (type === 'email') {
      if (isEmail(value)) {
        input.parentElement.getElementsByClassName('error-msg')[0].innerHTML =
          ''
      } else {
        validated = false
        input.parentElement.getElementsByClassName('error-msg')[0].innerHTML =
          'Invalid Email Address'
      }
    }

    if (type === 'password' || name === 'pin') {
      if (value) {
        if (value.length < 6) {
          validated = false
          input.parentElement.getElementsByClassName(
            'error-msg',
          )[0].innerHTML = `Your password must be at least 6 character long`
        } else {
          input.parentElement.getElementsByClassName('error-msg')[0].innerHTML =
            ''
        }
      } else {
        input.parentElement.getElementsByClassName(
          'error-msg',
        )[0].innerHTML = `Password cannot be blank`
      }
    }
    return input
  })
  return validated
}

export default formValidator
