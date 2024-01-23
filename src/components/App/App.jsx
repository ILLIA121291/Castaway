import AppBody from '../App-body/app-body';
import AppFooter from '../App-footer/app-footer';
import AppHeader from '../App-header/app-header';
import './App.css';

const data = [
  {
    id: 1,
    image: '/image_latest_episodes/IMAGE_1.png',
    episode: 3,
    titel: 'Should you get outboard audio gear?',
    text: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
    tag: 'Gear',
  },
  {
    id: 2,
    image: '/image_latest_episodes/IMAGE_2.png',
    episode: 2,
    titel: 'Mic tricks to take you to the next level',
    text: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
    tag: 'Tips & Tricks',
  },

  {
    id: 3,
    image: '/image_latest_episodes/IMAGE_3.png',
    episode: 1,
    titel: 'The best microphone under $200',
    text: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
    tag: 'Gear',
  },
  {
    id: 4,
    image: '/image_latest_episodes/IMAGE_1.png',
    episode: 3,
    titel: 'Should you get outboard audio gear?',
    text: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
    tag: 'Gear',
  },
];

const squares = [
  {
    id: 1,
    titel: 'I can’t recommend this podcast enough',
    authour: 'Betty Lacey',
  },
  {
    id: 2,
    titel: 'Jacob is the best in the business',
    authour: 'Adam Driver',
  },
  {
    id: 3,
    titel: 'A wealth of audio knowledge',
    authour: 'Marcus Brown',
  },
  {
    id: 4,
    titel: 'Every episode is a gem!',
    authour: 'Jessica Knowl',
  },
  {
    id: 5,
    titel: 'Whoa whoa, let me take some notes!',
    authour: 'Scott Adams',
  },
  {
    id: 6,
    titel: 'I’ve upped my game considerably since I started listening',
    authour: 'Steven Blast',
  },
];

function App() {
  return (
    <>
      <AppHeader />
      <AppBody data={data} squares={squares} />
      <AppFooter />
    </>
  );
}

export default App;
