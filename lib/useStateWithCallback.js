import { useRef, useState, useEffect } from 'react';

function useStateWithCallback(initialValue) {
  const callbackRef = useRef(null);

  const [state, setState] = useState({ value: initialValue, changer: false });

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current();

      callbackRef.current = null;
    }
  }, [state]);

  const setValueWithCallback = (newValue, callback) => {
    callbackRef.current = callback;

    return setState((oldValue) => ({
      value: newValue,
      changer: !oldValue.changer,
    }));
  };

  return [state.value, setValueWithCallback];
}

export default useStateWithCallback;
