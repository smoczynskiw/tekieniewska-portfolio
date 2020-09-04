export default {
  main: {
    width: '100%',
    height: '18vh',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: isWhite => ({
    width: '1008px',
    height: '72px',
    borderRadius: '5px',
    border: 'solid 0.5px #c7c6c1',
    background: isWhite ? '#c7c6c1' : 'inherit',
    color: !isWhite ? '#c7c6c1' : 'inherit',
    fontFamily: 'inherit',
    fontSize: '27px',
    lineHeight: '2.15',
    letterSpacing: '-1.35px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 0.2s ease-in-out'
  })
}