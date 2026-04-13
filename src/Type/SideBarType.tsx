import React, { Ref, ReactNode } from 'react';
import { Placement } from 'react-bootstrap/esm/types';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import * as Icon from 'react-feather';

export interface ItemsType {
  title: string;
  icon?: React.JSX.Element;
  pathSlice?: string;
  type: string;
  active?: boolean;
  children?: ItemsType[];
  path?: string;
  bookmark?: boolean;
  badge1?: boolean;
}
export interface MenuItem {
  title: string;
  menucontent?: string;
  Items?: ItemsType[];
}

export interface SidebarMenuDropDownType {
  items:
    | {
        title: string;
        icon?: any;
        path?: any;
        pathSlice?: string | undefined;
        type: string;
        children?:
          | {
              title: string;
              pathSlice?: string | undefined;

              type: string;
              icon?: any;
              path?: any;
            }[]
          | undefined;
      }[]
    | undefined;
  handleOpen: (title: string | undefined, level: number) => void;
  active: string | null;
  level: number;
  setActive: (value: React.SetStateAction<string>) => void;
  linkActive: string;
  setLinkActive: React.Dispatch<React.SetStateAction<string>>;
}

export interface BreadCrumbType {
  mainTitle: string;
  parent?: string;
  title: string;
}

export interface CardHeaderCommonType {
  title: React.JSX.Element | string;
  description?:
    | string
    | {
        text: string | React.JSX.Element;
        code?: string | React.JSX.Element;
        anchor?: string;
        strong?: string;
      }[];
  description2?:
    | string
    | {
        text: string;
        code?: string;
        anchor?: string;
      }[];
  icon?: React.JSX.Element | undefined;
  Name?: string | undefined;
}

export interface ModalButtonType {
  btnText: string;
  defaultVal: string;
}

export interface FormModelType {
  modal: boolean;
  NewMessage: string;
  toggle: () => void;
  defaultVal: string;
}

export interface CommonModelType {
  isOpen: boolean;
  toggler: () => void;
  size?: string;
  title: string;
  bodyClass?: string;
  children?: string | any;
}

export interface OffsetTooltipType {
  item: {
    id: number;
    placement: any;
    btnText: string;
    offset: number[];
    tooltip: string;
  };
}

export interface CommonDropDownType {
  item: {
    btnClass: string;
    btnColor?: string;
    btnText: string;
  };
}

export interface SplitButtonDropdownType {
  item: {
    items: {
      item: string;
    }[];
    btnColor?: string;
    btnClass?: string;
    btnText?: string;
  };
}

export interface CommonPopoverType {
  item: {
    id: number;
    PopoverHeader?: string;
    PopoverBody: string | React.JSX.Element;
    btnColor: string;
    btnText: string;
    placement?: Placement | any;
    trigger?: undefined | string;
    offset?: string;
  };
}

export interface CommonDropType {
  item: {
    items: {
      item?: string | undefined;
      divider?: undefined | boolean;
    }[];
    btnText: string;
    btnColor: string;
    btnClass?: string;
  };
}

export interface AllCloseBodyType {
  toggle: (id: number) => void;
  element: number;
  isOpen: number | null;
}

export interface BasicBodyType {
  toggle: (id: number) => void;
  element: number;
  isOpen: number | null;
}

export interface PrimaryColorAccordionBodyType {
  toggle: (id: number) => void;
  element: number;
  isOpen: number | null;
}

export interface SecondaryColorAccordionBodyType {
  toggle: (id: number) => void;
  element: number;
  isOpen: number | null;
}

export interface WithIconBodyType {
  toggle: (id: number) => void;
  element: {
    id: number;
    icon: string;
  };
  isOpen: number | null;
}

export interface WithOperandBodyType {
  toggle: (id: number) => void;
  element: {
    id: number;
    icon: string;
  };
  isOpen: number | null;
}

export interface CommonAlertType {
  item: {
    id: number;
    alertText: string | React.JSX.Element;
    alertColor: string;
    buttonClose: string;
    icon?: React.JSX.Element | undefined;
    closeButton?: boolean;
    boldText?: string | undefined;
    text?: string | undefined;
    buttonContent?: string;
    divCls?: string;
    span?: boolean | undefined;
  };
  btnText?: string;
}

export interface SlickSliderType {
  slides: number;
  title: string;
  rtl?: boolean;
  lazyLoad?: any;
  autoplay?: boolean;
  focusOnSelect?: boolean;
}

export interface Dropzone1Type {
  getUploadParams: () => {
    url: string;
  };
}

export interface DropzoneType {
  getUploadParams: () => {
    url: string;
  };
  handleSubmit: (allFiles: any) => void;
}

export interface propsType {
  RowClass?: string;
}
export interface ChatMenuTabContentType {
  activeTab: number;
}

export interface CommonRowTypes {
  div1: string;
  div2: string;
  div3: string;
}

export interface CommonRow2 {
  RowClass: string;
}

export interface makeClientCropType {
  crop: () => Promise<void>;
}

export interface CommonHeaderClassType {
  title: string;
  children: ReactNode;
}

export interface HtmlContentTooltipType {
  item: {
    btnText: string;
    placement?: any;
    id: number;
    tooltip: string | undefined;
  };
}

export interface CommonTooltipType {
  item: {
    id: number;
    placement: any;
    tooltip: string;
    btnText: string;
  };
}

export interface CommonFormGroupPropsType {
  placeholder?: string;
  label?: string;
  ColSm?: number;
  InputClass?: string;
  defaultValue?: string;
  id?: string;
  maxLength?: number;
  labelClass?: string;
  inlineStyle?: string;
  InputType: 'text' | 'email' | 'select' | 'file' | 'radio' | 'checkbox' | 'switch' | 'textarea' | 'button' | 'reset' | 'submit' | 'date' | 'datetime-local' | 'hidden' | 'image' | 'month' | 'number' | 'range' | 'search' | 'tel' | 'url' | 'week' | 'password' | 'datetime' | 'time' | 'color';
}

export interface CommonMultipleSelectBoxPropsType {
  inputClassName: string;
  inputId?: string;
  defaultValue?: string;
}
export interface CommonSelectBoxPropsType {
  inputClassName: string;
  inputId?: string;
  defaultValue?: string;
}

export interface notesState {
  id: number;
  isDeleted: boolean;
}

interface StickyType {
  notesData: [] | notesState[];
}
export interface StickyReducerTypes {
  StickySlice: StickyType;
}

export interface postHeader {
  heading: string;
}

export interface PostReactType {
  h6: string;
}
export interface DateRangePickerPropsType {
  startDate: null;
  endDate: null;
  setDateRange: (update: any) => void;
}

export interface InputEmptyPropsType {
  startDate: null;
  endDate: null;
  setDateRange: (update: any) => void;
}

export interface PredefinedRangesPropType {
  handleChange: (date: string) => void;
  startDate1: string;
}

export interface SingleDatePickerPropType {
  startDate1: any;
  handleChange: (date: Date | null) => void;
}

export interface FullColorCommonType {
  label: string;
  className: string;
}

export interface MultiSelectBoxCommonPropsType {
  tittle: string;
  className?: string;
}

export interface CommonSwitchOutlineType {
  Checked?: boolean;
}
export interface HorizonatalFormRowCommonType {
  type: 'email' | 'password' | 'number' | 'text' | 'url';
  tittle: string;
  placeHolder: string;
}

export interface BirthDateTypes {
  goSteps: number;
  setGoSteps: (value: number) => void;
}

export interface EmailTypes {
  goSteps: number;
  setGoSteps: (value: number) => void;
}

export interface RegistrationTType {
  goSteps: number;
  setGoSteps: (value: number) => void;
}

export interface PieChartClassPropsType {
  data: any;
  title: string;
  colClass?: string;
  digit?: string;
}

export interface ComboChartClassPropsType {
  data: any;
}

export interface PieChart2ClassPropsType {
  data: any;
  is3D: boolean;
}

export interface PieChart3ClassPropsType {
  data: any;
  pieHole: number;
}

export interface PieChart4ClassPropType {
  data: any;
  pieStartAngle: number;
  pieSliceText: string;
}

export interface PieChart5ClassPropsType {
  data: any;
}

export interface PieChart6ClassPropsType {
  data: any;
}

export interface MegaFormCommonPropType {
  label: string;
  type: 'text' | 'email' | 'number';
  placeholder: string;
}

export interface FormPropType {
  firstName: string;
  lastName: string;
}

export interface IncomeCards {
  amount: string;
  title: string;
  percent: string;
  iconClass: React.JSX.Element;
}

export interface CardHeaderComponentType {
  title: string;
  subtitle: string;
  settingIcon?: boolean;
}
export interface propsType {
  activeTab: number;
}

export interface CardTypes {
  id: number;
  card_bg: string;
  avatar: string;
  name: string;
  post: string;
  follower: string;
  following: string;
  totalPost: string;
}
export interface newProjectTypes {
  title: string;
  client_name: string;
  rate: string;
  resolved: string;
  comment: string;
  description: string;
  progress?: string;
  badge: string;
}

export interface ProjectFormType {
  register: UseFormRegister<newProjectTypes>;
  errors?: FieldErrors<newProjectTypes>;
}

export interface ProductData {
  id: number;
  img: string;
  name: string;
  note: string;
  discription: string;
  discountPrice: string;
  status: string;
  price: number;
  stock: string;
  review: string;
  category: string;
  colors: string[];
  size: string[];
  tags: string[];
  variants: {
    color: string;
    images: string;
  }[];
  quantity?: number;
}

export interface filterValueTypes {
  brand: string[];
  color: string;
  value: {
    min: number;
    max: number;
  };
  sortBy: string;
  searchBy: string;
  category: string[];
}

export interface EccomInitialStateProps {
  Data: ProductData[];
  cartData: ProductData[];
  filterValue: filterValueTypes;
}

export interface CheckoutTableDataType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface ItemDescriptionTypes {
  ref: Ref<HTMLDivElement> | undefined;
}

export interface productListDataTypes {
  image?: string;
  Details?: React.JSX.Element;
  amount?: string;
  stock?: React.JSX.Element;
  start_date?: string;
  action?: React.JSX.Element;
}
export interface productColumnsTypes {
  name: string;
  selector: (row: any) => any;
  sortable: boolean;
  center: boolean;
  wrap?: undefined | boolean;
}
[];

export interface SimilarjobsCardsType {
  limit: number;
  jobClass: string;
  ribbion: boolean;
  col12: boolean;
}

export type fetherType = {
  iconName: keyof typeof Icon;
  className?: string;
};

export interface HeaderWithIconPropsTypes {
  setIsOpen: (parameter: boolean) => void;
  isOpen: boolean;
  Heading: string;
}
export interface emailType {
  id: number;
  image: string;
  name: string;
  type: string;
  text: string;
  time: string;
  favourite: string;
}

export interface FileManagerSearchBarProps {
  setSearchTerm: any;
  searchTerm: string;
}

export interface RightFileManagerHeaderSectionType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  getFile: () => void;
  onFileChange: (e: any) => void;
  onFileUpload: () => void;
}

export interface FileListType {
  id: number;
  name: string;
  size: string;
  modify: string;
  icon: string;
  folderClass: string;
  title: string;
  folderSize: string;
}
export interface PeopleYouMayKnowProps {
  heading: string;
}

export interface SocialMediaIconsProps {
  listClassName?: string;
}

export interface AllCardFooterProps {
  item: {
    id?: number;
    card_bg: string;
    avatar: string;
    name: string;
    post: string;
    follower: string;
    following: string;
    totalPost: string;
  };
}

export interface TabContentsProps {
  activeTab: string;
}

export interface NewBookmarksType {
  setFlipClass: React.Dispatch<React.SetStateAction<string>>;
}

export interface bookmarkedDataType {
  icon: ReactNode;
  path: string;
  id?: number;
  bookmarked?: boolean;
  title?: string;
}
export interface BookmarkSlice {
  linkItemsArray: bookmarkedDataType[] | [];
  bookmarkedData: bookmarkedDataType[];
}

export interface ListOfMenuType {
  input: string;
  searchBar: boolean;
  searchArr: bookmarkedDataType[];
  setInput: React.Dispatch<React.SetStateAction<string>>;
}
export interface searchBarType {
  icon: any;
  title: string;
  path: string;
  bookmarked: boolean;
  id: number;
}
export interface NavCostomerType {
  callbackNav: (select: string, open: boolean) => void;
  selected: string;
}
export interface AssignedToMeClassType {
  title: string;
}

export interface CreateTagPropType {
  tagCallback: (val: boolean) => void;
  tagModal: boolean;
}

export interface EmptyTaskClassPropType {
  title: string;
}

export interface NavClassPropType {
  activeToggle: (num: string) => void;
}

export interface TabClassPropType {
  activeTab: string;
}

export interface CreatedBymePropTypes {
  id: number;
  title: string;
  collection: string;
  desc: string;
}
export interface CommonTabCardPropType {
  tabId: string;
  tittle: string;
}

export interface AllTabsPropsType {
  id: number;
  title: string;
  url: string;
  detail: string;
  star: string;
  vote: string;
  news: string;
  videoLink?: string;
}

export interface SearchTabType {
  callbackActive: (tab: string) => void;
}
export interface Comment1Props {
  Image3?: boolean;
}
export interface knowledgeDataPropsType {
  id: number;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text2_badge?: string;
  text1_badge?: string;
  text3_badge?: string;
  text4_badge?: string;
}

export interface knowledgeBaseSliceType {
  data: [] | knowledgeDataPropsType[];
  inputValue: string;
}

export interface CollapseDataProps {
  isProfile: boolean;
}
export interface SupportTicketColumnsProps {
  image: string | React.JSX.Element;
  position: string;
  salary: string;
  office: string;
  skill: string | React.JSX.Element;
  email: string;
  extn: string | number;
}

export interface IconsCommonProps {
  title: string;
  iconType: string[];
  parentCallback: Function;
}

export interface IconsTag {
  tag: string;
}

export interface CopyDragAndDropOptionsType {
  copy: boolean;
  copySortSource: boolean;
  removeOnSpill: boolean;
  mirrorContainer: any;
  accepts: (target: Element | undefined) => boolean;
  copies: (el: Element | undefined) => boolean;
  copyItem: (sibling: HTMLElement | null) => boolean;
}

export interface DataRangePickerDescriptionType {
  data: {
    title: string;
    description: string | React.JSX.Element;
  };
}

export interface btnSubType {
  colorClass: string;
  title: string;
  size?: string;
  active?: boolean;
  disabled?: boolean;
  outline?: boolean;
  btnClass?: string;
}

export interface DefaultButtonDataPropType {
  title: string;
  span: string;
  subHeading:
    | string
    | {
        text: string | React.JSX.Element;
        code?: string | React.JSX.Element;
        anchor?: string;
        strong?: string;
      }[];
  btnSub: btnSubType[];
}

export interface GroupBtnColorType {
  colorClass: string;
  title1: string;
  title2: string;
  title3: string;
  btnClass?: string;
  size?: string;
  colClass?: string;
  outline1?: boolean;
  outline2?: boolean;
  outline3?: boolean;
  checkBox?: boolean;
}

export interface RadioButtonSubType {
  btnClass?: string;
  colorClass?: string;
  divClass?: string;
  id1?: string;
  title1?: string;
  id2?: string;
  title2?: string;
  checkBox?: boolean;
}
export interface GroupBtnData {
  title: string;
  color: GroupBtnColorType[];
}

export interface CommonMultipleSubHeadingProps {
  heading: string;
  subHeading?: {
    spanData: {
      text: string;
      code?: string;
      strong?: string;
    }[];
  }[];
}

export interface rowCreateCallBackData {
  name?: string;
  email: string;
  experience: string;
  sex: string;
  contactNumber: string;
  salary: any;
}

export interface projectFetchedDataType {
  id: number;
  title: string;
  badge: string;
  img: string;
  sites: string;
  desc: string;
  issue: string;
  resolved: string;
  comment: string;
  like: string;
  progress: string;
  customers_img1: string;
  customers_img2: string;
  customers_img3: string;
}
