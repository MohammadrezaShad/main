import {css} from '@styled/css';
import Link from 'next/link';

import {Paths} from '@/utils';

import {Container} from './footer.styled';

interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <Container>
      <div className={css({flex: 1})}>
        <div
          className={css({
            p: 3,
            bg: 'gray.500',
            w: '100%',
          })}
        >
          <div className={css({display: 'flex', flex: 1})}>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                flex: 1,
                maxW: '8xl',
                margin: 'auto',
                w: '100%',
              })}
            >
              <Link className={css({flex: '0 0 80px'})} href={Paths.Home.getPath()}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 55 93'>
                  <path
                    d='M41.94 52.36H9.91l-1.16 3.83h8.54l1.62 5.28h14.03l1.63-5.28h8.53zm-26.8-21.5a7.57 7.57 0 0 0 1.68 10.57L24.49 47a1.89 1.89 0 0 1 .42 2.65l1.15.83 4.05-5.58a7.52 7.52 0 0 0 1.45-4.43 8.23 8.23 0 0 0-.1-1.21 7.56 7.56 0 0 0-3-4.94l-7.66-5.56a1.86 1.86 0 0 1-.8-1.24c-.01-.1-.01-.2 0-.3a1.93 1.93 0 0 1 .36-1.11l-1.15-.84-4.07 5.59zm4.62-22.38a10.903 10.903 0 0 0-2.09 6.42c-.003.586.044 1.172.14 1.75a10.89 10.89 0 0 0 4.39 7.16l9.64 7a5.84 5.84 0 0 1 2.35 3.83 6 6 0 0 1 .08.94A5.81 5.81 0 0 1 33.14 39l.93.67 7.59-10.49c3.544-4.913 2.448-11.766-2.45-15.33L27.58 5.4a3.36 3.36 0 0 1-1.35-2.21 3.33 3.33 0 0 1 .6-2.52L25.91 0l-6.15 8.48zM.08 64.67h8.78a6.82 6.82 0 0 1 4.94 1.67 4.36 4.36 0 0 1 1.29 3.21v.06a4.38 4.38 0 0 1-2.48 4.07c2.18.84 3.53 2.11 3.53 4.65 0 3.46-2.8 5.19-7.07 5.19h-9l.01-18.85zM8 72.31c1.83 0 3-.6 3-2 0-1.25-1-2-2.73-2H4.13v4H8zm1.1 7.61c1.84 0 2.94-.65 2.94-2v-.06c0-1.26-.94-2-3.07-2H4.13v4.16l4.97-.1zM18 64.67h8.78a6.82 6.82 0 0 1 4.94 1.67A4.36 4.36 0 0 1 33 69.55v.06a4.38 4.38 0 0 1-2.48 4.07c2.19.84 3.54 2.11 3.54 4.65 0 3.46-2.81 5.19-7.08 5.19H18V64.67zm7.89 7.64c1.83 0 3-.6 3-2 0-1.25-1-2-2.72-2H22v4h3.89zm1.1 7.61c1.84 0 2.94-.65 2.94-2v-.06c0-1.26-.94-2-3.07-2H22v4.16l4.99-.1zm8.83-15.25h8.78a6.82 6.82 0 0 1 4.94 1.67 4.36 4.36 0 0 1 1.29 3.21v.06a4.38 4.38 0 0 1-2.48 4.07c2.19.84 3.54 2.11 3.54 4.65 0 3.46-2.81 5.19-7.08 5.19h-9l.01-18.85zm7.89 7.64c1.83 0 3-.6 3-2 0-1.25-1-2-2.72-2h-4.12v4h3.84zm1.1 7.61c1.84 0 2.95-.65 2.95-2v-.06c0-1.26-.95-2-3.08-2h-4.81v4.16l4.94-.1zM0 91.6l.33-.38a2.3 2.3 0 0 0 1.67.65c.64 0 1.07-.33 1.07-.78 0-.43-.24-.67-1.25-.88-1.01-.21-1.6-.58-1.6-1.34a1.4 1.4 0 0 1 1.57-1.27 2.53 2.53 0 0 1 1.68.57l-.32.4a2.11 2.11 0 0 0-1.4-.57c-.62 0-1 .33-1 .75 0 .44.25.69 1.3.91 1.05.22 1.55.6 1.55 1.31 0 .8-.68 1.32-1.63 1.32A2.82 2.82 0 0 1 0 91.6zm4.57-.23V89.3h-.49v-.45h.49v-1h.52v1h1.12v.45H5.09v2c0 .42.24.57.6.57a1.06 1.06 0 0 0 .51-.12v.44a1.25 1.25 0 0 1-.63.15.89.89 0 0 1-1-.97zm2.1-.09c0-.72.61-1.11 1.51-1.11a3.65 3.65 0 0 1 1.08.15v-.12c0-.62-.39-.94-1-.94a2.48 2.48 0 0 0-1.07.26L7 89.09a3 3 0 0 1 1.29-.29 1.6 1.6 0 0 1 1.14.38c.25.271.38.632.36 1v2.1h-.53v-.52a1.55 1.55 0 0 1-1.26.59c-.67 0-1.33-.35-1.33-1.07zm2.6-.28v-.33a3.53 3.53 0 0 0-1-.15c-.66 0-1 .28-1 .71 0 .44.41.69.89.69A1.06 1.06 0 0 0 9.27 91zm1.41-2.15h.53v.9a1.48 1.48 0 0 1 1.43-1v.55a1.39 1.39 0 0 0-1.39 1.57v1.37h-.53l-.04-3.39zm2.74 2.52V89.3h-.49v-.45h.49v-1H14v1h1.12v.45H14v2c0 .42.24.57.59.57a1.06 1.06 0 0 0 .51-.12v.44a1.25 1.25 0 0 1-.63.15.89.89 0 0 1-1.05-.97zm3.93-3.73h.59l1.36 3.86 1.31-3.88h.44l1.31 3.88 1.37-3.86h.56l-1.7 4.67h-.46l-1.31-3.77-1.31 3.77h-.45zm7.65-.1h.6v.56H25v-.56zm0 1.31h.53v3.43H25v-3.43zm1.75 2.52V89.3h-.49v-.45h.49v-1h.52v1h1.12v.45h-1.12v2c0 .42.24.57.6.57.177.001.352-.04.51-.12v.44a1.29 1.29 0 0 1-.64.15.88.88 0 0 1-.99-.97zm2.36-3.93h.53v2a1.34 1.34 0 0 1 1.21-.67 1.27 1.27 0 0 1 1.35 1.37v2.13h-.53v-2a.92.92 0 0 0-1-1 1 1 0 0 0-1.06 1.08v2h-.53l.03-4.91zm7.19.68h-1.6v-.48h3.75v.48h-1.6v4.16h-.55zm2.87.73h.52v.9a1.5 1.5 0 0 1 1.44-1v.55a1.4 1.4 0 0 0-1.4 1.57v1.37h-.52l-.04-3.39zm2.5 2.15v-2.15h.52v2a.93.93 0 0 0 1 1 1 1 0 0 0 1.06-1.08v-2h.52v3.43h-.52v-.6a1.36 1.36 0 0 1-1.21.67A1.27 1.27 0 0 1 41.67 91zm3.76.84.26-.36a2.15 2.15 0 0 0 1.22.43c.43 0 .73-.21.73-.54 0-.35-.41-.48-.88-.61-.47-.13-1.16-.33-1.16-1 0-.59.5-1 1.2-1 .45.01.889.14 1.27.38l-.24.38a2.09 2.09 0 0 0-1-.33c-.41 0-.68.21-.68.5 0 .33.44.45.91.59.47.14 1.13.37 1.13 1 0 .65-.55 1-1.25 1a2.46 2.46 0 0 1-1.51-.44zm3.67-.47V89.3h-.5v-.45h.5v-1h.52v1h1.12v.45h-1.12v2c0 .42.24.57.59.57.18.002.359-.04.52-.12v.44a1.32 1.32 0 0 1-.64.15.88.88 0 0 1-.99-.97zm2.36.63.21-.24a.7.7 0 0 0 .47.19c.14 0 .23-.06.23-.15s-.06-.14-.32-.21c-.26-.07-.53-.17-.53-.48a.5.5 0 0 1 .56-.47.92.92 0 0 1 .59.2l-.18.26a.76.76 0 0 0-.42-.16c-.13 0-.2.07-.2.14 0 .1.07.14.34.21.27.07.5.2.5.47 0 .31-.24.49-.58.49a1 1 0 0 1-.67-.25ZM53 90.68h.37l.42.67.42-.67h.37v1.59h-.34v-1l-.45.68-.44-.67v1H53z'
                    fill='#FFF'
                  />
                </svg>
              </Link>
              <div
                className={css({
                  display: 'flex',
                  gap: 10,
                  flex: 1,
                  ml: 10,
                  maxW: '85%',
                })}
              >
                <div
                  className={css({
                    flex: 1,
                  })}
                >
                  <h2
                    className={css({
                      mb: 2,
                      color: 'text.invert',
                      textStyle: 'body',
                      fontWeight: 'bold',
                      transition: 'all 0.3s',
                      _hover: {color: '#f2a900'},
                    })}
                  >
                    <a href='https://www.bbb.org/all/consumer-resources'>For Consumers</a>
                  </h2>
                  <ul className='css-1ninmdd eyis8kt0'>
                    <li>
                      <a
                        href='https://www.bbb.org/all/change-browser-language'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Language Translation Information
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/search'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Search for a Business
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/get-a-quote'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Get a Quote
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/leave-a-review'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Start a Review
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/file-a-complaint'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        File a Complaint
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/scamtracker'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        BBB Scam Tracker
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://bbbprograms.org/programs/all-programs/bbb-autoline'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        File an Auto Warranty Complaint
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://signup.e2ma.net/signup/1900156/1902645'
                        target='_blank'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                        rel='noreferrer'
                      >
                        Sign up for Scam Alerts
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/all/faq'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Frequently Asked Questions (FAQ)
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/all/consumer-hq'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Consumer HQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className={css({
                    flex: 1,
                  })}
                >
                  <h2
                    className={css({
                      mb: 2,
                      color: 'text.invert',
                      textStyle: 'body',
                      fontWeight: 'bold',
                      transition: 'all 0.3s',
                      _hover: {color: '#f2a900'},
                    })}
                  >
                    <a href='https://www.bbb.org/all/business-resources'>For Businesses</a>
                  </h2>
                  <ul className='css-1ninmdd eyis8kt0'>
                    <li>
                      <a
                        href='https://www.bbb.org/search'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Search Business Profiles
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/get-accredited'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Get Accredited
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://bbbprograms.org/programs/bbb-privacy-shield'
                        target='_blank'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                        rel='noreferrer'
                      >
                        BBB EU Privacy Shield
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/get-listed'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Get Your Business Listed
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/partner-code-of-conduct'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Partner Code of Conduct
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/apply'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Apply for BBB Accreditation
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/all/your-business-hq'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Business HQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className={css({
                    flex: 1,
                  })}
                >
                  <h2
                    className={css({
                      mb: 2,
                      color: 'text.invert',
                      textStyle: 'body',
                      fontWeight: 'bold',
                      transition: 'all 0.3s',
                      _hover: {color: '#f2a900'},
                    })}
                  >
                    <a href='https://www.bbb.org/all/about-bbb'>About BBB®</a>
                  </h2>
                  <ul className='css-1ninmdd eyis8kt0'>
                    <li>
                      <a
                        href='https://www.bbb.org/mission-and-vision'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Mission &amp; Vision
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/bbb-directory'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        Directory of Local BBBs
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbb.org/local-bbb/international-association-of-better-business-bureaus'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                      >
                        International Association of Better Business Bureaus
                      </a>
                    </li>
                    <li>
                      <a
                        href='//www.bbbmarketplacetrust.org'
                        target='_blank'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                        rel='noreferrer'
                      >
                        BBB Institute for Marketplace Trust
                      </a>
                    </li>
                    <li>
                      <a
                        href='//www.bbb.org/all/employment'
                        target='_blank'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                        rel='noreferrer'
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href='//give.org'
                        target='_blank'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                        rel='noreferrer'
                      >
                        BBB Wise Giving Alliance (Give.org)
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bbbprograms.org'
                        target='_blank'
                        className={css({
                          color: 'text.invert',
                          textStyle: 'caption',
                          transition: 'all 0.3s',
                          _hover: {color: '#f2a900'},
                        })}
                        rel='noreferrer'
                      >
                        BBB National Programs
                      </a>
                    </li>
                  </ul>
                  <ul className={css({display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 4})}>
                    <li>
                      <a
                        href='https://www.facebook.com/BetterBusinessBureau'
                        target='_blank'
                        className={css({
                          display: 'block',
                          w: '32px',
                          h: '32px',
                          color: 'white',
                          _hover: {color: '#f2a900'},
                        })}
                        rel='noreferrer'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                          aria-hidden='true'
                          focusable='false'
                          height='100%'
                          width='100%'
                          className={css({fill: 'currentColor', transition: 'all 0.3s'})}
                        >
                          <path d='M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h98.2V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480h129c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z' />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://twitter.com/bbb_us'
                        target='_blank'
                        className={css({
                          display: 'block',
                          w: '32px',
                          h: '32px',
                          color: 'white',
                          _hover: {color: '#f2a900'},
                        })}
                        rel='noreferrer'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                          aria-hidden='true'
                          className={css({fill: 'currentColor', transition: 'all 0.3s'})}
                          focusable='false'
                          height='100%'
                          width='100%'
                        >
                          <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z' />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/company/better-business-bureau'
                        target='_blank'
                        className={css({
                          display: 'block',
                          w: '32px',
                          h: '32px',
                          color: 'white',
                          _hover: {color: '#f2a900'},
                        })}
                        rel='noreferrer'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                          aria-hidden='true'
                          focusable='false'
                          className={css({fill: 'currentColor', transition: 'all 0.3s'})}
                          height='100%'
                          width='100%'
                        >
                          <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9z' />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.youtube.com/channel/UC4pBnbGxCYs8R-NHXWbGWZw'
                        target='_blank'
                        className={css({
                          display: 'block',
                          w: '32px',
                          h: '32px',
                          color: 'white',
                          _hover: {color: '#f2a900'},
                        })}
                        rel='noreferrer'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                          aria-hidden='true'
                          focusable='false'
                          className={css({fill: 'currentColor', transition: 'all 0.3s'})}
                          height='100%'
                          width='100%'
                        >
                          <path d='m282 256.2-95.2-54.1v108.2zM384 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64m14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9-7.6-28.6-7.6-88.2-7.6-88.2s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4' />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css({
            background: 'primary',
            w: '100%',
            p: 4,
          })}
        >
          <div
            className={css({
              m: 'auto',
              h: '120px',
              display: 'flex',
              flex: 1,
              background: 'primary',
              w: '100%',
              maxW: '8xl',
            })}
          >
            <ul
              className={css({
                display: 'flex',
                flex: '0 0 50%',
              })}
            >
              <li
                className={css({
                  textStyle: 'body2',
                  color: 'text.invert',
                  textDecoration: 'underline',
                })}
              >
                <a href='https://www.bbb.org/terms-of-use'>Terms of Use</a>
                <span className={css({display: 'inline-block', mx: 1})}>|</span>
              </li>
              <li
                className={css({
                  textStyle: 'body2',
                  color: 'text.invert',
                  textDecoration: 'underline',
                })}
              >
                <a href='https://www.bbb.org/privacy-policy'>Privacy Policy</a>
                <span className={css({display: 'inline-block', mx: 1})}>|</span>
              </li>
              <li
                className={css({
                  textStyle: 'body2',
                  color: 'text.invert',
                  textDecoration: 'underline',
                })}
              >
                <a href='https://www.bbb.org/privacy-policy#your-ad-choices'>Your Ad Choices</a>
                <span className={css({display: 'inline-block', mx: 1})}>|</span>
              </li>
              <li
                className={css({
                  textStyle: 'body2',
                  color: 'text.invert',
                  textDecoration: 'underline',
                })}
              >
                <a href='https://www.bbb.org/trademarks'>Trademarks</a>
                <span className={css({display: 'inline-block', mx: 1})}>|</span>
              </li>
              <li
                className={css({
                  textStyle: 'body2',
                  color: 'text.invert',
                  textDecoration: 'underline',
                })}
              >
                <a href='https://www.bbb.org/hyperlinking'>Hyperlinking Policy</a>
              </li>
            </ul>
            <span
              className={css({
                textStyle: 'xl',
                color: 'text.invert',
              })}
            >
              © 2024, International Association of Better Business Bureaus, Inc., separately
              incorporated Better Business Bureau organizations in the US and Canada, and BBB
              Institute for Marketplace Trust, Inc. All rights reserved. *In Canada, trademark(s) of
              the International Association of Better Business Bureaus, used under License.
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
