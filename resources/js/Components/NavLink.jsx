import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'tw-inline-flex tw-items-center tw-px-1 tw-pt-1 tw-border-b-2 tw-text-sm tw-font-medium tw-leading-5 tw-transition tw-duration-150 tw-ease-in-out focus:tw-outline-none ' +
                (active
                    ? 'tw-border-indigo-400 tw-text-gray-900 focus:tw-border-indigo-700 '
                    : 'tw-border-transparent tw-text-gray-500 hover:tw-text-gray-700 hover:tw-border-gray-300 focus:tw-text-gray-700 focus:tw-border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
