import beyonce from '../../assets/albumImages/beyonce.png';
import kendrick from '../../assets/albumImages/kendrick.jpeg';
import chrisbrown from '../../assets/albumImages/chrisbrown.jpeg';
import sir from '../../assets/albumImages/sir.png';
import weeknd from '../../assets/albumImages/weeknd.jpeg';

const carouselData = [
  { id: 0, text: 'This is Box 1', bg: 'bg-purple-400' },
  { id: 1, text: 'This is Box 2', bg: 'bg-red-400' },
  { id: 2, text: 'This is Box 3', bg: 'bg-sky-400' },
  { id: 3, text: 'This is Box 4', bg: 'bg-teal-400' },
  { id: 4, text: 'This is Box 5', bg: 'bg-yellow-400' },
];

export const carouselData2 = [
  {
    id: 0,
    imgUrl: beyonce,
    header: 'Beyonce',
    date: 'July 4',
    city: 'Washington D.C',
    details: '(2) Suite Tickets to the Cowboy Carter Tour',
  },
  {
    id: 1,
    imgUrl: kendrick,
    header: 'Kendrick Lamar',
    date: 'June 18',
    city: 'Washington D.C',
    details: '(2) Floor Tickets to the Grand National Tour',
  },
  {
    id: 2,
    imgUrl: chrisbrown,
    header: 'Chris Brown',
    date: 'Coming Soon',
    city: 'Stay Tuned',
    details: 'Coming Soon',
  },
  {
    id: 3,
    imgUrl: sir,
    header: 'Sir',
    date: 'Coming Soon',
    city: 'Stay Tuned',
    details: 'Coming Soon',
  },
  {
    id: 4,
    imgUrl: weeknd,
    header: 'The Weeknd',
    date: 'Coming soon',
    city: 'Stay Tuned',
    details: 'Coming Soon',
  },
];
export default carouselData;
