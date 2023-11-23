export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'tw-text-sm tw-text-red-600 ' + className}>
            {message}
        </p>
    ) : null;
}
