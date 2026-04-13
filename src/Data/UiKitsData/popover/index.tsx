export const BasicPopoverData = [
  {
    id: 2,
    PopoverHeader: 'Popover title',
    PopoverBody: 'And heres some amazing content. Its very engaging. Right?',
    btnColor: 'primary',
    btnText: 'Dismissible popover',
  },
  {
    id: 3,
    placement: 'bottom',
    PopoverHeader: 'Popover title',
    PopoverBody: 'And heres some amazing content. Its very engaging. Right?',
    btnColor: 'primary',
    btnText: 'On Hover Tooltip',
    trigger: 'hover',
  },
];

export const DirectionData = [
  {
    id: 5,
    PopoverHeader: 'Popover title',
    placement: 'right',
    PopoverBody: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
    btnColor: 'primary',
    btnText: 'Popover on right',
  },
  {
    id: 6,
    PopoverHeader: 'Popover title',
    placement: 'bottom',
    PopoverBody: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
    btnColor: 'primary',
    btnText: 'Popover on bottom',
  },
  {
    id: 7,
    PopoverHeader: 'Popover title',
    placement: 'left',
    PopoverBody: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
    btnColor: 'primary',
    btnText: 'Popover on left',
  },
];

export const OffsetPopoverData = [
  {
    id: 13,
    placement: 'top',
    PopoverHeader: 'Popover title',
    PopoverBody: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
    btnColor: 'primary',
    btnText: '0px',
    offset: '0px',
  },
  {
    id: 14,
    placement: 'top',
    PopoverHeader: 'Popover title',
    PopoverBody: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
    btnColor: 'primary',
    btnText: '20px 20px On Hover',
    offset: '20px,20px',
    trigger: 'hover',
  },
  {
    id: 15,
    placement: 'top',
    PopoverHeader: 'Popover title',
    PopoverBody: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
    btnColor: 'primary',
    btnText: '0px On Hover',
    offset: '0px',
    trigger: 'hover',
  },
];
const PopoverBody = (
  <>
    {'Just add'} <code>{"data-html='true'"}</code>
    {'attribute and you can purse'}
    <span style={{ marginLeft: '3px', marginRight: '3px' }}>
      <b>{'html'}</b>
    </span>
    {'code'}
  </>
);

export const HtmlContentsData = [
  {
    id: 9,
    placement: 'right',
    PopoverBody: PopoverBody,
    btnColor: 'primary',
    btnText: 'Popover on right',
  },
  {
    id: 10,
    placement: 'bottom',
    PopoverBody: PopoverBody,
    btnColor: 'primary',
    btnText: 'Popover on bottom',
  },
  {
    id: 11,
    placement: 'left',
    PopoverBody: PopoverBody,
    btnColor: 'primary',
    btnText: 'Popover on left',
  },
];
