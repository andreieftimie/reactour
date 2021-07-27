import PropTypes from 'prop-types'

export const propTypes = {
  disableFocusLock: PropTypes.bool,
  badgeContent: PropTypes.func,
  highlightedMaskClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  className: PropTypes.string,
  closeWithMask: PropTypes.bool,
  customClose: PropTypes.instanceOf(Element),
  disabledFill: PropTypes.string,
  inViewThreshold: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  lastStepNextButton: PropTypes.node,
  removeCloseButtonOnLastStep: PropTypes.bool,
  maskClassName: PropTypes.string,
  maskSpace: PropTypes.number,
  nextButton: PropTypes.node,
  onAfterOpen: PropTypes.func,
  onBeforeClose: PropTypes.func,
  onRequestClose: PropTypes.func,
  prevButton: PropTypes.node,
  scrollDuration: PropTypes.number,
  scrollOffset: PropTypes.number,
  showButtons: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showNavigationNumber: PropTypes.bool,
  showNumber: PropTypes.bool,
  startAt: PropTypes.number,
  goToStep: PropTypes.number,
  getCurrentStep: PropTypes.func,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      selector: PropTypes.string,
      content: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.func,
      ]).isRequired,
      position: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'center']),
      ]),
      action: PropTypes.func,
      actionBefore: PropTypes.func,
      style: PropTypes.object,
      stepInteraction: PropTypes.bool,
      navDotAriaLabel: PropTypes.string,
      roundedStep: PropTypes.bool,
    })
  ),
  update: PropTypes.string,
  updateDelay: PropTypes.number,
  disableInteraction: PropTypes.bool,
  disableDotsNavigation: PropTypes.bool,
  disableKeyboardNavigation: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(['esc', 'right', 'left'])),
    PropTypes.bool,
  ]),
  rounded: PropTypes.number,
  accentColor: PropTypes.string,
  highlightedBorder: PropTypes.shape({
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }),
}

export const defaultProps = {
  disableFocusLock: false,
  showNavigation: true,
  showNavigationNumber: true,
  removeCloseButtonOnLastStep: false,
  showButtons: true,
  showCloseButton: true,
  showNumber: true,
  scrollDuration: 1,
  maskSpace: 10,
  updateDelay: 1,
  disableInteraction: false,
  rounded: 0,
  accentColor: '#007aff',
  closeWithMask: true,
}
