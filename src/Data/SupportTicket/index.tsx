import { AssetsImagePath } from '@/Constant';
import { SupportTicketColumnsProps } from '@/Type/SideBarType';
import Image from 'next/image';
import { Media } from 'reactstrap';

export const SupportTicketSubHeading = [
  {
    text: 'List of ticket opend by customers',
  },
];

export const TicketData = [
  {
    id: 1,
    title: 'Order',
    num: 2563,
    class: 'progress-bar bg-primary',
  },
  {
    id: 2,
    title: 'Pending',
    num: 8943,
    class: 'progress-bar bg-secondary',
  },
  {
    id: 3,
    title: 'Running',
    num: 2500,
    class: 'progress-bar bg-warning',
  },
  {
    id: 4,
    title: 'Smooth',
    num: 2060,
    class: 'progress-bar bg-info',
  },
  {
    id: 5,
    title: 'Done',
    num: 5600,
    class: 'progress-bar bg-success',
  },
  {
    id: 6,
    title: 'Cancel',
    num: 2560,
    class: 'progress-bar bg-danger',
  },
];

export const SupportTicketColumns: any = [
  {
    name: 'Image',
    selector: (row: SupportTicketColumnsProps) => row['image'],
    sortable: true,
  },
  {
    name: 'Position',
    selector: (row: SupportTicketColumnsProps) => row['position'],
    sortable: true,
  },
  {
    name: 'Salary',
    selector: (row: SupportTicketColumnsProps) => row['salary'],
    sortable: true,
    center: true,
  },
  {
    name: 'Office',
    selector: (row: SupportTicketColumnsProps) => row['office'],
    sortable: true,
    center: true,
  },
  {
    name: 'Skill',
    selector: (row: SupportTicketColumnsProps) => row['skill'],
    sortable: true,
    center: true,
  },
  {
    name: 'Extn',
    selector: (row: SupportTicketColumnsProps) => row['extn'],
    sortable: true,
    center: true,
  },
  {
    name: 'Email',
    selector: (row: SupportTicketColumnsProps) => row['email'],
    sortable: true,
    center: true,
  },
];

export const SupportTicketTableData: SupportTicketColumnsProps[] = [
  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3 media' src={`${AssetsImagePath}/user/1.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Airi Satou</div>
        </Media>
      </Media>
    ),
    position: 'System Architect',
    salary: '$320,800',
    office: 'Edinburgh',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-primary' style={{ width: '80%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 5421,
    email: 't.nixon@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3 media' src={`${AssetsImagePath}/user/2.png`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Ashton Cox</div>
        </Media>
      </Media>
    ),
    position: 'Junior Technical Author',
    salary: '$86,000',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '30%' }}></div>
        </div>
      </div>
    ),
    extn: 1562,
    email: 'a.cox@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/3.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Bradley Greer</div>
        </Media>
      </Media>
    ),
    position: 'Software Engineer',
    salary: '$132,000',
    office: 'London',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' style={{ width: '60%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 2558,
    email: 'b.greer@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/4.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Brielle Williamson</div>
        </Media>
      </Media>
    ),
    position: 'Integration Specialist',
    salary: '$372,000',
    office: 'New York',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '70%' }}></div>
        </div>
      </div>
    ),
    extn: 4804,
    email: 'b.williamson@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/5.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Caesar Vance</div>
        </Media>
      </Media>
    ),
    position: 'Pre-Sales Support',
    salary: '$106,450',
    office: 'New York',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '20%' }}></div>
        </div>
      </div>
    ),
    extn: 8330,
    email: 'c.vance@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/6.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Cedric Kelly</div>
        </Media>
      </Media>
    ),
    position: 'Junior Technical Author',
    salary: '$86,000',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '10%' }}></div>
        </div>
      </div>
    ),
    extn: 1562,
    email: 'a.cox@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/7.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Charde Marshall</div>
        </Media>
      </Media>
    ),
    position: 'Senior Javascript Developer',
    salary: '$433,060',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' style={{ width: '90%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 6224,
    email: 'c.kelly@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/8.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Colleen Hurst</div>
        </Media>
      </Media>
    ),
    position: 'Senior Javascript Developer',
    salary: '$433,060',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '60%' }}></div>
        </div>
      </div>
    ),
    extn: 6224,
    email: 'c.kelly@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/9.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Dai Rios</div>
        </Media>
      </Media>
    ),
    position: 'Accountant',
    salary: '$162,700',
    office: 'Tokyo',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '30%' }}></div>
        </div>
      </div>
    ),
    extn: 5407,
    email: 'a.satou@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/10.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Garrett Winters</div>
        </Media>
      </Media>
    ),
    position: 'Integration Specialist',
    salary: '$372,000',
    office: 'New York',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-info' role='progressbar' style={{ width: '40%' }}></div>
        </div>
      </div>
    ),
    extn: 4804,
    email: 'b.williamson@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/11.png`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Gloria Little</div>
        </Media>
      </Media>
    ),
    position: 'Sales Assistant',
    salary: '$137,500',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-warning' style={{ width: '60%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 9608,
    email: 'h.chandler@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/12.png`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Haley Kennedy</div>
        </Media>
      </Media>
    ),
    position: 'Integration Specialist',
    salary: '$327,900',
    office: 'Tokyo',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' style={{ width: '80%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 6200,
    email: 'r.davidson@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/10.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Jena Gaines</div>
        </Media>
      </Media>
    ),
    position: 'Javascript Developer',
    salary: '$205,500',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '30%' }}></div>
        </div>
      </div>
    ),
    extn: 2360,
    email: 'c.hurst@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/3.png`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Michael Silva</div>
        </Media>
      </Media>
    ),
    position: 'Software Engineer',
    salary: '$103,600',
    office: 'Edinburgh',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-primary' role='progressbar' style={{ width: '35%' }}></div>
        </div>
      </div>
    ),
    extn: 1667,
    email: 's.frost@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/1.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Quinn Flynn</div>
        </Media>
      </Media>
    ),
    position: 'Office Manager',
    salary: '$90,560',
    office: 'London',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-warning' role='progressbar' style={{ width: '55%' }}></div>
        </div>
      </div>
    ),
    extn: 3814,
    email: 'j.gaines@datatables.net',
  },

  {
    image: (
      <Media>
        <Image height={30} width={30} className='rounded-circle img-30 me-3' src={`${AssetsImagePath}/user/10.jpg`} alt='Generic placeholder image' unoptimized/>
        <Media body className='align-self-center'>
          <div>Sonya Frost</div>
        </Media>
      </Media>
    ),
    position: 'Support Lead',
    salary: '$342,000',
    office: 'Edinburgh',
    skill: (
      <div className='progress-showcase'>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-danger' role='progressbar' style={{ width: '93%' }}></div>
        </div>
      </div>
    ),
    extn: 9497,
    email: 'q.flynn@datatables.net',
  },
];
