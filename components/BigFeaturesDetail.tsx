import React, {useState} from 'react';
import {Box, Typography} from '@mui/material';

export function BigFeaturesDetail({data}: { data: { iconSrc: string, title: string, description: string } }) {
    const {iconSrc, title, description} = data;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Box
            sx={{
                width: {xs:'318px' , sm:'318px' , md:'600px'},
                height: {xs:'400px' , sm:'400px' , md:'340px'},
                background: '#272e3f',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
               // justifyContent: 'center',
                borderRadius: '3%',
                paddingLeft: '32px',
                position: 'relative', // Added for absolute positioning of pseudo-element
                margin:{xs:'20px',lg:'0px'}
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Add pseudo-element for the border animation */}
            {isHovered && (
                <div
                    className="border-animation"
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        borderRadius: '3%',
                    }}
                />
            )}
            <Box
                component='img'
                src={iconSrc}
                alt="Icon"
                sx={{
                    width: '48px',
                    height: '48px',
                    mt: '43px',
                    marginLeft:{xs: '13px', lg: '13px'},
                }}
            />

            {/*<img src={iconSrc} alt="Icon" style={{width: '48px', height: '48px'}}/>*/}

            <Typography
                variant="h3"
                sx={{
                    fontWeight: 600,
                    fontSize: {xs: '24px', sm: '24px', md: '28px'},
                    lineHeight: {xs: '36px', md: '36px'},
                    color: '#FFFFFF',
                    textAlign: {xs: 'left', lg: 'left'},
                    mt: {xs: '30px', lg: '38px'},
                }}
            >
                {title}
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    fontWeight: 400,
                    fontSize: {xs: '20px', sm: '20px', md: '20px'},
                    lineHeight: {xs: '30px', md: '36px'},
                    color: '#FFFFFF',
                    textAlign: {xs: 'left', lg: 'left'},
                    maxWidth: {xs: '270px',sm:'270px', md: '537px'},
                    mt: {xs: '15px', lg: '20px'},
                }}
            >
                {description}
            </Typography>

            {/* Add styles for the border animation */}
            <style jsx>{`
              .border-animation {
                animation-name: borderGrow;
                animation-duration: 100ms;
                animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                animation-fill-mode: forwards;
                position: relative;
              }

              @keyframes borderGrow {
                0% {
                  border-top: 2px solid #ccff00;
                  border-right: none;
                  border-bottom: none;
                  border-left: none;
                }10% {
                  border-top: 2px solid #ccff00;
                  border-right: none;
                  border-bottom: none;
                  border-left: none;
                  
                }
                25% {
                  border-top: 2px solid #ccff00;
                  border-right: 2px solid #ccff00;
                  border-bottom: none;
                  border-left: none;
                }
                50% {
                  border-top: 2px solid #ccff00;
                  border-right: 2px solid #ccff00;
                  border-bottom: 2px solid #ccff00;
                  border-left: none;
                }
                75% {
                  border-top: 2px solid #ccff00;
                  border-right: 2px solid #ccff00;
                  border-bottom: 2px solid #ccff00;
                  border-left: 2px solid #ccff00;
                }
                100% {
                  border: 2px solid #ccff00;
                }
              }

            `}</style>
        </Box>
    );
}