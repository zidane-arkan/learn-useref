import React from 'react';

const Input = React.forwardRef((props,ref) => {
    return (
        <div className={props.classValue}>
            <label htmlFor={props.statusInput} className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
            <input
                ref={ref}
                type={props.statusInput}
                name={props.statusInput}
                id={props.statusInput}
                placeholder="example@example.com"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </div>
    );
});

export default Input;
