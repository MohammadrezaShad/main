import {css} from '@styled/css';

export default function HomeSection() {
  return (
    <div className='stack css-1xpfu7h esji3j80'>
      <section className={css({maxW: '8xl', m: 'auto', w: '100%', py: 10})}>
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            mb: 3,
          })}
        >
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            })}
          >
            <h2 className={css({textStyle: 'subtitle1', fontWeight: 'normal'})}>
              Latest Business Information
            </h2>
            <span className={css({textStyle: 'body', fontWeight: 'bold'})}>
              Business news for Canada
            </span>
          </div>
          <a href='https://www.bbb.org/us/news/business' className='dtm-view-all'>
            View All
          </a>
        </div>
        <ul className={css({display: 'flex', justifyContent: 'space-between', gap: 8})}>
          <li
            className={css({
              flex: '0 1 33.33%',
              minW: '0',
              maxW: '100%',
              background: 'white',
              boxShadow: 'lg',
              padding: 2,
            })}
          >
            <div style={{cursor: 'pointer', height: '100%'}} className='css-n8vred e1ri33r70'>
              <div className={css({display: 'flex', aspectRatio: '16/9', overflow: 'hidden'})}>
                <img
                  alt='Book stack in the library room and blurred bookshelf, business and education background'
                  loading='lazy'
                  src='https://m.bbb.org/prod/corecmsimages/2024/7f063882-07c4-4c0f-89a5-6bfafc59ca15.jpg?tx=w_354'
                  srcSet='https://m.bbb.org/prod/corecmsimages/2024/7f063882-07c4-4c0f-89a5-6bfafc59ca15.jpg?tx=w_354,dpr_2.0 2x'
                  className={css({w: '100%'})}
                />
              </div>
              <div className='css-1kglb3g e1e33tmu0'>
                <h3
                  className={css({
                    p: 3,
                    textStyle: 'body',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  })}
                >
                  <a href='https://www.bbb.org/article/news-releases/30007-bbb-accredited-businesses-invited-to-next-leadership-learning-session-featuring-dr-luana-marques'>
                    BBB Accredited Businesses invited to next Leadership Learning session featuring
                    Dr. Luana Marques
                  </a>
                </h3>
              </div>
            </div>
          </li>
          <li
            className={css({
              flex: '0 1 33.33%',
              minW: '0',
              maxW: '100%',
              background: 'white',
              boxShadow: 'lg',
              padding: 2,
            })}
          >
            <div style={{cursor: 'pointer', height: '100%'}} className='css-n8vred e1ri33r70'>
              <div className={css({display: 'flex', aspectRatio: '16/9', overflow: 'hidden'})}>
                <img
                  alt='Tax papers on a desk'
                  loading='lazy'
                  src='https://m.bbb.org/prod/corecmsimages/d45247af-39bb-4567-918f-ded270cc9c63.jpg?tx=w_354'
                  srcSet='https://m.bbb.org/prod/corecmsimages/d45247af-39bb-4567-918f-ded270cc9c63.jpg?tx=w_354,dpr_2.0 2x'
                  className={css({w: '100%'})}
                />
              </div>
              <div className='css-1kglb3g e1e33tmu0'>
                <h3
                  className={css({
                    p: 3,
                    textStyle: 'body',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  })}
                >
                  <a href='https://www.bbb.org/article/business/23531-bbb-business-tip-getting-your-business-ready-for-tax-season'>
                    BBB Business Tip: Getting your business ready for tax season
                  </a>
                </h3>
              </div>
            </div>
          </li>
          <li
            className={css({
              flex: '0 1 33.33%',
              minW: '0',
              maxW: '100%',
              background: 'white',
              boxShadow: 'lg',
              padding: 2,
            })}
          >
            <div style={{cursor: 'pointer', height: '100%'}} className='css-n8vred e1ri33r70'>
              <div className={css({display: 'flex', aspectRatio: '16/9', overflow: 'hidden'})}>
                <img
                  alt='Hand uses a tablet to point out a peak on a line graph.'
                  loading='lazy'
                  src='https://m.bbb.org/prod/corecmsimages/2023/5b6e97be-1a05-4580-b0d3-732d96e1a00c.jpg?tx=w_354'
                  srcSet='https://m.bbb.org/prod/corecmsimages/2023/5b6e97be-1a05-4580-b0d3-732d96e1a00c.jpg?tx=w_354,dpr_2.0 2x'
                  className={css({w: '100%'})}
                />
              </div>
              <div>
                <h3
                  className={css({
                    p: 3,
                    textStyle: 'body',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  })}
                >
                  <a href='https://www.bbb.org/article/business/28420-bbb-business-tip-ai-for-small-business-where-to-start'>
                    BBB Business Tip: AI for small business. Where to start?
                  </a>
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
