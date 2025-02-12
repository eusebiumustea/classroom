interface RadioGroupProps {
  name: string;
  options: { label: string; value: string }[];
}

export function RadioGroup({ name, options }: RadioGroupProps) {
  return (
    <div className="flex justify-between mb-6">
      {options.map((option) => (
        <label key={option.value} className="flex items-center">
          <input
            type="radio"
            name={name}
            value={option.value}
            className="mr-2"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
