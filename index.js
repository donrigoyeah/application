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

  const [project, setProject] = useState(1);
  const [codeAccepted, setCodeAccepted] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const code = '1234';

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
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-3 justify-center items-center pt-16 md:pt-32 lg:pt-48'
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
        <div className='relative pt-40 text-center text-sm'>
          <p>
            Welcome to my portfolio website for the application to the gamelab
            cologne .
          </p>
          <p>This website is designed for desktop viewports.</p>
          <p>
            For best experience please use a laptop width a screen width of at
            least 1000px.
          </p>

          <p
            className={classNames(' pt-4', {
              'text-red-500': screenWidth < 1000,
              'text-orange-500': screenWidth >= 1000 && screenWidth < 1450,
              'text-green-500': screenWidth >= 1450,
            })}
          >
            {screenWidth &&
              screenWidth < 2000 &&
              'Your screen size is ' + screenWidth + ' px.'}
          </p>
          <p
            className={classNames('pt-20', {
              'text-transparent': screenWidth < 1000,
            })}
          >
            The code for the page is 1234.
          </p>
        </div>
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
              'opacity-0 h-0': !showPage,
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
          <div className='grid grid-cols-12 h-full'>
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
              <div className='md:h-2/4 bg-primary flex flex-col items-center z-10'>
                <div className='flex md:h-0 h-1/3 md:py-20 py-4 pl-10 w-full justify-center md:hidden'>
                  <h1 className='md:text-7xl text-5xl text-center'>Sebastian Rieger</h1>
                </div>
                <div className='md:flex md:h-2/4 h-0  overflow-hidden'>
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
                <div className='md:h-2/4 h-0 flex md:pb-10  overflow-hidden'>
                  <span className='text-8xl hover:text-5xl transition-all'>R</span>
                  <span className='text-8xl hover:text-5xl transition-all'>i</span>
                  <span className='text-8xl hover:text-5xl transition-all'>e</span>
                  <span className='text-8xl hover:text-5xl transition-all'>g</span>
                  <span className='text-8xl hover:text-5xl transition-all'>e</span>
                  <span className='text-8xl hover:text-5xl transition-all'>r</span>
                </div>
              </div>
              <div className='md:h-2/4 md:py-0 py-4 bg-secondary'>
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
                    Coder
                  </span>
                  <span className='flex flex-nowrap col-span-1 md:text-5xl text-2xl hover:pl-10 transition-all p-3'>
                    <Edit2 className='inline md:h-10 md:w-10 mr-5' />
                    Designer
                  </span>
                  <span className='flex flex-nowrap col-span-1 md:text-5xl text-2xl hover:pl-10 transition-all p-3'>
                    <Music className='inline md:h-10 md:w-10 mr-5' />
                    Musician
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
                        <td className='absolute h-0.5 bg-black w-96 block -right-10 bottom-2'></td>
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
                            href='https://www2.unesp.br/'
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
                            href='https://www.uni-heidelberg.de/de'
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
                            href='https://www.uni-kiel.de/de/'
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
                        <td className='absolute h-0.5 bg-black w-96 block -left-10 bottom-2'></td>
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
          <div className='flex'>
            <div className='grow bg-third min-w-0 hover:min-w-[50%] transition-all duration-1000 max-w-[33.33%] w-1/3 whitespace-nowrap overflow-hidden'>
              <div className='flex flex-col justify-center shadow-right h-full'>
                <div className='w-full py-10 pl-10'>
                  <div className='flex flex-col justify-center items-center gap-y-4'>
                    <Image
                      src='/assets/svg/blender.svg'
                      height={50}
                      width={50}
                      alt='unity logo'
                    />
                    <h2 className='text-4xl font-bold'>Blender</h2>
                  </div>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>
                        3D Modelling of basic shapes using wide range of tools
                      </span>
                    </span>
                  </span>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>Applying Modifiers</span>
                    </span>
                  </span>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>Rigging and Animations</span>
                    </span>
                  </span>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>Basic Shading knowledge</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className='grow bg-fourth min-w-0 hover:min-w-[50%] transition-all duration-1000 max-w-[33.33%] w-1/3 whitespace-nowrap overflow-hidden'>
              <div className='flex flex-col justify-center shadow-right h-full'>
                <div className='py-10 pl-10'>
                  <div className='flex flex-col justify-center items-center gap-y-4'>
                    <Image
                      src='/assets/svg/unity.svg'
                      height={50}
                      width={50}
                      alt='unity logo'
                    />
                    <h2 className='text-4xl font-bold'>Unity</h2>
                  </div>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>
                        Secure handling with object orientated code
                      </span>
                    </span>
                  </span>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>
                        Input System, UI Elements and Inspector Handling
                      </span>
                    </span>
                  </span>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>
                        Animation Controller, Statesystems and Scribtable
                        Objects
                      </span>
                    </span>
                  </span>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>
                        Basic understanding of Shader Graph
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className='grow bg-secondary min-w-0 hover:min-w-[50%] transition-all duration-1000 max-w-[33.33%] w-1/3 overflow-hidden whitespace-nowrap'>
              <div className='flex flex-col justify-center h-full'>
                <div className='py-10 pl-10'>
                  <div className='flex flex-col justify-center items-center gap-y-4'>
                    <Image
                      src='/assets/svg/cSharp.svg'
                      height={50}
                      width={50}
                      alt='c sharp logo'
                    />
                    <h2 className='text-4xl font-bold'>C# / TS </h2>
                  </div>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>
                        Multiple years of typescript work experience
                      </span>
                    </span>
                  </span>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>
                        High proficiency with C# in OOP with Unity
                      </span>
                    </span>
                  </span>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>
                        Knowledge of Go backends and Postgres database
                        manipulations
                      </span>
                    </span>
                  </span>
                  <span className='block text-2xl pt-5'>
                    <span className='flex flex-row '>
                      <Plus className='h-7 w-7 inline mr-2 absolute' />
                      <span className='pl-10'>
                        Basic skills with Python and Anaconda
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
                'col-start-3 col-span-6 bg-third h-0 rounded-tr-2xl rounded-bl-2xl transition-all duration-1000',
                {
                  'h-10': inView4,
                }
              )}
            ></div>
            <div className='col-start-6 col-span-1 h-0'></div>
            <div
              className={classNames(
                'col-start-9 col-span-1 bg-third h-00 w-10 rounded-tr-2xl transition-all duration-1000 shadow-left',
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
                  className={classNames(
                    'col-span-2 h-20 text-center text-2xl p-6 hover:text-3xl transition-all duration-500 shadow-left ',
                    {
                      'shadow-none': index === 0,
                      'bg-fourth ': index === 0 || index === 3,
                      'bg-third ': index === 1 || index === 4,
                      'bg-secondary': index === 2 || index === 5,
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
                'col-start-2 col-span-1 bg-fourth h-0 w-10 rounded-tl-xl rounded-br-xl transition-all duration-1000',
                {
                  'h-10': project === 0,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-1 col-span-1 bg-fourth h-0 w-10 rounded-tl-xl justify-self-end rounded-br-xl transition-all duration-1000',
                {
                  'h-10': project === 0,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-3 col-span-1 bg-third h-0 w-10 justify-self-end rounded-tr-xl rounded-bl-xl transition-all duration-1000',
                {
                  'h-10': project === 1,
                }
              )}
            ></div>
            <div className='col-start-1 col-span-12 h-0'></div>
            <div
              className={classNames(
                'col-start-4 col-span-1 bg-third h-0 w-10  rounded-tr-xl rounded-bl-xl transition-all duration-1000',
                {
                  'h-10': project === 1,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-5 col-span-1 bg-secondary h-0 w-10 justify-self-end rounded-tr-xl rounded-bl-xl transition-all duration-1000',
                {
                  'h-10': project === 2,
                }
              )}
            ></div>
            <div className='col-start-1 col-span-12 h-0'></div>
            <div
              className={classNames(
                'col-start-6 col-span-1 bg-secondary h-0 w-10  rounded-tr-xl rounded-bl-xl transition-all duration-1000',
                {
                  'h-10': project === 2,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-8 col-span-1 bg-fourth h-0 w-10 rounded-tl-xl rounded-br-xl transition-all duration-1000',
                {
                  'h-10': project === 3,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-7 col-span-1 bg-fourth h-0 w-10 rounded-tl-xl justify-self-end rounded-br-xl transition-all duration-1000',
                {
                  'h-10': project === 3,
                }
              )}
            ></div>
            <div
              className={classNames(
                'col-start-9 col-span-1 bg-third h-0 w-10 justify-self-end rounded-tr-xl rounded-bl-xl transition-all duration-1000',
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
                'col-start-12 col-span-1 bg-secondary h-0 w-10 rounded-tl-xl rounded-br-xl transition-all duration-1000',
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
              'w-full h-[600px] transition-all grid grid-cols-12 p-8',
              {
                'bg-fourth': project === 0 || project === 3,
                'bg-third': project === 1 || project === 4,
                'bg-secondary': project === 2 || project === 5,
              }
            )}
          >
            <div className='col-span-4 ml-5 px-4 flex flex-col'>
              <h2 className='text-6xl whitespace-nowrap overflow-visible font-bold'>
                {gameProjects[project].title}
              </h2>
              <span>{gameProjects[project].subtitle}</span>
              <h3 className='text-3xl mt-5'>Describtion:</h3>
              <p className=''>{gameProjects[project].describtion}</p>
              <div className='mt-auto mb-5'>
                <h3 className='text-3xl mt-5'>Goal:</h3>
                <p>{gameProjects[project].goal}</p>
              </div>
            </div>
            <div className='col-span-4 px-12 mb-5 flex flex-col justify-end'>
              <h3 className='text-3xl mt-5'>Conslusion:</h3>
              <h3 className='text-xl pl-20'>
                {gameProjects[project].conclusion}
              </h3>
              <h3 className='text-3xl mt-5 flex justify-between'>
                Duration:
                <span>{gameProjects[project].duration}</span>
              </h3>
              <h3 className='text-xl text-right pr-20'></h3>
              <h3 className='text-3xl mt-5 flex justify-between whitespace-nowrap'>
                Own Rating:{' '}
                <MouseParallaxContainer
                  className='w-full h-full flex '
                  containerStyle={{ overflow: 'visible' }}
                  resetOnLeave
                >
                  <MouseParallaxChild
                    factorX={0.1}
                    factorY={0.1}
                    className='absolute right-1/4 top-1/4'
                    resetOnLeave
                  >
                    <StarRating rating={gameProjects[project].ownRating} />
                  </MouseParallaxChild>
                </MouseParallaxContainer>
              </h3>
            </div>
            <div className='col-span-4'>
              <div className='flex h-full'>
                <div className='grow min-w-[25%] hover:min-w-[75%] transition-all duration-1000  bg-primary flex flex-col'>
                  <div className='grow min-h-[25%] hover:min-h-[75%] transition-all duration-1000  bg-third'>
                    <div className='relative w-full h-full'>
                      <Image
                        src={gameProjects[project].images[0]}
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
                        src={gameProjects[project].images[1]}
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
                        src={gameProjects[project].images[2]}
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
                        src={gameProjects[project].images[3]}
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
                'col-start-5 col-span-1 bg-fourth h-0 w-10 rounded-tl-2xl rounded-br-2xl justify-self-end transition-all duration-1000',
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
    title: 'Galaxy Shooter',
    subtitle: '2D Arcady / Casual Space Shooter',
    describtion:
      'This game was developed in a Unity Course from Udemy and consists of a fun 2D arcade space shooter with powerups, waves of spawning enemies and levels with increasing difficulty. Implementation of sprite animations and "cool" sound effects',
    goal: 'Learning Unity',
    duration: '1 Week',
    ownRating: 2,
    conclusion:
      'A simple, yet fun casual game that tought me the fundamentals of unity. Lets become a game developer!',
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
    describtion: (
      <span className='w-full'>
        <span>
          From zero to infinity. Since i knew everything after the tutorial, why
          not build a 3D multiplayer dungeon crawler for mobile... So I followed
          the youtuber{' '}
          <>
            <a
              href='https: //www.youtube.com/playlist?list=PLD_vBJjpCwJtrHIW1SS5_BNRk6KZJZ7_d'
              className='pointer-cursor underline'
              target='_blank'
              rel='noreferrer'
            >
              Sebastian Graves{' '}
            </a>
          </>
          and added the Mirror networking ontop of his very informative
          lectures. With more time on my hand during this year i dove deep and
          got myself lost. Also i learned a lot, this project was way too
          ambitious for me back then and i never finished it.
        </span>
      </span>
    ),
    goal: 'What can i accomplish?',
    duration: '2 Months',
    ownRating: 2,
    conclusion:
      'Aim high, but not out of reach. The result was a barley working prototyp with many features that i was still feeling kinda proud of it. But also felt like a bottomless pit.',
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
          .The theme was `Lost & Found` and i came up with the idea of a
          squirrel looking for its burried nuts in a backyard during winter. I
          made the 3D models and animation with Blender, played some guitar with
          Ableton and put it all together with Unity. Some PostProcessing Layers
          tried to hide the rough edges but it felt great to finish something.
        </span>
      </span>
    ),

    goal: 'What can i actually accomplish?',
    duration: '48 Hours',
    ownRating: 3,
    conclusion:
      'Very tense weekend. But it was possible to finish something enjoyable',
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
      'A spherical tetris game made with a friend, where the random generated pieces fall from outside onto a sphere. The more points you get, the faster they fall. Includes an intricated gamesystem, a simple visual solution to a tricky challenge and much more. I took a week off work and designed, planed and developed this masterpiece while explaning unity as good as i could to my friend. There are still many rough edges but an enjoyable title nonetheless.',
    goal: 'Developing with a friend and finishing a game',
    duration: '2 Weeks',
    ownRating: 4,
    conclusion:
      'Good vibes & good times. The approach to game develpment by an data scientist gave me new perspectives on tackling and overcoming codeing challenges.',
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
      'You are an AI and tasked with retrieving artifact from islands research facility. A virus infected all wildlife making them dangerous enemies. Other AIs are on the same mission as you so you have to hurry. Basebuilding to farm resources and generate enery to build and operate Mechs. Energy management and oversight are necesseray for exploration and combat. Dynamic wheater and a day/night cycle require different renewable energy sources. The longer you stay the more aggresive the enviroment becomes.',
    goal: 'Put it all together and make something sellable',
    duration: 'In Development',
    ownRating: 5,
    conclusion:
      'Despite haveing less time, development feels very productive and fullfilling. A project i would love to share with future fellow students.',
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
      'Going back to original "Mobile Dungeon" concept, but focusing on non-mobil multiplayer with an unique concept of interaction, gameplay mechanics and overall game experience. As a spirit summoned into a mask by a distinct wizzard faction, you resurrect a body in a graveyard and fight your way through the outskirts forward to the central tower. The lands are cut off, that only you and the spirits of the other factions can pass through the magic barrier and try to be the first reaching the top of the mysterious tower.',
    goal: 'Provide an unique mulitplayer experience with a deep combat system, a motivating sense of progression and a interesting lore.',
    duration: '-',
    ownRating: 5,
    conclusion: 'Lets Go ...',
    images: [
      '/assets/images/games/sm1.jpg',
      '/assets/images/games/sm2.jpg',
      '/assets/images/games/sm3.jpg',
      '/assets/images/games/sm4.jpg',
    ],
  },
];

// const PreloadedImage = preloadImage("https://via.placeholder.com/700x500");

// function preloadImage(src) {
//   const image = new Image();
//   image.src = src;
//   return function PreloadedImage(props) {
//     return <img {...props} src={src} />;
//   };
// }

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
