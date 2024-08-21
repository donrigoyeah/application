import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import {
  Award,
  Clock,
  CornerDownLeft,
  Crosshair,
  Play,
  Compass,
  DollarSign,
  Edit2,
  Feather,
  GitHub,
  MapPin,
  Music,
  Phone,
  Plus,
  Send,
  Terminal,
  Tv,
  Zap,
} from 'react-feather';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [ref5, inView5] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [ref6, inView6] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  
  const [contentSection, setContentSection] = useState(1);
  const [project, setProject] = useState(1);
  const [filteredGames, setFilterdGames] = useState(gameProjects[contentSection].content);
  const [codeAccepted, setCodeAccepted] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const code = '5123';

  useEffect(() => {
    if ('undefined' != typeof window) {
      setScreenWidth(window.screen.width);
    }
  }, [codeAccepted]);

  const CodeForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
      setIsValid(value.length > 0);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (inputValue === code) {
        setCodeAccepted(true);
        setShowPage(true);
      }
    };

    return (
      <>
 <div className='relative md:pt-20 text-center text-sm'>
          <p className='text-2xl'>
            Welcome to my portfolio website
          </p>
          <p className='text-xlp pt-4'>This website is best experienced on desktop.</p>
          <p
            className={classNames(' pt-4', {
              'text-red-500': screenWidth < 1000,
              'text-orange-500': screenWidth >= 1000 && screenWidth < 1450,
              'text-green-500': screenWidth >= 1450,
            })}
          >
            {screenWidth &&
              'Your screen size is ' + screenWidth + ' px.'}
          </p>
          <p
            className={classNames('pt-4')}
          >
            The code is 5123.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-3 justify-center items-center pt-12 md:pt-24 lg:pt-36'
        >
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter Code'
            className='col-start-1 col-span-2 rounded-tr-2xl rounded-bl-2xl h-10 text-center w-full'
          />
          <span className='col-start-1 col-span-3 h-0'></span>

          <button
            type='submit'
            disabled={!isValid}
            className='bg-secondary w-full rounded-tr-2xl rounded-bl-2xl col-start-3 col-span-1 text-center h-10'
          >
            Start
          </button>
        </form>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Portfolio SR</title>
        <meta name='description' content='Portfolio website SR' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-primary'>
        {!codeAccepted && (
          <div
            className={classNames(
              'w-screen h-screen flex flex-col justify-center items-center',
              {
                hidden: codeAccepted,
              }
            )}
          >
            <CodeForm />
          </div>
        )}
        {/* {codeAccepted && ( */}
        <div
          className={classNames(
            'relative transition-opacity duration-[3s] bg-transparent',
            {
              'opacity-0 h-0 hidden': !showPage,
              'opacity-100 overflow-y-visible': showPage,
            }
          )}
        >
          {/* <div className='absolute rotate-90 h-20 -top-5 z-0 -left-[80%]'>
              <span className='text-6xl decoration-black underline decoration-wavy text-transparent overflow-hidden  '>
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                <Image
                  className='absolute -right-32 -rotate-90 -top-2'
                  src='/assets/svg/snes.svg'
                  height={200}
                  width={200}
                  alt='unity logo'
                />
              </span>
            </div> */}
          <div className='grid grid-cols-12 h-[75%]'>
            <div className='md:col-span-6 col-span-12 bg-fourth z-10 p-4 overflow-hidden'>
              <Wobble>
                <div className='absoulte w-[800px] h-[800px] overflow-hidden'>
                  <Image
                    src='/assets/images/profilePicCut.png'
                    alt='Profile picture'
                    width={500}
                    height={500}
                  />
                </div>
              </Wobble>
              {/* <Mouse /> */}
            </div>

            <div className='md:col-span-6 col-span-12'>
              <div className='md:h-2/4 bg-primary flex flex-col items-left z-10 p-8'>
                <div className='flex md:h-0 h-1/3 md:py-20 py-4 pl-10 w-full justify-center md:hidden'>
                  <h1 className='md:text-7xl text-5xl text-center'>Sebastian Rieger</h1>
                </div>
                <div className='md:flex md:h-2/4 h-0 overflow-hidden'>
                  <span className='text-8xl hover:text-5xl transition-all'>S</span>
                  <span className='text-8xl hover:text-5xl transition-all'>e</span>
                  <span className='text-8xl hover:text-5xl transition-all'>b</span>
                  <span className='text-8xl hover:text-5xl transition-all'>a</span>
                  <span className='text-8xl hover:text-5xl transition-all'>s</span>
                  <span className='text-8xl hover:text-5xl transition-all'>t</span>
                  <span className='text-8xl hover:text-5xl transition-all'>i</span>
                  <span className='text-8xl hover:text-5xl transition-all'>a</span>
                  <span className='text-8xl hover:text-5xl transition-all'>n</span>
                </div>
                <div className='md:flex md:h-2/4 h-0 md:pb-10 overflow-hidden'>
                  <span className='text-8xl hover:text-5xl transition-all'>R</span>
                  <span className='text-8xl hover:text-5xl transition-all'>i</span>
                  <span className='text-8xl hover:text-5xl transition-all'>e</span>
                  <span className='text-8xl hover:text-5xl transition-all'>g</span>
                  <span className='text-8xl hover:text-5xl transition-all'>e</span>
                  <span className='text-8xl hover:text-5xl transition-all'>r</span>
                </div>
              </div>
              <div className='md:h-2/4 md:p-12 p-4 bg-secondary'>
                <div className='grid grid-cols-2 md:justify-start justify-center z-20'>
                  <span className='flex flex-nowrap col-span-1 md:text-5xl text-2xl hover:pl-10 hover:pl-4 transition-all p-3'>
                    <Compass className='inline md:h-10 md:w-10 mr-5' />
                    Science
                  </span>
                  <span className='flex flex-nowrap col-span-1 md:text-5xl text-2xl hover:pl-10 transition-all p-3'>
                    <Zap className='inline md:h-10 md:w-10 mr-5' />
                    GameDev
                  </span>
                  <span className='flex flex-nowrap col-span-1 md:text-5xl text-2xl hover:pl-10 transition-all p-3'>
                    <Terminal className='inline md:h-10 md:w-10 mr-5' />
                    Code
                  </span>
                  <span className='flex flex-nowrap col-span-1 md:text-5xl text-2xl hover:pl-10 transition-all p-3'>
                    <Edit2 className='inline md:h-10 md:w-10 mr-5' />
                    Design
                  </span>
                  <span className='flex flex-nowrap col-span-1 md:text-5xl text-2xl hover:pl-10 transition-all p-3'>
                    <Music className='inline md:h-10 md:w-10 mr-5' />
                    Music
                  </span>
                  <span className='flex flex-nowrap col-span-1 md:text-5xl text-2xl hover:pl-10 transition-all p-3'>
                    <Tv className='inline md:h-10 md:w-10 mr-5' />
                    Pop culture
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 bg-primary h-30' ref={ref}>
            <div className='col-start-7 col-span-6 bg-secondary md:h-20 rounded-bl-xl w-full transition-all duration-1000 z-10 md:hidden visible'></div>
            <div
              className={classNames(
                'md:col-start-10 col-start-11 col-span-1 bg-secondary h-0 w-10 rounded-br-2xl transition-all duration-1000',
                {
                  'h-10': inView,
                }
              )}
            ></div>
            <div
              className={classNames(
                'md:col-start-9 col-start-10 col-span-1 bg-secondary h-0 w-10 rounded-l-xl justify-self-end transition-all duration-1000',
                {
                  'h-10': inView,
                }
              )}
            ></div>
            <div className='col-start-6 col-span-1  h-0'></div>
            <div
              className={classNames(
                'md:col-start-10 col-start-11 col-span-1 bg-secondary h-0 md:w-10 w-full md:rounded-r-2xl rounded-tr-2xl transition-all duration-1000',
                {
                  'h-10': inView,
                }
              )}
            ></div>
          </div>
          <div className='grid grid-cols-12'>
            <div className='md:col-span-3 col-span-1 h-80'></div>
            <div className='md:col-span-3 col-span-6 bg-fourth h-full rounded-l-2xl overflow-hidden'>
              <div className='flex flex-col h-full'>
                <div className='grow min-h-[25%] hover:min-h-[75%] transition-all duration-1000  bg-primary flex flex-row '>
                  <div className='grow min-w-[25%] hover:min-w-[75%] transition-all duration-1000  bg-third'>
                    <div className='relative w-full h-full '>
                      <Image
                        src='/assets/images/cologne.JPG'
                        className='absolute overflow-hidden object-cover'
                        alt='some image'
                        fill
                      />
                    </div>
                  </div>
                  <div className='grow min-w-[25%] hover:min-w-[75%] transition-all duration-1000 bg-fourth '>
                    <div className='relative w-full h-full'>
                      <Image
                        src='/assets/images/schreibtisch.JPG'
                        className='absolute overflow-hidden object-cover'
                        alt='some image'
                        fill
                      />
                    </div>
                  </div>
                </div>
                <div className='grow min-h-[25%] hover:min-h-[75%]min-h-25%] hover:min-h-[75%] transition-all duration-1000  bg-secondary flex flex-row'>
                  <div className='grow min-w-[25%] hover:min-w-[75%]  transition-all duration-1000  bg-fourth'>
                    <div className='relative w-full h-full'>
                      <Image
                        src='/assets/images/snes.JPG'
                        className='absolute overflow-hidden object-cover'
                        alt='some image'
                        fill
                      />
                    </div>
                  </div>
                  <div className='grow min-w-[25%] hover:min-w-[75%]  transition-all duration-1000 bg-third '>
                    <div className='relative w-full h-full'>
                      <Image
                        src='/assets/images/another.JPG'
                        className='absolute overflow-hidden object-cover'
                        alt='some image'
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-3 col-span-4 bg-secondary h-full rounded-br-2xl md:p-10 p-2 flex flex-col'>
              <h2 className='md:text-4xl text-xl font-bold'>Find me</h2>
              <span className='md:text-2xl text-base h-9 my-4 transition-all duration-500'>
                <a
                  href='https://www.openstreetmap.org/#map=16/50.9460/6.9522'
                  target='_blank'
                  rel='noreferrer'
                >
                  <MapPin className='md:inline md:h-6 h-3 md:w-6 w-3 mr-3' />
                  Cologne, Germany
                </a>
              </span>
              <span className='md:text-2xl text-base h-9 my-4 transition-all duration-500'>
                <Phone className='md:inline md:h-6 h-3 md:w-6 w-3 mr-3' />
                +49177 / 6879019
              </span>
              <span className='md:text-2xl text-base h-9 my-4 transition-all duration-500'>
                <a href='"mailto:rieger.geo@gmail.com"'>
                  <Send className='md:inline md:h-6 h-3 md:w-6 w-3 mr-3' />
                  <span>rieger.geo @gmail.com</span>
                </a>
              </span>
              <span className='md:text-2xl text-base h-9 my-4 transition-all duration-500'>
                <a
                  href='https://github.com/donrigoyeah/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GitHub className='md:inline md:h-6 h-3 md:w-6 w-3 mr-3' />
                  <span>donrigoyeah</span>
                </a>
              </span>
            </div>
            <div className='col-span-3 bg-primary h-full'></div>
          </div>
          <div className='grid grid-cols-12'>
            <div
              ref={ref2}
              className={classNames(
                'md:col-start-7 col-start-8 col-span-1 bg-secondary h-0 w-10 rounded-br-2xl  transition-all duration-1000',
                {
                  'h-10': inView2,
                }
              )}
            ></div>
            <div
              className={classNames(
                'md:col-start-6 col-start-7 col-span-1 bg-secondary h-0 md:w-10 w-full justify-self-end rounded-tl-xl transition-all duration-1000',
                {
                  'h-10': inView2,
                }
              )}
            ></div>
          </div>
          <div className='flex'>
            <div className=' bg-secondary w-2/4'>
              <div className='text-right w-full p-10 flex flex-col relative h-full'>
                <MouseParallaxContainer
                  className='w-full h-full flex'
                  containerStyle={{ overflow: 'visible' }}
                  resetOnLeave
                >
                  <MouseParallaxChild
                    factorX={0.1}
                    factorY={0.1}
                    className='absolute md:left-1/4 md:top-1/4 top-4 left-0'
                    resetOnLeave
                  >
                    <Feather className='w-40 h-40 text-third' />
                  </MouseParallaxChild>
                  <table className='w-full r-0'>
                    <thead>
                      <tr className='flex flex-col relative mb-5'>
                        <td className='md:text-5xl text-2xl pb-5 font-bold'>Education</td>
                        {/* <td className='absolute h-0.5 bg-black w-96 block -right-10 bottom-2'></td> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='md:text-2xl text-lg relative '>
                        <td className='pr-4'>
                          <a
                            href='https://www.edgerton.k12.oh.us/'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-fourth'
                          >
                            Student Exchange USA 2006
                          </a>
                        </td>
                        <td className='absolute -right-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                      </tr>
                      <tr className='md:text-2xl text-lg relative '>
                        <td className='pr-4'>
                          <a
                            href='https://www.gymnasium-leichlingen.de/'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-fourth'
                          >
                            Highschool Diploma 2009
                          </a>
                        </td>
                        <td className='absolute -right-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                      </tr>
                      <tr className='text-2xl'>
                        <td> &nbsp;</td>
                      </tr>
                      <tr className='md:text-2xl text-lg relative '>
                        <td className='pr-4'>
                          <a
                            href='https://igce.rc.unesp.br/index.php#!/instituicao/diretoria-tecnica-academica/graduacao/cursos/geologia/'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-fourth'
                          >
                            Intercambio Brazil 2014
                          </a>
                        </td>
                        <td className='absolute -right-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                      </tr>
                      <tr className='md:text-2xl text-lg relative '>
                        <td className='pr-4'>
                          <a
                            href='https://www.uni-heidelberg.de/de/studium/alle-studienfaecher/geowissenschaften'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-fourth'
                          >
                            B.Sc. Geology 2015
                          </a>
                        </td>
                        <td className='absolute -right-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                      </tr>
                      <tr className='text-2xl'>
                        <td> &nbsp;</td>
                      </tr>
                      <tr className='text-2xl'>
                        <td> &nbsp;</td>
                      </tr>
                      <tr className='md:text-2xl text-lg relative '>
                        <td className='pr-4'>
                          <a
                            href='https://www.ifg.uni-kiel.de/de/studium-1/m-sc-geophysik'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-fourth'
                          >
                            M.Sc. Geophysics 2019
                          </a>
                        </td>
                        <td className='absolute -right-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                      </tr>
                      <tr className='text-2xl'>
                        <td> &nbsp;</td>
                      </tr>
                      <tr className='text-2xl'>
                        <td>&nbsp;</td>
                      </tr>
                      <tr className='md:text-2xl text-lg relative '>
                        <td className='pr-4'>
                          <a
                            href='https://colognegamelab.de/'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-fourth'
                          >
                            B.A. Digital Games 2023
                          </a>
                        </td>
                        <td className='absolute -right-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                      </tr>
                      <tr className='text-2xl'>
                        <td> &nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </MouseParallaxContainer>
              </div>
            </div>
            {/* <div className='flex grow bg-fourth min-w-0 hover:min-w-[75%] transition-all duration-1000 max-w-[75%] w-2/4'> */}
            <div className=' bg-fourth  w-2/4'>
              <div className='w-full p-10 relative'>
                <MouseParallaxContainer
                  className='w-full h-full flex '
                  containerStyle={{ overflow: 'visible' }}
                  resetOnLeave
                >
                  <MouseParallaxChild
                    factorX={0.1}
                    factorY={0.1}
                    className='absolute md:right-1/4 right-0 md:top-1/4 top-4'
                    resetOnLeave
                  >
                    <DollarSign className='w-40 h-40 text-third' />
                  </MouseParallaxChild>
                  <table className=''>
                    <thead>
                      <tr className='flex flex-col relative mb-5'>
                        <td className='md:text-5xl text-2xl pb-5 font-bold'>Work</td>
                        {/* <td className='absolute h-0.5 bg-black w-96 block -left-10 bottom-2'></td> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='text-2xl'>
                        <td> &nbsp;</td>
                      </tr>
                      <tr className='text-2xl'>
                        <td> &nbsp;</td>
                      </tr>
                      <tr className='md:text-2xl text-lg relative block'>
                        <td className='absolute -left-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                        <td className='pl-4'>
                          <a
                            href='https://www.topuniversities.com/blog/working-while-you-study-common-student-jobs'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-secondary'
                          >
                            2011 Student Jobs
                          </a>
                        </td>
                      </tr>
                      <tr className='text-2xl'>
                        <td> &nbsp;</td>
                      </tr>
                      <tr className='text-2xl'>
                        <td> &nbsp;</td>
                      </tr>
                      <tr className='md:text-2xl text-lg relative block'>
                        <td className='absolute -left-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                        <td className='pl-4'>
                          <a
                            href='https://kiel.casino-sh.de/startseite.html'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-secondary'
                          >
                            2017 Poker Dealer
                          </a>
                        </td>
                      </tr>
                      <tr className='md:text-2xl text-lg relative block'>
                        <td className='absolute -left-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                        <td className='pl-4'>
                          <a
                            href='https://gsb.sh/'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-secondary'
                          >
                            2018 Geologist
                          </a>
                        </td>
                      </tr>
                      <tr className='text-2xl'>
                        <td> &nbsp;</td>
                      </tr>
                      <tr className='md:text-2xl text-lg relative block'>
                        <td className='absolute -left-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                        <td className='pl-4'>
                          <a
                            href='https://de.restaurantguru.com/Maria-Bonita-Kiel'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-secondary'
                          >
                            2020 Mexican Food Cook
                          </a>
                        </td>
                      </tr>
                      <tr className='md:text-2xl text-lg relative block'>
                        <td className='absolute -left-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                        <td className='pl-4'>
                          <a
                            href='https://networkteam.com/'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-secondary'
                          >
                            2021 Web Developer
                          </a>
                        </td>
                      </tr>
                      <tr className='text-2xl'>
                        <td> &nbsp;</td>
                      </tr>
                      <tr className='md:text-2xl text-lg relative block'>
                        <td className='absolute -left-10 w-10 h-[2px] top-[40%] bg-black'>
                          &nbsp;
                        </td>
                        <td className='pl-4'>
                          <a
                            href='https://www.kununu.com/de/appmatics'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:underline hover:text-secondary'
                          >
                            2024 Test Automatization Engineer
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </MouseParallaxContainer>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 ' ref={ref3}>
            <div
              className={classNames(
                'col-start-10 col-span-1 bg-fourth h-0 w-10 rounded-br-2xl transition-all duration-1000',
                {
                  'h-10': inView3,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-7 col-span-3 bg-fourth h-0 rounded-tl-2xl rounded-br-2xl transition-all duration-1000',
                {
                  'h-10': inView3,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-6 col-span-1 bg-fourth h-0 w-10 rounded-tl-2xl justify-self-end transition-all duration-1000',
                {
                  'h-10': inView3,
                }
              )}
            ></div>
          </div>
          <div className='flex md:h-auto h-[600px]'>
            <div className='grow bg-third min-w-0 hover:min-w-[80%] transition-all duration-1000 max-w-[33.33%] w-1/3 md:whitespace-nowrap  overflow-hidden'>
              <div className='flex flex-col justify-start shadow-right h-full'>
                <div className='w-full py-10 md:pl-10 pl-4'>
                  <div className='flex items-center gap-x-4'>
                    <h2 className='md:text-4xl text-2xl font-bold pr-4 whitespace-nowrap'>Arts and Craft</h2>
                    <Image
                      src='/assets/svg/blender.svg'
                      height={50}
                      width={50}
                      alt='unity logo'
                    />
                     <Image
                      src='/assets/svg/gimp.svg'
                      height={50}
                      width={50}
                      alt='gimp logo'
                    />
                  </div>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                        "Low Poly" 3D Modelling of diverse assests
                      </span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>Retopology, UV unwrapping, Colorpaletts</span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>Rigging & Animating</span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>Basic image creation & editing skills in Gimp/Inkscape</span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                        Some kind of musical knowledge in Ableton & Reaper
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className='grow bg-fourth min-w-0 hover:min-w-[80%] transition-all duration-1000 max-w-[33.33%] w-1/3 md:whitespace-nowrap overflow-hidden'> 
              <div className='flex flex-col justify-start shadow-right h-full'>
                <div className='py-10 md:pl-10 pl-4'>
                  <div className='flex items-center gap-x-4'>
                    <h2 className='md:text-4xl text-2xl font-bold pr-4'>Programming</h2>
                    <Image
                      src='/assets/svg/unity.svg'
                      height={50}
                      width={50}
                      alt='unity logo'
                    />
                    <Image
                      src='/assets/svg/cSharp.svg'
                      height={50}
                      width={50}
                      alt='c sharp logo'
                    />
                  </div>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                        Excellent understanding of OOP C# in Unity
                      </span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                        Input Systems, Animation Controller, Scribtable
                        Objects, UI and Statesystems
                      </span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                        Basic understanding of VFX, Shader Graph and coded shaders
                      </span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                        Multiple years experience in web dev with typescript.
                      </span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                      Good knowledge of Go backends with SQL and data analysis in Python and Anaconda
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className='grow bg-secondary min-w-0 hover:min-w-[80%] transition-all duration-1000 max-w-[33.33%] w-1/3 md:whitespace-nowrap overflow-hidden'>
              <div className='col-span-6 flex flex-col justify-start h-full'>
                <div className='py-10 md:pl-10 pl-4'>
                  <div className='flex items-center gap-x-4'>
                    <h2 className='md:text-4xl text-2xl font-bold pr-4'>Design and Sein</h2>
                    <Image
                        src='/assets/svg/drawio.svg'
                        height={50}
                        width={50}
                        alt='c sharp logo'
                      />
                    <Image
                      src='/assets/svg/miro.svg'
                      height={50}
                      width={50}
                      alt='c sharp logo'
                    />
                  </div>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                        Experiencing in taking the design role in game jams and collaborative projects
                      </span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                        much passion
                      </span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                        such feeling for balancing 
                      </span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                        very creative
                      </span>
                    </span>
                  </span>
                  <span className='block md:text-2xl text-basse pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='md:h-7 md:w-7 h-0 w-4 inline mr-2 absolute' />
                      <span className='md:pl-10 pl-1'>
                        Experience in visualizing concepts in draw.io and miroboards
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 ' ref={ref4}>
            <div
              className={classNames(
                'col-start-2 col-span-1 bg-third h-0 w-10 rounded-bl-2xl justify-self-end transition-all duration-1000',
                {
                  'h-10': inView4,
                }
              )}
            ></div>
            <div className='col-start-7 col-span-1 h-0'></div>
            <div
              className={classNames(
                'col-start-3 col-span-4 bg-third h-0 rounded-tr-2xl rounded-bl-2xl transition-all duration-1000',
                {
                  'h-10': inView4,
                }
              )}
            ></div>
            <div className='col-start-6 col-span-1 h-0'></div>
            <div
              className={classNames(
                'col-start-7 col-span-1 bg-third h-00 w-10 rounded-tr-2xl transition-all duration-1000',
                {
                  'h-10': inView4,
                }
              )}
            ></div>
          </div>
          <div className=''>
            <div className='grid grid-cols-12'>
              {gameProjects.map((item, index) => (
                <a
                  key={index}
                  id="game_filter"
                  className={classNames(
                    'col-span-6 h-20 text-center text-3xl p-6 hover:text-2xl transition-all duration-500 font-bold cursor-pointer whitespace-nowrap',
                    {
                      'shadow-none': index === 0,
                      'bg-fourth ': index === 0 || index === 3,
                      'bg-third ': index === 1 || index === 4,
                      'bg-secondary': index === 2 || index === 5,
                      'md:shadow-left' : contentSection == 0,
                      'md:shadow-right' : contentSection == 1,

                    }
                  )}
                  onClick={() => {
                    setFilterdGames(gameProjects[index].content);
                    setContentSection(index);
                    setProject(1)
                  }}
                >
                  {item.section}
                </a>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-12 h-20'>
            <div
              className={classNames(
                'col-start-3 col-span-1 bg-fourth h-0 w-10 rounded-tl-xl rounded-br-xl transition-all duration-1000',
                {
                  'h-10': contentSection === 0,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-2 col-span-1 bg-fourth h-0 w-10 rounded-tl-xl justify-self-end transition-all duration-1000',
                {
                  'h-10': contentSection === 0,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-7 col-span-1 bg-third h-0 w-10 justify-self-start rounded-br-xl transition-all duration-1000',
                {
                  'h-10': contentSection === 1,
                }
              )}
            ></div>
            <div className='col-start-1 col-span-12 h-0'></div>
            <div
              className={classNames(
                'col-start-6 col-span-1 bg-third h-0 w-10 rounded-tl-xl transition-all duration-1000 justify-self-end',
                {
                  'h-10': contentSection === 1,
                }
              )}
            ></div>
          </div>
          <div className=''>
            <div className='grid grid-cols-12'>
              {filteredGames.map((item, index) => (
                <a
                  key={index}
                  className={classNames(
                    'flex h-20 text-center justify-center items-center py-auto md:text-2xl text-base font-bold md:p-6 hover:text-xl transition-all duration-500 cursor-pointer',
                    {
                      'md:col-span-2 col-span-4': filteredGames.length == 6,
                      'col-span-3': filteredGames.length == 4,
                      'shadow-none': index === 0,
                      'bg-fourth ': index === 0,
                      'bg-third ': index === 1,
                      'bg-secondary': index === 2,
                      'md:bg-fourth bg-third ': index === 3,
                      'md:bg-third bg-secondary ': index === 4,
                      'md:bg-secondary bg-fourth': index === 5,
                      'md:shadow-inner' : project == index,
                    }
                  )}
                  onClick={() => setProject(index)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-12 h-20'>
            <div
              className={classNames(
                'col-start-2 col-span-1 bg-fourth h-0 md:w-10 w-full rounded-tl-xl rounded-br-xl transition-all duration-1000',
                {
                  'h-10': project === 0
                }
              )}
            ></div>
            <div className='col-start-1 col-span-12 h-0'></div>
            <div
              className={classNames(
                'col-span-1 bg-fourth h-0 w-10 rounded-tl-xl justify-self-end rounded-br-xl transition-all duration-1000',
                {
                  'h-10': project === 0,
                  'col-start-1': filteredGames.length == 6,
                  'col-start-1': filteredGames.length == 4,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-span-1 bg-third h-0 md:w-10 w-full justify-self-end rounded-tr-xl rounded-bl-xl transition-all duration-1000',
                {
                  'h-10': project === 1,
                  'col-start-3 ': filteredGames.length == 6,
                  'col-start-4': filteredGames.length == 4,
                }
              )}
            ></div>
            <div className='col-start-1 col-span-12 h-0'></div>
            <div
              className={classNames(
                'col-span-1 bg-third h-0 w-10  rounded-tr-xl rounded-bl-xl transition-all duration-1000',
                {
                  'h-10': project === 1,
                  'col-start-4': filteredGames.length == 6,
                  'col-start-5': filteredGames.length == 4,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-span-1 bg-secondary h-0 md:w-10 w-full justify-self-end rounded-tr-xl rounded-bl-xl transition-all duration-1000',
                {
                  'h-10': project === 2,
                  'col-start-5': filteredGames.length == 6,
                  'col-start-7': filteredGames.length == 4,
                }
              )}
            ></div>
            <div className='col-start-1 col-span-12 h-0'></div>
            <div
              className={classNames(
                'col-span-1 bg-secondary h-0 w-10  rounded-tr-xl rounded-bl-xl transition-all duration-1000',
                {
                  'h-10': project === 2,
                  'col-start-6': filteredGames.length == 6,
                  'col-start-8': filteredGames.length == 4,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-span-1 bg-fourth h-0 md:w-10 w-full rounded-tl-xl rounded-br-xl transition-all duration-1000',
                {
                  'h-10': project === 3,
                  'col-start-8': filteredGames.length == 6,
                  'col-start-10': filteredGames.length == 4,
                }
              )}
            ></div>
            <div
              className={classNames(
                ' col-span-1 bg-fourth h-0 w-10 rounded-tl-xl justify-self-end rounded-br-xl transition-all duration-1000',
                {
                  'h-10': project === 3,
                  'col-start-7': filteredGames.length == 6,
                  'col-start-9': filteredGames.length == 4,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-9 col-span-1 bg-third h-0 md:w-10 w-full justify-self-end rounded-tr-xl rounded-bl-xl transition-all duration-1000',
                {
                  'h-10': project === 4,
                }
              )}
            ></div>
            <div className='col-start-1 col-span-12 h-0'></div>
            <div
              className={classNames(
                'col-start-10 col-span-1 bg-third h-0 w-10  rounded-tr-xl rounded-bl-xl transition-all duration-1000',
                {
                  'h-10': project === 4,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-12 col-span-1 bg-secondary h-0 md:w-10 w-full rounded-tl-xl rounded-br-xl transition-all duration-1000',
                {
                  'h-10': project === 5,
                }
              )}
            ></div>
            <div className='col-start-1 col-span-12 h-0'></div>
            <div
              className={classNames(
                'col-start-11 col-span-1 bg-secondary h-0 w-10 rounded-tl-xl justify-self-end rounded-br-xl transition-all duration-1000',
                {
                  'h-10': project === 5,
                }
              )}
            ></div>
          </div>
          <div
            className={classNames(
              'w-full transition-all grid grid-cols-12 p-8',
              {
                'bg-fourth': project === 0 || project === 3,
                'bg-third': project === 1 || project === 4,
                'bg-secondary': project === 2 || project === 5,
              }
            )}
          >
            <div className='md:col-span-4 col-span-12 md:px-5 flex flex-col'>
              <h2 className='md:text-6xl text-4xl whitespace-nowrap overflow-visible font-bold'>
                {filteredGames[project].title}
              </h2>
              <span>{filteredGames[project].subtitle}</span>
              <h3 className='md:text-3xl text-2xl mt-5'>Describtion:</h3>
              <p className='md:text-xl text-base'>{filteredGames[project].describtion}</p>
              <div className='mt-auto mb-5'>
                <h3 className='md:text-3xl text-2xl mt-5'>Goal:</h3>
                <p className='md:text-xl text-base'>{filteredGames[project].goal}</p>
              </div>
            </div>
            <div className='md:col-span-4 col-span-12 md:px-12 mb-5 flex flex-col justify-end'>
              <h3 className='text-xl text-right pr-20'></h3>
              <h3 className='md:text-3xl text-2xl mt-5 flex justify-between'>
                  Duration:
                  <span>{filteredGames[project].duration}</span>
              </h3>
              <h3 className='md:text-3xl text-2xl mt-5 flex items-center justify-between whitespace-nowrap'>
                Completion:
                <MouseParallaxContainer
                  className='w-full h-full inline-flex justify-end'
                  containerStyle={{ overflow: 'visible' }}
                  resetOnLeave
                >
                  <MouseParallaxChild
                    factorX={0.1}
                    factorY={0.1}
                    resetOnLeave
                  >
                  <div className=''>
                    <ProgressBar percentage={filteredGames[project].percentage}/>

                    {/* <StarRating rating={filteredGames[project].ownRating} /> */}
                    </div>
                  </MouseParallaxChild>
                </MouseParallaxContainer>
              </h3>
              <h3 className='md:text-3xl text-2xl mt-5'>
                Conslusion:
                <p className='md:text-xl text-base'>{filteredGames[project].conclusion}</p>
              </h3>
              <h3 className='md:text-3xl text-2xl mt-5 flex items-center justify-between whitespace-nowrap'>
                Rating:
                <MouseParallaxContainer
                  className='w-full h-full  inline-flex justify-end'
                  containerStyle={{ overflow: 'visible' }}
                  resetOnLeave
                >
                  <MouseParallaxChild
                    factorX={0.1}
                    factorY={0.1}
                    resetOnLeave
                  >
                  <div className=''>
                    {/* <ProgressBar percentage={filteredGames[project].percentage}/> */}

                    <StarRating rating={filteredGames[project].ownRating} />
                    </div>
                  </MouseParallaxChild>
                </MouseParallaxContainer>
              </h3>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <div className='flex md:h-full h-[400px]'>
                <div className='grow min-w-[25%] hover:min-w-[75%] transition-all duration-1000  bg-primary flex flex-col'>
                  <div className='grow min-h-[25%] hover:min-h-[75%] transition-all duration-1000  bg-third'>
                    <div className='relative w-full h-full'>
                      <Image
                        src={filteredGames[project].images[0]}
                        className='absolute overflow-hidden object-cover'
                        alt='some image'
                        priority
                        fill
                      />
                    </div>
                  </div>
                  <div className='grow min-h-[25%] hover:min-h-[75%] transition-all duration-1000 bg-fourth '>
                    <div className='relative w-full h-full'>
                      <Image
                        src={filteredGames[project].images[1]}
                        className='absolute overflow-hidden object-cover'
                        alt='some image'
                        priority
                        fill
                      />
                    </div>
                  </div>
                </div>
                <div className='grow min-w-[25%] hover:min-w-[75%] min-h-25%] hover:min-h-[75%] transition-all duration-1000  bg-secondary flex flex-col'>
                  <div className='grow min-h-[25%] hover:min-h-[75%] transition-all duration-1000  bg-primary'>
                    <div className='relative w-full h-full'>
                      <Image
                        src={filteredGames[project].images[2]}
                        className='absolute overflow-hidden object-cover'
                        alt='some image'
                        priority
                        fill
                      />
                    </div>
                  </div>
                  <div className='grow min-h-[25%] hover:min-h-[75%] transition-all duration-1000 bg-secondary '>
                    <div className='relative w-full h-full'>
                      <Image
                        src={filteredGames[project].images[3]}
                        className='absolute overflow-hidden object-cover'
                        alt='some image'
                        priority
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <a className='col-span-12 pt-4 underline text-center w-full cursor-pointer md:hidden inline-block' href='#game_filter'>Jump up to all games</a>
          </div>
          <div className='grid grid-cols-12 bg-primary' ref={ref5}>
            <div
              className={classNames(
                'col-start-10 col-span-1 bg-fourth h-0 w-10 rounded-br-2xl transition-all duration-1000',
                {
                  'h-10': inView5,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-6 col-span-4 bg-fourth h-0 w-full rounded-tl-xl rounded-br-2xl justify-self-end transition-all duration-1000',
                {
                  'h-10': inView5,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-5 col-span-1 bg-fourth h-0 w-10 rounded-tl-2xl justify-self-end transition-all duration-1000',
                {
                  'h-10': inView5,
                }
              )}
            ></div>
          </div>
          <div className='snap-y h-full'>
            <div className='snap-start'>
              <ClickGame />
            </div>
          </div>
        </div>
        {/* )} */}
      </main>
    </>
  );
}


const ProgressBar = (props) => {
  const { percentage } = props;


  return (
    <>
    {/* <div className="h-10 w-[200px] rounded-xl bg-proBlack transition-all">
      <span className="absolute text-left  right-[130px] top-1">{`${percentage}%`}</span>
      <div className={`h-full rounded-xl text-right w-[${2*percentage}px] bg-proGreen`}/>
    </div> */}
    <div className="flex items-center justify-center w-40 h-40">
      <svg className="transform -rotate-90 w-full h-full " viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="50" stroke="#694338" stroke-width="20" fill="transparent"/> 
        <circle cx="100" cy="100" r="50"stroke="#31ab2a" stroke-width="20" fill="transparent" 
           strokeDasharray={`${2*3.14*50*(3.6*percentage)/360} 400`}
           className="bg-proGreen origin-[50%_50%]"
          />
      </svg>
      <span className="absolute text-2xl">{percentage}%</span>
    </div>
   </>
  );
};


const StarRating = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Math.round(rating * maxRating) / maxRating;
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <span key={i} className={i <= filledStars ? ' text-orange-400' : ''}>
        &#9733;
      </span>
    );
  }

  return <div className='star-rating transition-all'>{stars}</div>;
};

const gameProjects = [
  {
    section: "Before 2023",
    content: [
      {
        title: 'Galaxy Shooter',
        subtitle: '2D Arcade Space Shooter',
        describtion:
          'In this classical 2D spaceshooter you and a friend can experience the thrill of flying through space and shooting increasingly difficult waves of alien spaceships. A variety of power-ups help you upgrade your weaponry and defense mechanisms. Can you beat the highscore?',
        goal: 'Learn how to create video games with the Unity Engine',
        duration: '1 Week',
        percentage: 100,
        ownRating: 2,
        conclusion:
          'This game was developed during a Unity Course from Udemy and consists of a casual ludic 2D arcade space shooter experience with powerups, waves of spawning enemies and increasing difficulty. Implementation of sprite animations, sound effects and local multiplayer taught me the fundamentals of of the Unity Engine. A simple ludic game that is easy to pick up, play with friends and hard to master.',
        images: [
          '/assets/images/games/galaxyshooter1.png',
          '/assets/images/games/galaxyshooter2.png',
          '/assets/images/games/galaxyshooter3.png',
          '/assets/images/games/galaxyshooter4.png',
        ],
      },
      {
        title: 'Mobile Dungeon',
        subtitle: '3rd Person Action Adventue',
        describtion: "Take the control about a generic hero in a generic fantasy world. Explore the different bioms, fight enemies, gather loot and of course level, level, level. Use the aim-lock function to circle enemies and dodge their attacks. Check your stamina and make sure to have the right timing to perform attacks. Designed for mobile devices, you can swap weapons fast or cycle through your selected weapons with ease. Can you see it all?!",
        goal: 'Create a multiplayer dark-souls for mobile devices. Easy peasy lemon squeezy...',
        duration: 'about 2 Months',
        percentage: 20,
        ownRating: 2,
        conclusion:
        (
          <span className='w-full'>
            <span>
              From zero to infinity. Since i knew everything after the Udemy course, why
              not build a 3D online multiplayer dungeon crawler for mobile... So I followed
              the youtuber{' '}
              <>
                <a
                  href='https: //www.youtube.com/playlist?list=PLD_vBJjpCwJtrHIW1SS5_BNRk6KZJZ7_d'
                  className='pointer-cursor underline'
                  target='_blank'
                  rel='noreferrer'
                >
                  Sebastian Graves
                </a>
              </>
              {' '} who gave very insightfull information about e.g. character controllers, state-machines and animation masks. On top i tried to add the Mirror networking package to create a peer-to-peer experience. I dove deep and got myself lost. At the time this project was way too ambitious for me and i learned a valuable lesson about scoping. Aim high, but not out of reach. The result was a barley working prototyp with many features that i was still feeling kinda proud of it.
            </span>
          </span>
        ),
        images: [
          '/assets/images/games/mobiledungeon3.png',
          '/assets/images/games/mobiledungeon1.png',
          '/assets/images/games/mobiledungeon2.png',
          '/assets/images/games/mobiledungeon4.png',
        ],
      },
      {
        title: 'NutExpress',
        subtitle: '3rd Squirrel Adventure',
        describtion: (
          <span className='w-full'>
            <span>
              The player controls a squirrel that is looking for its burried nuts in a backyard during winter. You can only remember the general direction of the nut hiding spots, but it might take a few diggs to find your tressures. Watch out for the fox and the hawk, as they are also hungry and are looking for a snack. Just jump in the tall grass and wait for them to pass my. Can you gather all the nuts for you and your family? 
              My submission to the{' '}
              <span>
                <a
                  className='pointer-cursor underline'
                  href='https: //globalgamejam.org/users/donrigo'
                  target='_blank'
                  rel='noreferrer'
                >
                  Global Game Jam 2021
                </a>
              </span>
              with the theme: `Lost & Found`. 
            </span>
          </span>
        ),

        goal: 'Having fun at a gamejam and completing a entire own game',
        duration: '48 Hours',
        percentage: 100,
        ownRating: 3,
        conclusion:
          'I made the 3D models and animation with Blender, added some music and sfx with Ableton and put it all together in Unity. With some PostProcessing Layers I tried to hide the rough edges, but it felt great to complete a game nonetheless. It was a very tense weekend, but an amazing feeling of accomplishment in the end.',
        images: [
          '/assets/images/games/NutExp1.png',
          '/assets/images/games/NutExp2.png',
          '/assets/images/games/NutExp3.png',
          '/assets/images/games/NutExp4.png',
        ],
      },
      {
        title: 'Spheris',
        subtitle: 'Spherical Space Tetris',
        describtion:
          'A spherical tetris game for mobile devices. Random generated pieces (3 blocked) fall from the top onto a circle. The player controls the sphere by rotating it and can flip the falling pieces. If a row is filled entirely, the blocks will disolve.The more points you get, the faster they fall. This game includes an intricated gamestate-system and an approach to a simple solution to a tricky visual challenge. It gets very intense.',
        goal: 'Developing another casual game and finish it.',
        duration: '2 Weeks',
        percentage: 90,
        ownRating: 4,
        conclusion:
          'This project was done with a friend of mine during a long weekend. I took a week off work and designed, planed and developed this masterpiece, all while teaching my firend Unity as good as i could. There are still many rough edges on some of the game mechanics and the visuals are far from user-friendly, but an enjoyable title nonetheless. Good vibes & good times. Shout out to eMCeeS',
        images: [
          '/assets/images/games/spheris1.png',
          '/assets/images/games/spheris2.png',
          '/assets/images/games/spheris3.png',
          '/assets/images/games/spheris4.png',
        ],
      },
      {
        title: 'Solaris',
        subtitle: '3rd Person Rougelike Base Builder & Shooter',
        describtion:
          'You are an AI and tasked with retrieving artifact from islands research facility. A virus infected all wildlife making them dangerous enemies. Other AIs are on the same mission as you so you have to hurry. You need to build your base, gather resources and generate energy. The energy is the main resource that similar to stamina, replenishes during the day/clear weather, but is used from batteries during the night. This energy management is the main gameloop and oversight are necesseray for the basebuilding, exploration and combat. Dynamic wheater and a day/night cycle require different energy sources. Additionaly, the longer you stay on this planet, the more aggresive the enviroment becomes...',
        goal: 'Create a more complex game with different gameplay mechanics. Building structures, gather resources, switch vehicles and an interesting world to explore. Also try to learn shaders.',
        duration: 'Paused after 2 Month',
        percentage: 20,
        ownRating: 5,
        conclusion:
          'Unfortunatly a too ambitious project to do alone while working a regual job. A project i would love to continue working on if the resources are available.',
        images: [
          '/assets/images/games/solaris1.png',
          '/assets/images/games/solaris2.png',
          '/assets/images/games/solaris3.png',
          '/assets/images/games/solaris4.png',
        ],
      },
      {
        title: 'Spirit Mask',
        subtitle: '3rd Person Rougelike Online Action Adventures',
        describtion:
          'The player controls a spirit that is summoned into a mask by a wizzard. They are tasked to reach a central tower in this magical world. This structure is protected by a magical shield that prevents the wizzard from entering the region and he sents the spirit instead. The player resurrects a dead body in a graveyard close to the magic barrier and has to fight their way through the outskirts against mystical creatures, towards the central tower. The player can level up their controlled body, but once it takes to many hits, the player masks has to pick up a "fresh" one at the graveyard and start over. It seems that spirits from other wizzard factions are passing through the magic barrier as well. Try to be the first to reach the top of the mysterious tower and retrieve the tressures back to your master.',
        goal: 'Design an unique PvPvE mulitplayer experience with a deep combat system, a motivating sense of progression and a interesting lore. ',
        duration: '-',
        percentage: 0,
        ownRating: 4,
        conclusion: 'Elaborating on the original "Mobile Dungeon" concept, but focusing on the multiplayer elements with an unique concept of interaction between players, gameplay mechanics and overall experience. Designing all the pieces and looking at the project and its entirely, I realize that this as well will require a team of motivate individuals to complete and is therefore put on hold.',
        images: [
          '/assets/images/games/sm1.jpg',
          '/assets/images/games/sm2.jpg',
          '/assets/images/games/sm3.jpg',
          '/assets/images/games/sm4.jpg',
        ],
      },
    ],
  },
  {
    section: "After 2023",
    content: [
      {
        title: 'Planet B',
        subtitle: '3rd Person Twinstick Survival',
        describtion:
          'You are flying with your spaceship when you are suddenly hit by a asteroid and crash onto a planet. Before you can continue your journey, you need to find all the missing spaceship-parts that flew away on impact. The planet is inherited by 3 alien species that live in a balanced ecosystem. The foodchain of this a circle. It seems that the offspring of each alien species replenishes one of your three vital resources. You sent out a clone of you to retrieve the parts, that enable a variety of upgrades to the player. Can you escape this planet before your clone juice runs out?!',
        goal: 'Create a survival experience with a vibrant simulation of an ecosystem with different species.',
        duration: '2 Month',
        percentage: 90,
        ownRating: 5,
        conclusion: 'This project was the first collaborative project at CGL, where i additionaly took the role of the designer. It was super fun to work on. It is still planed to pick it up again and to polish it.',
        images: [
          '/assets/images/games/PlanetB1.png',
          '/assets/images/games/PlanetB2.png',
          '/assets/images/games/PlanetB3.png',
          '/assets/images/games/PlanetB4.png',
        ],
      },
      {
        title: 'Cubit',
        subtitle: '3D Puzzler',
        describtion:
          'Cubit is a 3D Puzzler, where the player can tilt a large cube and with that move the small cubit on its surface. It is not physics-based, but instead includes stable game state that does the calculation. The game includes a "normal" quest mode, where in XX levels new hazards and blocks are introduced. In the rush mode the player has to clear as many levels as possible in a fixed time duration, with ever increasing complexity of the generated levels. Lastly is the level-editor, where players can create their own maps and share them as json files.',
        goal: 'Recreate the mechanic of tilting the big cubit that results in the correct movement of the cubit. The transition between faces should be fluid and correct. An integration to a server, where people can share their own levels would be amazing.',
        duration: '3 Month',
        percentage: 65,
        ownRating: 5,
        conclusion: 'The seemingly easy mechanic turned out to be extremly complex to code. A lot of hard coding was implemented. It feels like a good working proof-of-concept. Overall very exciting since i could not find this mechanics anywhere else. Rotation can be unforgiving and intransparent. Refactoring this would be wise...',
        images: [
          '/assets/images/games/cubit1.png',
          '/assets/images/games/cubit2.png',
          '/assets/images/games/cubit3.png',
          '/assets/images/games/cubit4.png',
        ],
      },
      {
        title: 'Democracy is (no) joke',
        subtitle: 'Strategy game',
        describtion:
          'You play as the leader of a population of 100 people and your goal is to be reelected for the next term. The population can be analysed on their political ideas, gender, age, religion and their general attitude towards their leader. In a round you have to answer a certain amount of questions regarding hot topics. These "spicey" questions are splitting the population so you need to decide on which group of people to favor. The catch: the happier the people are, the less likely they are going to vote. Can you beat the system and safe your next term?',
        goal: 'Having fun at the 2024 demographic game jam at the cologne game lab.',
        duration: '2 Days',
        percentage: 90,
        ownRating: 5,
        conclusion: 'I pitched my design idea to the jam participants and found people who liked to joined me on this. It was a great weekend and we created a very modular system the could be extended on. Overall: Fun, fun & fun',
        images: [
          '/assets/images/games/democray1.png',
          '/assets/images/games/democracy2.png',
          '/assets/images/games/democracy3.png',
          '/assets/images/games/democracy4.png',
        ],
      },
      {
        title: 'Onio',
        subtitle: '3rd Person Exploration Adventures',
        describtion:
          'There is a loud noise with a bright flash of light and the game starts. In this 3rd person action adventure, you can explore the world of Onio. The world is captured in a layer between to spheres, that are constantly growing and pushing platforms with houses and their inhabitants apart from each other. Sometimes there are glowing lights flying towards the center, resulting in a earthquake and changing the plants and organisms around the player. But the question is: what is in the other layers, what is in the center and probably even more interesting; what is on the outside? ',
        goal: 'Create a continous evolving world with an interesting story and fun gameplay mechanics.',
        duration: '2 Month',
        percentage: 80,
        ownRating: 4,
        conclusion: 'During the second collaborative project at CGL we had the the task to do a experimental/narrative game. The continous growing world had its challenges to implement but in general an amazing experience.',
        images: [
          '/assets/images/games/Onio1.png',
          '/assets/images/games/Onio2.png',
          '/assets/images/games/Onio3.png',
          '/assets/images/games/Onio4.png',
        ],
      },
    ],
  },
];

const Wobble = ({ children }) => {
  return (
    <MouseParallaxContainer
      className='w-full h-full flex justify-end items-center'
      containerStyle={{ overflow: 'visible' }}
      resetOnLeave
    >
      <MouseParallaxChild factorX={0.1} factorY={0.1} resetOnLeave>
        <div className='h-[500px] w-[500px] bg-secondary  rounded-full overflow-hidden'>
          <MouseParallaxChild factorX={-0.2} factorY={-0.2} resetOnLeave>
            <div className='h-[450px] w-[450px] rounded-full -top-2/4 right-2/4 bg-third  overflow-hidden'>
              <MouseParallaxChild factorX={-0.2} factorY={-0.2} resetOnLeave>
                <div className='h-[400px] w-[400px] rounded-full -top-2/4 right-2/4  bg-fourth'>
                  {children}
                </div>
              </MouseParallaxChild>
            </div>
          </MouseParallaxChild>
        </div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

const ClickGame = () => {
  const startPointSize = { height: 12, width: 12 };
  const startPoint = { left: 50, top: 50 };

  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(1);
  const [ratio, setRatio] = useState(100);
  const [timer, setTimer] = useState(0);
  const [scoreLast, setScoreLast] = useState(0);
  const [ratioLast, setRatioLast] = useState(0);
  const [timerLast, setTimerLast] = useState(0);
  const [ratioBest, setRatioBest] = useState(0);
  const [timerBest, setTimerBest] = useState(1000);

  const [currentPoint, setCurrentPoint] = useState(startPoint);
  const [pointSize, setPointSize] = useState(startPointSize);
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {
    if (!isRunning) {
      setIsRunning(true);
      setPointSize(startPointSize);
      setMisses(1);
    }
    if (score >= 5) {
      resetGame();
      setIsRunning(false);
      return;
    }

    setScore(score + 1);
    setCurrentPoint({
      left: Math.floor(Math.random() * 9) * 10 + 10,
      top: Math.floor(Math.random() * 9) * 10 + 10,
    });
    setPointSize({
      height: pointSize.height - 2,
      width: pointSize.width - 2,
    });
  };

  const handleMiss = () => {
    setMisses(misses + 1);
    setRatio(Math.floor((score / (misses + score)) * 100));
  };

  const resetGame = () => {
    if (misses === 0) {
      setRatio(100);
    }
    if (timer < timerBest && ratio >= ratioBest) {
      setRatioBest(ratio);
      setTimerBest(timer);
    }

    setTimerLast(timer);
    setRatioLast(ratio);

    setScore(0);
    setMisses(0);
    setRatio(100);
    setTimer(0);
    setScoreLast(1);

    setCurrentPoint(startPoint);
    setPointSize(startPointSize);
    return;
  };

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <div className='w-full h-screen bg-fourth flex flex-row items-center pb-20'>
        <div className='flex flex-col w-full h-full'>
          <h2 className='text-5xl py-12 text-center bg-fourth text-primary font-extrabold'>
            Click Dot
          </h2>
          <div className='relative h-3/4 w-3/4 bg-primary rounded-3xl mx-auto'>
            <a
              className='w-full h-full z-30 cursor-pointer block transition-all'
              onClick={() => handleMiss()}
            />
            <a
              className={classNames(
                `z-40 absolute flex justify-center items-center h-${pointSize.height} w-${pointSize.width} rounded-full  cursor-pointer transition-all duration-1000 left-[${currentPoint.left}%] top-[${currentPoint.top}%]`,
                {
                  'bg-green-600': isRunning,
                  'bg-red-600': !isRunning,
                }
              )}
              onClick={() => {
                handleClick();
              }}
            />
          </div>
        </div>
        <div
          className={classNames(
            'justify-center text-center relative transition-all duration-1000 ',
            {
              'w-0 overflow-hidden': scoreLast === 0,
              'w-80 overflow-visible pr-12 bg-primary rounded-2xl p-6 mr-4':
                scoreLast !== 0,
            }
          )}
        >
          <table className=''>
            <thead className='border-b border-black'>
              <tr>
                <td className='text-right'></td>
                <td className='text-center text-2xl px-4 pb-2 '>
                  <Play className='h-6 w-6' />
                </td>
                <td className='text-center text-2xl px-4 pb-2 border-l border-r border-black'>
                  <CornerDownLeft className='h-6 w-6' />
                </td>
                <td className='text-center text-2xl px-4 pb-2'>
                  <Award className='h-6 w-6' />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-left pt-2 pr-4'>
                  <Clock className='h-6 w-6' />
                </td>
                <td className='text-2xl pt-2 px-4 border-l border-black'>
                  {(timer / 10).toFixed(1)}
                </td>
                <td className=' border-l border-r border-black pt-2'>
                  {(timerLast / 10).toFixed(1)}
                </td>
                <td className='pt-2'>
                  {timerBest === 1000 ? '' : (timerBest / 10).toFixed(1)}
                </td>
              </tr>
              <tr>
                <td className='text-left '>
                  <Crosshair className='h-6 w-6' />
                </td>
                <td className='text-2xl border-l border-black'>{ratio}%</td>
                <td className=' border-l border-r border-black'>
                  {ratioLast}%
                </td>
                <td>{ratioBest}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

// allowList
// h-12
// w-12
// w-[75%]
// h-10
// w-10
// h-8
// w-8
// h-6
// w-6
// h-4
// w-4
// h-2
// w-2
// h-1
// w-1
// left-[10%]
// left-[20%]
// left-[30%]
// left-[40%]
// left-[50%]
// left-[60%]
// left-[70%]
// left-[80%]
// left-[90%]
// top-[10%]
// top-[20%]
// top-[30%]
// top-[40%]
// top-[50%]
// top-[60%]
// top-[70%]
// top-[80%]
// top-[90%]
// w-[10px]
// w-[20px]
// w-[30px]
// w-[40px]
// w-[50px]
// w-[60px]
// w-[70px]
// w-[80px]
// w-[90px]
// w-[100px]
// w-[110px]
// w-[120px]
// w-[130px]
// w-[140px]
// w-[150px]
// w-[160px]
// w-[170px]
// w-[180px]
// w-[190px]
// w-[200px]
// stroke-dasharray: 140


