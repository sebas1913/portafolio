import React from 'react';

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, ...props }) => {
    return (
        <label {...props}>
            {children}
        </label>
    );
};

export default Label;
