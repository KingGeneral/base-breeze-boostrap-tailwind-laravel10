export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'tw-rounded tw-border-gray-300 tw-text-indigo-600 tw-shadow-sm focus:tw-ring-indigo-500 ' +
                className
            }
        />
    );
}
