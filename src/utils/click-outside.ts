export function clickOutside(node: HTMLElement, callbackFunction: () => void) {
  
  const handleClick = (event: any) => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      callbackFunction()
    }
  }

	document.addEventListener('click', handleClick, true);
  
  return {
    update(newCallbackFunction: () => void) {
      callbackFunction = newCallbackFunction;
    },
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
	}
}
