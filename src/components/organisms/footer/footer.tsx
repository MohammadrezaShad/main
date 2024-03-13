import {css} from '@styled/css';

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
            h: '320px',
          })}
        />
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
            })}
          >
            <ul
              className={css({
                display: 'flex',
                gap: 2,
                flex: '0 0 50%',
              })}
            >
              <li className={css({textStyle: 'body2', color: 'text.invert'})}>
                <a href='https://www.bbb.org/terms-of-use'>Terms of Use</a>
              </li>
              <li>
                <a href='https://www.bbb.org/privacy-policy'>Privacy Policy</a>
              </li>
              <li>
                <a href='https://www.bbb.org/privacy-policy#your-ad-choices'>Your Ad Choices</a>
              </li>
              <li>
                <a href='https://www.bbb.org/trademarks'>Trademarks</a>
              </li>
              <li>
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
