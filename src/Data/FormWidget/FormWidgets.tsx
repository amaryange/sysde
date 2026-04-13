export const ClipBoardTextParagraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

export const BasicSwitchData = [
  {
    title: 'Default Switch',
    mediaClass: 'text-end',
  },
  {
    title: 'Unchecked Switch',
    mediaClass: 'text-end',
  },
  {
    title: 'With Icon',
    mediaClass: 'text-end icon-state',
  },
  {
    title: 'Unchecked With Icon',
    mediaClass: 'text-end icon-state',
  },
  {
    title: 'Disabled State',
    mediaClass: 'text-end',
    disabled: true,
  },
  {
    title: 'Disabled With Icon',
    mediaClass: 'text-end icon-state',
    disabled: true,
  },
];

export const ColorSwitchData = [
  {
    title: 'Primary Color',
    spanClass: 'switch-state bg-primary',
    mediaClass: 'text-end icon-state switch-outline',
  },
  {
    title: 'Secondary Color',
    spanClass: 'switch-state bg-secondary',
    mediaClass: 'text-end icon-state switch-outline',
  },
  {
    title: 'Success Color',
    spanClass: 'switch-state bg-success',
    mediaClass: 'text-end icon-state switch-outline',
  },
  {
    title: 'Info Color',
    spanClass: 'switch-state bg-info',
    mediaClass: 'text-end icon-state switch-outline',
  },
  {
    title: 'Warning Color',
    spanClass: 'switch-state bg-warning',
    mediaClass: 'text-end icon-state switch-outline',
  },
  {
    title: 'Danger Color',
    spanClass: 'switch-state bg-danger',
    mediaClass: 'text-end icon-state switch-outline',
  },
];

export const SwitchSizingData = [
  {
    title: 'Large Size',
    spanClass: 'switch-state',
    mediaClass: 'text-end switch-lg',
    mediaClass1: 'text-end switch-lg icon-state',
  },
  {
    title: 'Large Unchecked',
    spanClass: 'switch-state',
    mediaClass: 'text-end switch-lg',
    mediaClass1: 'text-end switch-lg icon-state',
  },
  {
    title: 'Normal Size',
    spanClass: 'switch-state',
    mediaClass: 'text-end ',
    mediaClass1: 'text-end icon-state',
  },
  {
    title: 'Normal Unchecked',
    spanClass: 'switch-state',
    mediaClass: 'text-end ',
    mediaClass1: 'text-end icon-state',
  },
  {
    title: 'Small Size',
    spanClass: 'switch-state',
    mediaClass: 'text-end switch-sm',
    mediaClass1: 'text-end switch-sm icon-state',
  },
  {
    title: 'Small Size Unchecked',
    spanClass: 'switch-state',
    mediaClass: 'text-end switch-sm',
    mediaClass1: 'text-end switch-sm icon-state',
  },
];

export const SwitchWithColorData = [
  {
    title: 'Primary Color (Disabled)',
    spanClass: 'switch-state bg-primary',
    mediaClass: 'text-end icon-state switch-lg',
    disabled: true,
  },
  {
    title: 'Secondary Color',
    spanClass: 'switch-state bg-secondary',
    mediaClass: 'text-end icon-state switch-lg',
  },
  {
    title: 'Success Color',
    spanClass: 'switch-state bg-success',
    mediaClass: 'text-end icon-state',
  },
  {
    title: 'Info Color',
    spanClass: 'switch-state bg-info',
    mediaClass: 'text-end icon-state',
  },
  {
    title: 'Warning Color',
    spanClass: 'switch-state bg-warning',
    mediaClass: 'text-end icon-state switch-sm',
  },
  {
    title: 'Danger Color',
    spanClass: 'switch-state bg-danger',
    mediaClass: 'text-end icon-state switch-sm',
  },
];

export const Options = [
  { value: 'AL', label: 'Alabama' },
  { value: 'WY', label: 'Wyoming' },
  { value: 'WY', label: 'Coming' },
  { value: 'WY', label: 'Hanry Die' },
  { value: 'WY', label: 'John Doe' },
];

export const Options2 = [
  { label: 'Developer', isDisabled: true },
  { value: 'AL', label: 'Alabama' },
  { value: 'WY', label: 'Wyoming' },
  { label: 'Designer', isDisabled: true },
  { value: 'WY', label: 'Coming' },
  { value: 'WY', label: 'Hanry Die' },
  { value: 'WY', label: 'John Doe' },
];

export const Options3 = [
  { value: 'AL', label: 'First' },
  { value: 'WY', label: 'Second', isDisabled: true },
  { value: 'WY', label: 'Third' },
];

export const Options4 = [
  { label: 'Developer', isDisabled: true },
  { value: 'AL', label: 'Alabama' },
  { value: 'WY', label: 'Wyoming' },
  { value: 'WY', label: 'Coming' },
  { value: 'WY', label: 'Hanry Die' },
  { value: 'WY', label: 'John Doe' },
];

export const OutlineSelect2Options = (
  <>
    <option value='opt1'>Select One Value Only</option>
    <option value='opt2'>Type 2</option>
    <option value='opt3'>Type 3</option>
    <option value='opt4'>Type 4</option>
    <option value='opt5'>Type 5</option>
    <option value='opt6'>Type 6</option>
    <option value='opt7'>Type 7</option>
    <option value='opt8'>Type 8</option>
  </>
);
