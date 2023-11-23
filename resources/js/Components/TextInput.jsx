import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'tw-border-gray-300 focus:tw-border-indigo-500 focus:tw-ring-indigo-500 tw-rounded-md tw-shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
