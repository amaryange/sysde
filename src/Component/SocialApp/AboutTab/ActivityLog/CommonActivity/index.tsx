import { ActivityLogData } from '@/Data/SocialApp';
import { PeopleYouMayKnowProps } from '@/Type/SideBarType';

const CommonActivity = ({ heading }: PeopleYouMayKnowProps) => {
  return (
    <div className='my-activity'>
      <h6 className='f-w-600'>{heading}</h6>
      {ActivityLogData.map((item) => (
        <p key={item.id}>
          <span>{item.icon}</span>
          {item.description}
        </p>
      ))}
    </div>
  );
};

export default CommonActivity;
