import "./select.scss"

export interface SelectProps {
    options: string[]
    title: string
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({ options, title, handleChange }: SelectProps) => {
    return (
        <fieldset className="field__set">
            <legend className="field__legend">{title}</legend>
            <select
                name={title}
                id={title}
                className="field__select"
                onChange={(e) => handleChange(e)}
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
