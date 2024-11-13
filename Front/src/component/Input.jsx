const Input = ({ name, type, placeholder, value, onChange }) => {
  const handleChange = (value) => onChange(value);

  return (
    <input
      name={name}
      type={type || "text"}
      placeholder={placeholder}
      value={value || ""}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Input;
