import "./select.scss"

export interface SelectProps {
    options: string[]
    title: string
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    value: string
}

const Select = ({ options, title, handleChange, value }: SelectProps) => {
    return (
        <fieldset className="field__set">
            <legend className="field__legend">{title}</legend>
            <select
                name={title}
                id={title}
                className="field__select"
                onChange={(e) => handleChange(e)}
                value={value}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </fieldset>
    )
}

export default Select
