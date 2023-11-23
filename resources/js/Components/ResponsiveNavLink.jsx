import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full tw-flex tw-items-start ps-3 pe-4 tw-py-2 tw-border-l-4 ${active
                    ? 'tw-border-indigo-400 tw-text-indigo-700 tw-bg-indigo-50 focus:tw-text-indigo-800 focus:tw-bg-indigo-100 focus:tw-border-indigo-700'
                    : 'tw-border-transparent tw-text-gray-600 hover:tw-text-gray-800 hover:tw-bg-gray-50 hover:tw-border-gray-300 focus:tw-text-gray-800 focus:tw-bg-gray-50 focus:tw-border-gray-300'
                } tw-text-base tw-font-medium focus:tw-outline-none tw-transition tw-duration-150 tw-ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
