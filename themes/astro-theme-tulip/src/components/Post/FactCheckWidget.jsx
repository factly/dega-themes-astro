/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// converted
import React, { useEffect, useRef, useState } from 'react'; // eslint-disable-line no-unused-vars
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import parseEditorJsData from '@utils/parseEditorJsData';
/**
 * TODO: Change PLaceholder Img to color
 * TODO: Add resize observer
 * TODO: Add fontsizes to other elements
 * TODO: Disabling the buttons for first and last buttons
 * TODO: Fix the resize issue on canvas for basic widget
 */

const FactCheckWidget = ({ claims }) => {
  const sliderElement = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const [disable, setDisable] = useState({ left: false, right: false });
  const CLAIM_RATING = {
    false: `#e53e3e`,
    true: `#38a169`,
    misleading: `#718096`,
    unverified: `#d69e2e`,
    'partly-true': `#8eb307`,
  };
  const handleNextClick = async () => {
    sliderElement.current.scrollLeft += scrollWidth;
  };

  const handlePrevClick = () => {
    sliderElement.current.scrollLeft -= scrollWidth;
  };

  useEffect(() => {
    if (!sliderElement.current) return;

    if (sliderElement.current.childElementCount <= 1) {
      setDisable({ left: true, right: true });
      sliderElement.current.style = { 'overflow-x': 'unset' };
      return;
    }

    const maxScroll = Math.round(
      sliderElement.current.children[1].getBoundingClientRect().x -
        sliderElement.current.firstElementChild.getBoundingClientRect().x,
    );
    setScrollWidth(maxScroll);
  }, []);
  /* 
  useEffect(()=>{
    if(!sliderElement.current) return;
    if(sliderElement.current.firstElementChild.getBoundingClientRect().x-num>=0) {
      setDisable({left:true})
    }
    if(sliderElement.current.lastElementChild.getBoundingClientRect().x-num<=0) {
      setDisable({right:true})
    }
  },[sliderElement.current ]) */

  return (
    <div
      sx={{
        width: ['full', null, null, '3/4'],
        mx: 'auto',
        fontSize: (theme) => `${theme.fontSizes.body}`,
        mb: (theme) => `${theme.space.spacing5}`,
      }}
      className='w-full lg:w-3/4 mx-auto text-body mb-4'
    >
      {claims.length >= 1 && (
        <React.Fragment>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              pt: (theme) => `${theme.space.spacing6}`,
              pb: (theme) => `${theme.space.spacing3}`,
            }}
            className='flex flex-row items-center justify-between pt-8 pb-2'
          >
            <button
              type="button"
              onClick={handlePrevClick}
              href-id="claim-1"
              disabled={disable.left}
              sx={{
                borderWidth: '1px',
                borderColor: (theme) => `${theme.colors.borderPrimary}`,
                borderRadius: 'default',
                textAlign: 'left',
                fontSize: (theme) => `${theme.fontSizes.h6}`,
                p: (theme) => `${theme.space.spacing3}`,
                '&:focus': { outline: 'none' },
                cursor: disable.left ? 'not-allowed' : 'pointer',
                opacity: disable.left ? 0.5 : null,
              }}
              className={`border-[1px] border-borderPrimary rounded-default text-left text-h6 p-2 focus:outline-none cursor-pointer ${disable.left ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <FaChevronLeft sx={{ fill: 'currentColor', width: 4, height: 4 }} className='w-1 h-1 fill-current' />
            </button>
            <h2
              sx={{
                width: 'full',
                py: (theme) => `${theme.space.spacing3}`,
                textAlign: 'center',
                fontFamily: (theme) => `${theme.fonts.metropolis}`,
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
              className='w-full py-2 text-center font-metropolis uppercase font-bold'
            >
              List of claims
            </h2>
            <button
              type="button"
              onClick={handleNextClick}
              href-id="claim-1"
              disabled={disable.right}
              sx={{
                borderWidth: '1px',
                borderColor: (theme) => `${theme.colors.borderPrimary}`,
                borderRadius: 'default',
                textAlign: 'left',
                fontSize: (theme) => `${theme.fontSizes.h6}`,
                p: (theme) => `${theme.space.spacing3}`,
                '&:focus': { outline: 'none' },
                cursor: disable.right ? 'not-allowed' : 'pointer',
                opacity: disable.right ? 0.5 : null,
              }}
              className={`border-[1px] border-borderPrimary rounded-default text-left text-h6 p-2 focus:outline-none cursor-pointer ${disable.right ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <FaChevronRight sx={{ fill: 'currentColor', width: 4, height: 4 }} className='w-1 h-1 fill-current' />
            </button>
          </div>
          <div
            ref={sliderElement}
            sx={{ display: 'flex', overflowX: 'auto', pb: (theme) => `${theme.space.spacing6}` }}
            className='sliderF flex overflow-x-auto pb-8'
          >
            {claims.map((claim, i) => (
              <div
                id={`claim-${i}`}
                key={i}
                sx={{
                  display: 'inline-block',
                  flex: 'none',
                  width: 'full',
                  scrollSnapAlign: 'start',
                }}
                className='inline-block flex-none w-full snap-start'
              >
                <div
                  sx={{
                    width: 'full',
                    display: 'flex',
                    flexDirection: 'column',
                    borderWidth: '1px',
                    boxShadow: 'lg',
                  }}
                  className='w-full flex flex-col border-[1px] shadow-lg'
                >
                  <div
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    className='flex justify-between items-center'
                  >
                    <div
                      sx={{
                        display: 'flex',
                        p: (theme) => `${theme.space.spacing5}`,
                        alignItems: 'baseline',
                      }}
                      className='flex p-4 items-baseline'
                    >
                      <h2 sx={{ fontWeight: 'bold', mr: (theme) => `${theme.space.spacing3}` }} className='font-bold mr-2'>
                        Claimant:{' '}
                      </h2>
                      {claim.claimant.name}
                    </div>
                  </div>
                  <div
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      p: (theme) => `${theme.space.spacing5}`,
                      color: (theme) => `${theme.colors.textLight}`,
                      bg: CLAIM_RATING[claim.rating.slug],
                    }}
                    className={`flex flex-col p-4 text-textLight bg-[${CLAIM_RATING[claim.rating.slug]}]`}
                  >
                    <h2 sx={{ fontWeight: 'bold', py: (theme) => `${theme.space.spacing3}` }} className='font-bold' py-2>
                      Claim:{' '}
                    </h2>
                    <div className="parsed flex" sx={{ display: 'flex' }}>
                      {claim.claim}
                      {claim.rating.medium && (
                        <img
                          src={claim.rating.medium?.url.proxy}
                          alt={claim.rating.medium?.alt_text}
                          //onError={addDefaultSrc}
                          sx={{
                            width: '1/6',
                            height: 'full',
                            m: (theme) => `${theme.space.spacing3}`,
                            borderTopLeftRadius: 'default',
                            borderTopRightRadius: 'default',
                          }}
                          className='w-1/6 h-full m-2 rounded-t-default'
                        />
                      )}
                    </div>
                  </div>
                  <div
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      p: (theme) => `${theme.space.spacing5}`,
                      borderBottomWidth: '1px',
                    }}
                    className='flex flex-col p-4 border-b-[1px]'
                  >
                    <h2 sx={{ fontWeight: 'bold' }} className='font-bold'>Fact: </h2>

                    <div className="parsed">
                      <p dangerouslySetInnerHTML={{ __html: claim.fact }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default FactCheckWidget;
