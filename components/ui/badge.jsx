// components/ui/badge.jsx
import React from 'react';

export function Badge({ children, className = "", ...props }) {
    // Base styles matching the badge in PropertyCard
    const baseStyles = "inline-flex items-center px-2 py-1 text-sm font-medium rounded-sm bg-[#0196ff]/10 text-[#0196ff] hover:bg-[#0196ff]/20";

    // Combine base styles with any additional className passed via props
    const combinedClassName = `${baseStyles} ${className}`;

    return (
        <span className={combinedClassName} {...props}>
            {children}
        </span>
    );
}