import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="tw-min-h-screen tw-bg-gray-100">
            <nav className="tw-bg-white tw-border-b tw-border-gray-100">
                <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
                    <div className="tw-flex tw-justify-between tw-h-16">
                        <div className="tw-flex">
                            <div className="shrink-0 tw-flex tw-items-center">
                                <Link href="/">
                                    <ApplicationLogo className="tw-block tw-h-9 tw-w-auto tw-fill-current tw-text-gray-800" />
                                </Link>
                            </div>

                            <div className="tw-hidden tw-space-x-8 sm:tw--my-px sm:ms-10 sm:tw-flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div className="tw-hidden sm:tw-flex sm:tw-items-center sm:ms-6">
                            <div className="ms-3 tw-relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="tw-inline-flex tw-rounded-md">
                                            <button
                                                type="button"
                                                className="tw-inline-flex tw-items-center tw-px-3 tw-py-2 tw-border tw-border-transparent tw-text-sm tw-leading-4 tw-font-medium tw-rounded-md tw-text-gray-500 tw-bg-white hover:tw-text-gray-700 focus:tw-outline-none tw-transition tw-ease-in-out tw-duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 tw-h-4 tw-w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 tw-flex tw-items-center sm:tw-hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-text-gray-400 hover:tw-text-gray-500 hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-bg-gray-100 focus:tw-text-gray-500 tw-transition tw-duration-150 tw-ease-in-out"
                            >
                                <svg className="tw-h-6 tw-w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'tw-inline-flex' : 'tw-hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'tw-inline-flex' : 'tw-hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'tw-block' : 'tw-hidden') + ' sm:tw-hidden'}>
                    <div className="tw-pt-2 tw-pb-3 tw-space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="tw-pt-4 tw-pb-1 tw-border-t tw-border-gray-200">
                        <div className="tw-px-4">
                            <div className="tw-font-medium tw-text-base tw-text-gray-800">{user.name}</div>
                            <div className="tw-font-medium tw-text-sm tw-text-gray-500">{user.email}</div>
                        </div>

                        <div className="tw-mt-3 tw-space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="tw-bg-white tw-shadow">
                    <div className="tw-max-w-7xl tw-mx-auto tw-py-6 tw-px-4 sm:tw-px-6 lg:tw-px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
