import Styled from 'styled-components'

export default Styled.div`
  position: relative;
  padding-left: 18px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
span {
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 2px solid #E5E5E5;

}

/* On mouse-over, add a grey background color */
&:hover input ~ span {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
input:checked ~ span {
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
}

input:focus ~ span {
  border: 2px solid ${({ theme }) => theme.primary};
}
/* Create the checkmark/indicator (hidden when not checked) */
span:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
& input:checked ~ span:after {
  display: block;
}

/* Style the checkmark/indicator */
span:after {
  left: 0.3em;
  top: 0.01em;
  width: 4px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
`
