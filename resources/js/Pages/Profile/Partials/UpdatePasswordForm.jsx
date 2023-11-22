import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="tw-text-lg tw-font-medium tw-text-gray-900">Update Password</h2>

                <p className="tw-mt-1 tw-text-sm tw-text-gray-600">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="tw-mt-6 tw-space-y-6">
                <div>
                    <InputLabel htmlFor="current_password" value="Current Password" />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        type="password"
                        className="tw-mt-1 tw-block tw-w-full"
                        autoComplete="current-password"
                    />

                    <InputError message={errors.current_password} className="tw-mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="New Password" />

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="tw-mt-1 tw-block tw-w-full"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="tw-mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password"
                        className="tw-mt-1 tw-block tw-w-full"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password_confirmation} className="tw-mt-2" />
                </div>

                <div className="tw-flex tw-items-center tw-gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="tw-transition tw-ease-in-out"
                        enterFrom="tw-opacity-0"
                        leave="tw-transition tw-ease-in-out"
                        leaveTo="tw-opacity-0"
                    >
                        <p className="tw-text-sm tw-text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
