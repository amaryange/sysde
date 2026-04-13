import { Javascript, BuckyBarnes, JasonBorne, AndewJon, JohnyWaston, ComerenDiaz, JohnyWilliam, SarahLoren, AnnaMull, DionCast, KarleneLex, VellaChism, WaiSchalk, Hobbies } from '@/Constant';
import { AlertCircle, Clock, Image, MessageSquare, ThumbsUp, UserPlus, Users } from 'react-feather';

export const SocialAppLogos = (
  <ul className=' user-list-social flex-row'>
    <li>
      <a href={Javascript}>
        <i className='fa fa-facebook'></i>
      </a>
    </li>
    <li>
      <a href={Javascript}>
        <i className='fa fa-google-plus'></i>
      </a>
    </li>
    <li>
      <a href={Javascript}>
        <i className='fa fa-twitter'></i>
      </a>
    </li>
    <li>
      <a href={Javascript}>
        <i className='fa fa-instagram'></i>
      </a>
    </li>
    <li>
      <a href={Javascript}>
        <i className='fa fa-rss'></i>
      </a>
    </li>
  </ul>
);

export const SocialAppTopFollowData = [
  {
    title: 'Follower',
    number: 325,
  },
  {
    title: 'Following',
    number: 420,
  },
  {
    title: 'Likes',
    number: 500,
  },
];

export const MyProfileSectionData = [
  {
    name: JohnyWaston,
    image: '1.jpg',
    id: 'UncontrolledTooltipExample',
  },
  {
    name: AndewJon,
    image: '3.jpg',
    id: 'UncontrolledTooltipExample1',
  },
  {
    name: ComerenDiaz,
    image: '5.jpg',
    id: 'UncontrolledTooltipExample2',
  },
  {
    name: BuckyBarnes,
    image: '2.png',
    id: 'UncontrolledTooltipExample3',
  },
  {
    name: JasonBorne,
    image: '8.jpg',
    id: 'UncontrolledTooltipExample4',
  },
  {
    name: ComerenDiaz,
    image: '3.png',
    id: 'UncontrolledTooltipExample5',
  },
];

export const MutualFriendData = [
  {
    id: 1,
    imageName: '2.png',
    title: BuckyBarnes,
    email: 'winter@gmail.com',
    socialClass: 'social-online',
  },
  {
    id: 2,
    imageName: '10.jpg',
    title: SarahLoren,
    email: 'barnes@gmail.com',
    socialClass: 'social-busy',
  },
  {
    id: 3,
    imageName: '6.jpg',
    title: JasonBorne,
    email: 'jasonb@gmail.com',
    socialClass: 'social-offline',
  },
  {
    id: 4,
    imageName: '8.jpg',
    title: ComerenDiaz,
    email: 'comere@gmail.com',
    socialClass: 'social-offline',
  },
  {
    id: 5,
    imageName: '4.jpg',
    title: AndewJon,
    email: 'andrewj@gmail.com',
    socialClass: 'social-online',
  },
  {
    id: 6,
    imageName: '4.jpg',
    title: JohnyWaston,
    email: 'johny@gmail.com',
    socialClass: 'social-busy',
  },
  {
    id: 7,
    imageName: '3.jpg',
    title: JohnyWilliam,
    email: 'johnyw@gmail.com',
    socialClass: 'social-offline',
  },
  {
    id: 8,
    imageName: '2.png',
    title: BuckyBarnes,
    email: 'winter@gmail.com',
    socialClass: 'social-online',
  },
  {
    id: 9,
    imageName: '10.jpg',
    title: SarahLoren,
    email: 'barnes@gmail.com',
    socialClass: 'social-busy',
  },
  {
    id: 10,
    imageName: '6.jpg',
    title: JasonBorne,
    email: 'jasonb@gmail.com',
    socialClass: 'social-offline',
  },
  {
    id: 11,
    imageName: '8.jpg',
    title: ComerenDiaz,
    email: 'comere@gmail.com',
    socialClass: 'social-offline',
  },
  {
    id: 12,
    imageName: '4.jpg',
    title: AndewJon,
    email: 'andrewj@gmail.com',
    socialClass: 'social-online',
  },
  {
    id: 13,
    imageName: '4.jpg',
    title: JohnyWaston,
    email: 'johny@gmail.com',
    socialClass: 'social-busy',
  },
  {
    id: 14,
    imageName: '3.jpg',
    title: JohnyWilliam,
    email: 'johnyw@gmail.com',
    socialClass: 'social-offline',
  },
];

export const ActivityFeedData = [
  {
    id: 1,
    image: '10.jpg',
    title: AndewJon,
    desc: `Commented on Shaun Park's`,
    time: '20 min Ago',
  },
  {
    id: 2,
    image: '3.jpg',
    title: JohnyWaston,
    desc: `Commented on Shaun Park's`,
    time: '1 hour Ago',
  },
  {
    id: 3,
    image: '5.jpg',
    title: ComerenDiaz,
    desc: `Commented on Shaun Park's`,
    time: '1 days Ago',
  },
  {
    id: 4,
    image: '4.jpg',
    title: ComerenDiaz,
    desc: `Commented on Shaun Park's`,
    time: '6 days Ago',
  },
  {
    id: 5,
    image: '3.jpg',
    title: JohnyWaston,
    desc: `Commented on Shaun Park's`,
    time: '1 hour Ago',
  },
  {
    id: 6,
    image: '5.jpg',
    title: ComerenDiaz,
    desc: `Commented on Shaun Park's`,
    time: '1 days Ago',
  },
];

export const ProfileIntroData = [
  {
    span: 'About Me : ',
    paragraph: "Hi, I’m elana, I’m 30 and I work as a web Designer for the 'Daydreams'  Agency in Pier 56.",
  },
  {
    span: 'Favorite Tv Shows : ',
    paragraph: 'Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.',
  },
  {
    span: 'Favorite Music Bands : ',
    paragraph: 'Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy..',
  },
];

export const FollowersData = [
  {
    id: 1,
    imageName: '2.png',
    name: 'Bucky Barnes',
  },
  {
    id: 2,
    imageName: '3.png',
    name: 'Sarah Loren',
  },
  {
    id: 3,
    imageName: '4.jpg',
    name: 'Jason Borne',
  },
  {
    id: 4,
    imageName: '10.jpg',
    name: 'Comeren Diaz',
  },
  {
    id: 5,
    imageName: '11.png',
    name: 'Andew Jon',
  },
];

export const FollowingsData = [
  {
    img: `3.png`,
    name: 'Sarah Loren',
  },
  {
    img: `2.png`,
    name: 'Bucky Barnes',
  },
  {
    img: `10.jpg`,
    name: 'Comeren Diaz',
  },
  {
    img: `11.png`,
    name: 'Jason Borne',
  },
  {
    img: `3.png`,
    name: 'Andew Jon',
  },
];

export const LatestPhotosData = [`post-1.png`, `post-2.png`, `post-3.png`, `post-4.png`, `post-5.png`, `post-6.png`, `post-7.png`, `post-8.png`];

export const FriendsData = [`social-app/post-6.png`, `social-app/post-7.png`, `social-app/post-8.png`, `user/3.png`, `user/2.png`, `user/10.jpg`, `user/3.png`, `social-app/post-1.png`, `social-app/post-2.png`, `social-app/post-3.png`, `social-app/post-4.png`];

export const SocialTabsData = [
  {
    id: '1',
    logo: <Clock />,
    title: 'Timeline',
  },

  {
    id: '2',
    logo: <AlertCircle />,
    title: 'About',
  },
  {
    id: '3',
    logo: <Users />,
    title: 'Friends',
  },
  {
    id: '4',
    logo: <Image />,
    title: 'Photos',
  },
];

export const TimelineParagraph = "The only way to do something in depth is to work hard. I've always thought of the T-shirt as the Alpha of the fashion alphabet. My breakfast is very important. Everything I do is a matter of heart, body and soul.";

export const SocialChatData = [
  {
    className: 'your-msg',
    image: '1.jpg',
    name: 'Jason Borne',
    time: '1 Year Ago',
    comment: 'we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post',
  },
  {
    className: 'other-msg',
    image: '2.png',
    name: 'Alexendra Dhadio ',
    time: '1 Month Ago',
    comment: 'yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)',
  },
  {
    className: 'other-msg',
    image: '3.png',
    name: 'Olivia Borne',
    time: '15 Days Ago',
    comment: 'i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus',
  },
  {
    className: 'your-msg',
    image: '1.jpg',
    name: 'Jason Borne',
    time: '1 Year Ago',
    comment: 'we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post',
  },
];

export const Post2Data = ['Jason Borne', 'Issa Bell'];

export const PeopleYouMayKnowData = [
  { peopleName: JasonBorne, peopleImageName: '2.png' },
  { peopleName: AnnaMull, peopleImageName: '3.png' },
  { peopleName: DionCast, peopleImageName: '3.jpg' },
  { peopleName: KarleneLex, peopleImageName: '4.jpg' },
  { peopleName: VellaChism, peopleImageName: '8.jpg' },
  { peopleName: WaiSchalk, peopleImageName: '10.jpg' },
  { peopleName: KarleneLex, peopleImageName: '14.png' },
];

export const HobbiesAndInterestsData = [
  {
    heading1: Hobbies,
    heading2: 'Favorite Music Bands Artists',
    paragraph1: 'I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.',
    paragraph2: 'Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.',
  },
  {
    heading1: 'Favorite TV Shows',
    heading2: 'Favorite Books',
    paragraph1: 'Breaking Good, RedDevil, Bigg-Boss, People of Interest, The Running Dead, Found, American Guy.',
    paragraph2: 'The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.',
  },
  {
    heading1: 'Favorite Movies',
    heading2: 'Favorite Writers',
    paragraph1: 'Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad Ferrum Man.',
    paragraph2: 'Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandr Platt, Marcus Roth.',
  },
  {
    heading1: 'Favorite Games',
    heading2: 'Other Interests',
    paragraph1: 'The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.',
    paragraph2: 'Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.',
  },
];

export const EducationAndEmploymentData = [
  {
    heading1: ' The New College of Design',
    heading2: 'Digital Design Intern',
    date1: '2001-2006',
    date2: '2006-2008',
    paragraph1: 'The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.',
    paragraph2: 'Digital Design Intern for the “Multimedz” agency. Was in charge of the communication with the clients.',
  },
  {
    date1: '2008',
    date2: '2001-2006',
    heading1: ' Rembrandt Institute',
    heading2: 'UX/UI Designer',
    paragraph1: 'Five months Digital Illustration course. Professor: Leonardo Stagg.',
    paragraph2: 'Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.',
  },
  {
    date1: '2010',
    date2: '2008-2013',
    heading1: ' The Digital College',
    heading2: 'The New College OfDesign',
    paragraph1: '6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle.',
    paragraph2: 'UI/UX Designer for the “Daydreams” Agency.',
  },
];

export const ActivityLogData = [
  {
    id: 1,
    icon: <ThumbsUp className='m-r-20' />,
    description: 'Comeren Diaz likes your photos.',
  },
  {
    id: 2,
    icon: <UserPlus className='m-r-20' />,
    description: 'Karlene Lex and Comeren Diaz now friends.',
  },
  {
    id: 3,
    icon: <MessageSquare className='m-r-20' />,
    description: 'Sarah Loren wrote on your timeline',
  },
  {
    id: 4,
    icon: <ThumbsUp className='m-r-20' />,
    description: `Johny Waston likes your post's.`,
  },
  {
    id: 5,
    icon: <UserPlus className='m-r-20' />,
    description: 'Andew Jon became friends with Comeren Diaz.',
  },
  {
    id: 6,
    icon: <UserPlus className='m-r-20' />,
    description: 'Johny Waston became friends with Bucky Barnes.',
  },
];

export const FriendsCardData = [
  {
    card_bg: 'user-card/1.jpg',
    avatar: 'avtar/3.jpg',
    name: 'Mark Jecno',
    post: 'Manager',
    follower: '9564',
    following: '49',
    totalPost: '96',
  },
  {
    card_bg: 'user-card/2.jpg',
    avatar: 'avtar/16.jpg',
    name: 'Johan Deo',
    post: 'Designer',
    follower: '2578',
    following: '26',
    totalPost: '96',
  },
  {
    card_bg: 'user-card/3.jpg',
    avatar: 'avtar/11.jpg',
    name: 'Dev John',
    post: 'Developer',
    follower: '6545',
    following: '91',
    totalPost: '21',
  },
  {
    card_bg: 'user-card/7.jpg',
    avatar: 'avtar/16.jpg',
    name: 'Johan Deo',
    post: 'Designer',
    follower: '2578',
    following: '26',
    totalPost: '96',
  },
  {
    card_bg: 'user-card/5.jpg',
    avatar: 'avtar/11.jpg',
    name: 'Dev John',
    post: 'Developer',
    follower: '6545',
    following: '91',
    totalPost: '21',
  },
  {
    card_bg: 'user-card/6.jpg',
    avatar: 'avtar/3.jpg',
    name: 'Mark Jecno',
    post: 'Manager',
    follower: '9564',
    following: '49',
    totalPost: '96',
  },
];

export const SocialMediaIconsData = ['fa-facebook', 'fa-google-plus', 'fa-twitter', 'fa-instagram', 'fa-rss'];

export const PhotosTabData = ['big-lightgallry/01.jpg', 'big-lightgallry/02.jpg', 'big-lightgallry/03.jpg', 'big-lightgallry/04.jpg', 'big-lightgallry/05.jpg', 'big-lightgallry/06.jpg', 'big-lightgallry/07.jpg', 'big-lightgallry/08.jpg', 'big-lightgallry/09.jpg', 'big-lightgallry/010.jpg', 'big-lightgallry/011.jpg', 'big-lightgallry/012.jpg'];

export const PhotoDescription = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.";
