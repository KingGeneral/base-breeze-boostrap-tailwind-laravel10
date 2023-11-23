export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block tw-font-medium tw-text-sm tw-text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
