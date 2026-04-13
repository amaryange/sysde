import { forwardRef } from 'react';
import Select, { GroupBase, MultiValue, SingleValue, StylesConfig } from 'react-select';
import { FormFeedback, Label } from 'reactstrap';

export type ComboboxOption<V = string> = {
  value: V;
  label: string;
  isDisabled?: boolean;
};

type SingleOnChange<V> = (value: ComboboxOption<V> | null) => void;
type MultiOnChange<V> = (value: ComboboxOption<V>[]) => void;

type BaseProps<V = string> = {
  options: ComboboxOption<V>[];
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isRtl?: boolean;
  error?: string;
  className?: string;
  inputId?: string;
  name?: string;
  onBlur?: () => void;
  noOptionsMessage?: string;
};

type SingleProps<V = string> = BaseProps<V> & {
  isMulti?: false;
  value?: ComboboxOption<V> | null;
  onChange?: SingleOnChange<V>;
};

type MultiProps<V = string> = BaseProps<V> & {
  isMulti: true;
  value?: ComboboxOption<V>[];
  onChange?: MultiOnChange<V>;
};

export type ComboboxProps<V = string> = SingleProps<V> | MultiProps<V>;

const PRIMARY = '#24695c';
const PRIMARY_ALPHA = (a: number) => `rgba(36,105,92,${a})`;

const customStyles = <V,>(hasError: boolean): StylesConfig<ComboboxOption<V>, boolean, GroupBase<ComboboxOption<V>>> => ({
  control: (base, state) => ({
    ...base,
    borderColor: hasError ? '#dc3545' : state.isFocused ? PRIMARY : '#ced4da',
    boxShadow: hasError
      ? '0 0 0 0.2rem rgba(220,53,69,.25)'
      : state.isFocused
      ? `0 0 0 0.2rem ${PRIMARY_ALPHA(0.25)}`
      : 'none',
    '&:hover': {
      borderColor: hasError ? '#dc3545' : PRIMARY,
    },
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? PRIMARY : state.isFocused ? PRIMARY_ALPHA(0.1) : undefined,
    color: state.isSelected ? '#fff' : undefined,
    '&:active': {
      backgroundColor: PRIMARY,
      color: '#fff',
    },
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: PRIMARY_ALPHA(0.15),
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: PRIMARY,
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: PRIMARY,
    '&:hover': {
      backgroundColor: PRIMARY,
      color: '#fff',
    },
  }),
});

function ComboboxInner<V = string>(
  {
    options,
    label,
    placeholder = 'Sélectionner...',
    isDisabled = false,
    isLoading = false,
    isClearable = true,
    isRtl = false,
    error,
    className,
    inputId,
    name,
    onBlur,
    noOptionsMessage = 'Aucun résultat',
    ...rest
  }: ComboboxProps<V>,
  ref: React.Ref<any>
) {
  const hasError = Boolean(error);

  const handleChange = (selected: MultiValue<ComboboxOption<V>> | SingleValue<ComboboxOption<V>>) => {
    if (!rest.onChange) return;
    if ((rest as MultiProps<V>).isMulti) {
      (rest as MultiProps<V>).onChange!(Array.isArray(selected) ? (selected as ComboboxOption<V>[]) : []);
    } else {
      (rest as SingleProps<V>).onChange!(selected as ComboboxOption<V> | null);
    }
  };

  return (
    <div className='mb-2'>
      {label && (
        <Label className='col-form-label' htmlFor={inputId}>
          {label}
        </Label>
      )}
      <Select<ComboboxOption<V>, boolean>
        ref={ref}
        inputId={inputId}
        name={name}
        options={options}
        value={rest.value ?? null}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isMulti={(rest as MultiProps<V>).isMulti ?? false}
        className={className}
        styles={customStyles<V>(hasError)}
        noOptionsMessage={() => noOptionsMessage}
        classNamePrefix='combobox'
      />
      {hasError && (
        <FormFeedback style={{ display: 'block' }}>{error}</FormFeedback>
      )}
    </div>
  );
}

const Combobox = forwardRef(ComboboxInner) as <V = string>(
  props: ComboboxProps<V> & { ref?: React.Ref<any> }
) => React.ReactElement;

export default Combobox;
