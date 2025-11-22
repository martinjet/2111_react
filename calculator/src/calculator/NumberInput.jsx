function NumberInput({name, label, value, onChange}) {

    return (
        <label html={name}>
            {label}
            <input
                onChange={onChange}  
                value={value}
                type="number"
                name={name}
                required
            />

        </label>
    )

}

export default NumberInput;