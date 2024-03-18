/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */

'use client';

import React from 'react';
import {useClickAway} from 'react-use';
import {css} from '@styled/css';
import {QueryClient} from '@tanstack/react-query';
import Link from 'next/link';

import {Button} from '@/components';
import {jobs} from '@/constants/jobs';
import {locations} from '@/constants/location';
import {Paths} from '@/utils';
import {findMatching} from '@/utils/find-matching';

import HomeSection from './home-section';

const queryClient = new QueryClient();

// Version A: Modify it by changing the query

export default function Home() {
  const [selectedJob, setSelectedJob] = React.useState<string | null>(null);
  const [showJobsList, setShowJobsList] = React.useState(false);
  const jobWrapRef = React.useRef(null);
  const [selectedLocation, setSelectedLocation] = React.useState<string | null>(null);
  const [showLocationsList, setShowLocationsList] = React.useState(false);
  const locationWrapRef = React.useRef(null);

  const matchedJobs = findMatching(selectedJob || '', jobs, {
    caseSensitive: false,
    matchSubstring: true,
  }).slice(0, 6);

  const matchedLocations = findMatching(selectedLocation || '', locations, {
    caseSensitive: false,
    matchSubstring: true,
  }).slice(0, 6);

  const onFindChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setSelectedJob(value);
  };

  const onNearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setSelectedLocation(value);
  };

  useClickAway(locationWrapRef, () => {
    setShowLocationsList(false);
  });

  useClickAway(jobWrapRef, () => {
    setShowJobsList(false);
  });
  return (
    <div className={css({w: '100%'})}>
      <div className={css({bg: 'red', w: '100%'})}>
        <div className={css({pos: 'relative', h: '29.0625rem', zIndex: '1', py: 20, px: 6})}>
          <picture className='css-12motlz e4udcj61'>
            <img
              src='https://m.bbb.org/terminuscontent/hero/2023-q1/construction-workers.jpg?tx=q_auto:eco,w_1905'
              srcSet='https://m.bbb.org/terminuscontent/hero/2023-q1/construction-workers.jpg?tx=q_auto:eco,w_1905,dpr_2.0 2x'
              width={1905}
              height={565}
              alt='Three construction workers of varied age, race, and gender stand atop an unfinished rooftop construction site, looking towards their work.'
              className={css({
                height: '100%',
                left: '0',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                userSelect: 'none',
                width: '100%',
                zIndex: '-1',
              })}
            />
          </picture>
          <div
            className={css({
              maxW: '8xl',
              display: 'flex',
              alignItems: 'center',
              flexDir: 'column',
              mx: 'auto',
            })}
          >
            <div className={css({w: '70rem'})}>
              <div className={css({bg: 'hsla(0,0%,100%,0.9)', w: '26rem', p: 8})}>
                <div className='stack'>
                  <h1 className={css({textStyle: 'h1', color: 'primary'})}>
                    Find a Better Business
                  </h1>
                  <p className={css({fontSize: '18px', mt: 2})}>
                    BBB helps consumers find businesses and charities that they can trust.
                  </p>
                </div>
              </div>
              <div className={css({bg: '#007398', w: '80%', p: 6, mt: 10, boxShadow: 'lg'})}>
                <form name='search-form'>
                  <label
                    htmlFor=':R6lal4pa:'
                    aria-hidden='true'
                    className={css({
                      clip: 'rect(1px, 1px, 1px, 1px)',
                      clipPath: 'inset(100%)',
                      height: '1px',
                      overflow: 'hidden',
                      position: 'absolute',
                      whiteSpace: 'nowrap',
                      width: '1px',
                    })}
                  >
                    Honeypot
                    <input
                      id=':R6lal4pa:'
                      type='radio'
                      name='honeypot'
                      tabIndex={-1}
                      defaultValue={1}
                      className={css({
                        alignItems: 'stretch',
                        display: 'flex',
                        flex: '1 1 auto',
                        marginLeft: '12px',
                        width: '100%',
                      })}
                    />
                  </label>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                    })}
                  >
                    <div
                      className={css({
                        alignItems: 'stretch',
                        background: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        lineHeight: 1,
                        position: 'relative',
                        width: '100%',
                        border: '0',
                        minHeight: '2.1875rem',
                        boxShadow: 'lg',
                      })}
                    >
                      <label
                        htmlFor=':Rjalal4pa:'
                        id=':Rjalal4paH1:'
                        className={css({
                          alignItems: 'center',
                          display: 'flex',
                          fontWeight: 'bold',
                          flex: '0 0 auto',
                          margin: '0',
                          padding: '0 0 0 12px',
                          zIndex: '1',
                          pr: '0',
                        })}
                      >
                        Find
                      </label>
                      <div
                        className={css({
                          alignItems: 'stretch',
                          display: 'flex',
                          flex: '1 1 auto',
                          ml: '12px',
                          width: '100%',
                          pos: 'relative',
                        })}
                        ref={jobWrapRef}
                        onClick={() => setShowJobsList(true)}
                      >
                        <input
                          aria-autocomplete='list'
                          autoComplete='off'
                          id=':Rjalal4pa:'
                          autoCapitalize='none'
                          name='find_text'
                          placeholder='businesses, charities, category'
                          type='search'
                          role='combobox'
                          aria-expanded='false'
                          aria-owns=':Rjalal4paH2:'
                          className={css({border: '0', outline: 'none', w: '100%'})}
                          value={selectedJob || ''}
                          onChange={onFindChange}
                        />
                        {showJobsList && selectedJob !== matchedJobs?.at(0) ? (
                          <div
                            className={css({
                              top: '40px',
                              pos: 'absolute',
                              alignItems: 'stretch',
                              display: 'flex',
                              flex: '1 1 auto',
                              bg: 'white',
                              left: '-55px',
                              right: '0',
                              boxShadow: 'lg',
                            })}
                          >
                            <ul className={css({w: '100%'})}>
                              {matchedJobs.map((job, index) => (
                                <li
                                  key={index}
                                  onClick={() => {
                                    setSelectedJob(job);
                                  }}
                                  className={css({
                                    p: 3,
                                    borderBottom:
                                      matchedJobs.length === index + 1
                                        ? undefined
                                        : '1px solid token(colors.strokeSecondary)',
                                    cursor: 'pointer',
                                    _hover: {
                                      bg: '#007398',
                                      color: 'text.invert',
                                    },
                                  })}
                                >
                                  {job}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div
                      className={css({
                        alignItems: 'stretch',
                        background: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        lineHeight: 1,
                        position: 'relative',
                        width: '100%',
                        border: '0',
                        minHeight: '2.1875rem',
                        boxShadow: 'lg',
                      })}
                    >
                      <label
                        htmlFor=':Rlalal4pa:'
                        id=':Rlalal4paH1:'
                        className={css({
                          alignItems: 'center',
                          display: 'flex',
                          fontWeight: 'bold',
                          flex: '0 0 auto',
                          margin: '0',
                          padding: '0 0 0 12px',
                          zIndex: '1',
                          pr: '0',
                        })}
                      >
                        Near
                      </label>
                      <div
                        className={css({
                          alignItems: 'stretch',
                          display: 'flex',
                          flex: '1 1 auto',
                          ml: '12px',
                          width: '100%',
                        })}
                        ref={locationWrapRef}
                        onClick={() => setShowLocationsList(true)}
                      >
                        <input
                          aria-autocomplete='list'
                          autoComplete='off'
                          id=':Rlalal4pa:'
                          autoCapitalize='none'
                          name='find_loc'
                          placeholder='city, prov or postal'
                          role='combobox'
                          aria-expanded='false'
                          aria-owns=':Rlalal4paH2:'
                          className={css({border: '0', outline: 'none', w: '100%'})}
                          value={selectedLocation || ''}
                          onChange={onNearChange}
                        />
                        {showLocationsList && selectedLocation !== matchedLocations?.at(0) ? (
                          <div
                            className={css({
                              top: '40px',
                              pos: 'absolute',
                              alignItems: 'stretch',
                              display: 'flex',
                              flex: '1 1 auto',
                              bg: 'white',
                              left: '0',
                              right: '0',
                              boxShadow: 'lg',
                            })}
                          >
                            <ul className={css({w: '100%'})}>
                              {matchedLocations.map((loc, index) => (
                                <li
                                  key={index}
                                  onClick={() => {
                                    setSelectedLocation(loc);
                                  }}
                                  className={css({
                                    p: 3,
                                    borderBottom:
                                      matchedLocations.length === index + 1
                                        ? undefined
                                        : '1px solid token(colors.strokeSecondary)',
                                    cursor: 'pointer',
                                    _hover: {
                                      bg: '#007398',
                                      color: 'text.invert',
                                    },
                                  })}
                                >
                                  {loc}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                      <div className={css({w: '60px'})}>
                        <div
                          aria-controls=':R15lalal4paH1:'
                          aria-expanded='false'
                          aria-labelledby=':R15lalal4pa:'
                          className={css({
                            p: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            bg: 'backgroundVariant',
                            gap: 1,
                          })}
                          tabIndex={0}
                          role='combobox'
                        >
                          <img
                            src='https://m.bbb.org/terminuscontent/dist/img/header/flag-ca-100__100w.png?tx=w_21'
                            srcSet='https://m.bbb.org/terminuscontent/dist/img/header/flag-ca-100__100w.png?tx=w_21,dpr_2.0 2x'
                            alt=''
                            height={50}
                            width={100}
                            className={css({w: '1rem', h: '0.8rem'})}
                          />
                          <span
                            aria-hidden='true'
                            translate='no'
                            className={css({textStyle: 'caption'})}
                          >
                            CA
                          </span>
                        </div>
                        {/* <ul
                          aria-labelledby=':R15lalal4pa:'
                          className='bg-gray-30 shadow-base css-zyn7di e62xhj40'
                          id=':R15lalal4paH1:'
                          role='listbox'
                          hidden
                        >
                          <li
                            aria-selected='false'
                            className='dtm-header-near-typeahead-country-item'
                            role='option'
                          >
                            <img
                              src='https://m.bbb.org/terminuscontent/dist/img/header/flag-us-100__100w.png?tx=w_21'
                              srcSet='https://m.bbb.org/terminuscontent/dist/img/header/flag-us-100__100w.png?tx=w_21,dpr_2.0 2x'
                              alt=''
                              height={50}
                              width={100}
                            />
                            United States
                          </li>
                          <li
                            aria-selected='true'
                            className='dtm-header-near-typeahead-country-item'
                            tabIndex={-1}
                            role='option'
                          >
                            <img
                              src='https://m.bbb.org/terminuscontent/dist/img/header/flag-ca-100__100w.png?tx=w_21'
                              srcSet='https://m.bbb.org/terminuscontent/dist/img/header/flag-ca-100__100w.png?tx=w_21,dpr_2.0 2x'
                              alt=''
                              height={50}
                              width={100}
                            />
                            Canada
                          </li>
                        </ul> */}
                      </div>
                    </div>
                    <Button color='success' className={css({rounded: '0'})}>
                      Search
                    </Button>
                  </div>
                </form>
              </div>
              {/* <div className='bg-blue-medium css-104ntuj erb0q3a1'>
                <form action='https://www.bbb.org/search' name='search-form'>
                  <label htmlFor=':R6lal4pa:' aria-hidden='true' className='visually-hidden'>
                    Honeypot
                    <input
                      id=':R6lal4pa:'
                      type='radio'
                      name='honeypot'
                      tabIndex={-1}
                      defaultValue={1}
                    />
                  </label>
                  <div className='css-1xdgpde epsahlr0'>
                    <div className='dtm-header-find-typeahead e164phwk0 css-gb2poa e19i3r7f0'>
                      <label
                        htmlFor=':Rjalal4pa:'
                        id=':Rjalal4paH1:'
                        className='eki464u0 css-1nm0rrn e1m9yp6e0'
                      >
                        Find
                      </label>
                      <div className='css-1ci0kms e139l4qs0'>
                        <input
                          aria-autocomplete='list'
                          autoComplete='off'
                          id=':Rjalal4pa:'
                          autoCapitalize='none'
                          name='find_text'
                          placeholder='businesses, charities, category'
                          type='search'
                          role='combobox'
                          aria-expanded='false'
                          aria-owns=':Rjalal4paH2:'
                          className='css-d0ontt e1psgz1x0'
                          defaultValue
                        />
                        <div
                          role='listbox'
                          aria-labelledby=':Rjalal4paH1:'
                          id=':Rjalal4paH2:'
                          className='css-14232aq ekqkvz0'
                        >
                          <ul className='css-1uunpja ekqkvz3' />
                        </div>
                      </div>
                    </div>
                    <div className='dtm-header-near-typeahead e164phwk0 css-gb2poa e19i3r7f0'>
                      <label
                        htmlFor=':Rlalal4pa:'
                        id=':Rlalal4paH1:'
                        className='eki464u0 css-1nm0rrn e1m9yp6e0'
                      >
                        Near
                      </label>
                      <div className='css-1ci0kms e139l4qs0'>
                        <input
                          aria-autocomplete='list'
                          autoComplete='off'
                          id=':Rlalal4pa:'
                          autoCapitalize='none'
                          name='find_loc'
                          placeholder='city, prov or postal'
                          role='combobox'
                          aria-expanded='false'
                          aria-owns=':Rlalal4paH2:'
                          className='css-d0ontt e1psgz1x0'
                          defaultValue
                        />
                        <div
                          role='listbox'
                          aria-labelledby=':Rlalal4paH1:'
                          id=':Rlalal4paH2:'
                          className='css-14232aq ekqkvz0'
                        >
                          <ul className='css-1uunpja ekqkvz3' />
                        </div>
                      </div>
                      <div className='text-size-7 css-mv0idm e7isygd0'>
                        <span className='visually-hidden' id=':R15lalal4pa:'>
                          Country
                        </span>
                        <div
                          aria-controls=':R15lalal4paH1:'
                          aria-expanded='false'
                          aria-labelledby=':R15lalal4pa:'
                          className='bg-gray-30 text-blue-dark'
                          tabIndex={0}
                          role='combobox'
                        >
                          <img
                            src='https://m.bbb.org/terminuscontent/dist/img/header/flag-ca-100__100w.png?tx=w_21'
                            srcSet='https://m.bbb.org/terminuscontent/dist/img/header/flag-ca-100__100w.png?tx=w_21,dpr_2.0 2x'
                            alt
                            height={50}
                            width={100}
                          />
                          <span aria-hidden='true' translate='no'>
                            CA
                          </span>
                          <span className='visually-hidden'>Canada</span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                            aria-hidden='true'
                            className='icon css-1ukaq79 etig9ot0'
                            focusable='false'
                            height='1em'
                            width='1em'
                          >
                            <path d='M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z' />
                          </svg>
                        </div>
                        <ul
                          aria-labelledby=':R15lalal4pa:'
                          className='bg-gray-30 shadow-base css-zyn7di e62xhj40'
                          id=':R15lalal4paH1:'
                          hidden
                          role='listbox'
                        >
                          <li
                            aria-selected='false'
                            className='dtm-header-near-typeahead-country-item'
                            role='option'
                          >
                            <img
                              src='https://m.bbb.org/terminuscontent/dist/img/header/flag-us-100__100w.png?tx=w_21'
                              srcSet='https://m.bbb.org/terminuscontent/dist/img/header/flag-us-100__100w.png?tx=w_21,dpr_2.0 2x'
                              alt
                              height={50}
                              width={100}
                            />
                            United States
                          </li>
                          <li
                            aria-selected='true'
                            className='dtm-header-near-typeahead-country-item'
                            tabIndex={-1}
                            role='option'
                          >
                            <img
                              src='https://m.bbb.org/terminuscontent/dist/img/header/flag-ca-100__100w.png?tx=w_21'
                              srcSet='https://m.bbb.org/terminuscontent/dist/img/header/flag-ca-100__100w.png?tx=w_21,dpr_2.0 2x'
                              alt
                              height={50}
                              width={100}
                            />
                            Canada
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button
                      className='bds-button dtm-header-search-submit css-wbkz77 erb0q3a0'
                      data-type='search'
                      type='submit'
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={css({w: '100%'})}>
        <div>
          <HomeSection />
        </div>
      </div>
      <div className={css({bg: '#f2f2f2', w: '100%'})}>
        <div className={css({py: 10, px: 6})}>
          <div className={css({maxW: '8xl', m: 'auto'})}>
            <div className={css({display: 'flex', flexDir: 'column', alignItems: 'flex-start'})}>
              <div className={css({display: 'flex', gap: 8, w: '100%'})}>
                <div
                  className={css({
                    display: 'flex',
                    flexDir: 'column',
                    alignItems: 'center',
                    flex: '0 1 33.33%',
                    minW: '0',
                    maxW: '100%',
                    background: 'white',
                    boxShadow: 'lg',
                    padding: 8,
                    justifyContent: 'center',
                  })}
                >
                  <h2
                    className={css({
                      color: 'primary',
                      textStyle: 'h4',
                      textAlign: 'center',
                      fontWeight: 'normal',
                      mb: 4,
                    })}
                  >
                    Popular Categories
                  </h2>
                  <ul className='stack css-zyn7di e62xhj40'>
                    <li
                      className={css({
                        textDecoration: 'underline',
                        color: '#002f6c',
                        textAlign: 'center',
                      })}
                    >
                      <Link href={Paths.Home.getPath()}>Roofing Contractors</Link>
                    </li>
                    <li
                      className={css({
                        textDecoration: 'underline',
                        color: '#002f6c',
                        textAlign: 'center',
                      })}
                    >
                      <Link href={Paths.Home.getPath()}>Home Improvement</Link>
                    </li>
                    <li
                      className={css({
                        textDecoration: 'underline',
                        color: '#002f6c',
                        textAlign: 'center',
                      })}
                    >
                      <Link href={Paths.Home.getPath()}>Auto Repair</Link>
                    </li>
                    <li
                      className={css({
                        textDecoration: 'underline',
                        color: '#002f6c',
                        textAlign: 'center',
                      })}
                    >
                      <Link href={Paths.Home.getPath()}>General Contractor</Link>
                    </li>
                    <li
                      className={css({
                        textDecoration: 'underline',
                        color: '#002f6c',
                        textAlign: 'center',
                      })}
                    >
                      <Link href={Paths.Home.getPath()}>Charity - Local</Link>
                    </li>
                    <li
                      className={css({
                        textDecoration: 'underline',
                        color: '#002f6c',
                        textAlign: 'center',
                      })}
                    >
                      <Link href={Paths.Home.getPath()}>Construction Services</Link>
                    </li>
                    <li
                      className={css({
                        textDecoration: 'underline',
                        color: '#002f6c',
                        textAlign: 'center',
                      })}
                    >
                      <Link href={Paths.Home.getPath()}>Home Builders</Link>
                    </li>
                    <li
                      className={css({
                        textDecoration: 'underline',
                        color: '#002f6c',
                        textAlign: 'center',
                      })}
                    >
                      <Link href={Paths.Home.getPath()}>Heating and Air Conditioning</Link>
                    </li>
                    <li
                      className={css({
                        textDecoration: 'underline',
                        color: '#002f6c',
                        textAlign: 'center',
                      })}
                    >
                      <Link href={Paths.Home.getPath()}>Used Car Dealers</Link>
                    </li>
                    <li
                      className={css({
                        textDecoration: 'underline',
                        color: '#002f6c',
                        textAlign: 'center',
                      })}
                    >
                      <Link href={Paths.Home.getPath()}>Tree Service</Link>
                    </li>
                  </ul>
                  <Button color='primary' visual='contained' className={css({mt: 4, rounded: '0'})}>
                    <Link href={Paths.Home.getPath()}>More Categories</Link>
                  </Button>
                </div>
                <div
                  className={css({
                    display: 'flex',
                    flexDir: 'column',
                    alignItems: 'center',
                    flex: '0 1 33.33%',
                    minW: '0',
                    maxW: '100%',
                    background: 'white',
                    boxShadow: 'lg',
                    padding: 8,
                  })}
                >
                  <h2
                    className={css({
                      color: 'primary',
                      textStyle: 'h4',
                      textAlign: 'center',
                      fontWeight: 'normal',
                      mb: 4,
                    })}
                  >
                    Business Resources
                  </h2>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 640 512'
                    aria-hidden='true'
                    className={css({fill: '#002f6c', mx: 'auto', w: '80px', h: '80px'})}
                    focusable='false'
                    height='1em'
                    width='1em'
                  >
                    <path d='m323.4 85.2-96.8 78.4c-16.1 13-19.2 36.4-7 53.1 12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8l139 128V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15-21.8 0-43 7.5-60 21.2m22.8 124.4-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48v224h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1 5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9 4.5-4.9 7.8-10.6 9.9-16.5 19.4 13 45.8 10.3 62.1-7.5 17.9-19.5 16.6-49.9-2.9-67.8zM16 128c-8.8 0-16 7.2-16 16v208c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128zm32 192a16 16 0 1 1 0 32 16 16 0 1 1 0-32m496-192v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16zm32 208a16 16 0 1 1 32 0 16 16 0 1 1-32 0' />
                  </svg>
                  <p className={css({mx: 'auto', mb: 4, textAlign: 'center', w: '200px'})}>
                    BBB respects the resiliency of small businesses.
                  </p>
                  <p className={css({mx: 'auto', mb: 4, textAlign: 'center', w: '200px'})}>
                    Trust has never been more important, and BBB is committed to providing support
                    for small businesses.
                  </p>
                  <Button
                    color='primary'
                    visual='contained'
                    className={css({mt: 'auto', rounded: '0'})}
                  >
                    <Link href={Paths.Home.getPath()}>More Categories</Link>
                  </Button>
                </div>
                <div
                  className={css({
                    display: 'flex',
                    flexDir: 'column',
                    alignItems: 'center',
                    flex: '0 1 33.33%',
                    minW: '0',
                    maxW: '100%',
                    background: '#007398',
                    boxShadow: 'lg',
                    padding: 8,
                  })}
                >
                  <div className={css({display: 'flex', flexDir: 'column-reverse', gap: 1})}>
                    <h2
                      className={css({
                        textStyle: 'h3',
                        fontWeight: '700',
                        color: 'text.invert',
                        textAlign: 'center',
                      })}
                    >
                      Get Accredited
                    </h2>
                    <div
                      className={css({
                        color: 'text.invert',
                        w: '200px',
                        textAlign: 'center',
                        mb: 4,
                      })}
                    >
                      Show customers that you're a better business.
                    </div>
                  </div>
                  <img
                    src='https://m.bbb.org/terminuscontent/dist/img/tsoabb-lockup-white-svg_2x.png?tx=w_205'
                    srcSet='https://m.bbb.org/terminuscontent/dist/img/tsoabb-lockup-white-svg_2x.png?tx=w_205,dpr_2.0 2x'
                    alt='BBB: Accredited Business seal: the sign of a Better Business'
                  />
                  <p
                    className={css({
                      color: 'text.invert',
                      w: '230px',
                      textAlign: 'center',
                      mt: 3,
                      mb: 4,
                    })}
                  >
                    The BBB Seal instantly identifies businesses committed to honesty and integrity.
                  </p>
                  <Button color='success' className={css({mt: 'auto', rounded: '0'})}>
                    <Link className='bds-cta' href={Paths.Home.getPath()}>
                      Apply for BBB Accreditation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css({w: '100%'})}>
        <div>
          <HomeSection />
        </div>
      </div>
    </div>
  );
}
