import {  Box, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { DonateOverview } from "../components/DonateOverview";
import styled from "styled-components";
const LineText = styled.span`
  position: relative;
  //color: #000000;

  line-height: 1;
  @media (max-width: 600px) {
    font-size:20px
  }
  @media (min-width: 601px) {
    font-size:28px
  }
  &::after {
    content: "";
    position: absolute;
    background-color: transparent;
    top: 0px;
    left: 20px;
    right: 5px;
    bottom: 10px;
    background-image: url(/images/Vector.png);
    background-repeat: no-repeat;
    background-size: 105%;
    opacity: 1; 
    z-index: -1; 
    
    @media (max-width: 600px) {
      transform: translateY(95%); 
    }
    @media (min-width: 601px) {
      transform: translateY(75%);
    }
  }
`;
const LineTextt = styled.span`
  position: relative;
  //color: #000000;

  line-height: 1;
  @media (max-width: 600px) {
    font-size:20px
  }
  @media (min-width: 601px) {
    font-size:28px
  }
  &::after {
    content: "";
    position: absolute;
    background-color: transparent;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-image: url(/images/Vector.png);
    background-repeat: no-repeat;
    background-size: 105%;
    opacity: 1; 
    z-index: -1; 
    
    @media (max-width: 600px) {
      transform: translateY(70%); 
    }
    @media (min-width: 601px) {
      transform: translateY(65%); /* 调整图像位置 */
    }
  }
`;

export function SectionClient() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);



    const donateData = [
        {
            avatarSrc: "/test/lxdao-logo.svg",
            name: "LXDAO",
            website: "lxdao.io",
            description: "LXDAO is an R&D-focused DAO in Web3",
            donationCount: 68,
            avatarSrcArray: [
                '/test/bruce.png',
                '/test/daodao.png',
                '/test/muxin.png',
                '/test/ache.png',
                '/test/1998.png',
                '/test/themonkey.png'
            ]
        },
        {
            avatarSrc: "/test/marry3-logo-rect.png",
            name: "marry3",
            website: "marry3.love",
            description: "Witness your Love in Web3 and get the Soulbound NFT Certificate on the chain",
            donationCount: 150,
            avatarSrcArray: [
                '/test/daodao.png',
                '/test/yoo.png',
                '/test/nextdao.png',
                '/test/kenlabs.png',
                '/test/dotbit.png',
                '/test/mail3.png'
            ]
        },
        // Add one more data entry as needed
        {
            avatarSrc: "/test/mail3.png",
            name: "mail3",
            website: "mail3.me",
            description: "Web3 natives deserve a better mail",
            donationCount: 75,
            avatarSrcArray: [
                '/test/mixin.png',
                '/test/dotbit.png',
                '/test/bruce.png',
                '/test/GangsDAO.png',
                '/test/MetaverseSpace.png',
                '/test/MetaBank.png'
            ]
        }
    ];


    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'column' },
                justifyContent: { xs: 'center', lg: 'center' },
                alignItems: 'center',
                minHeight: { xs: '100vh', md: 'calc(100vh )' },
            }}
        >


            <Typography
                variant="h1"
                sx={{
                    fontWeight: 800,
                    fontSize: { xs: '30px', sm: '54px', md: '56px' },
                    lineHeight: { xs: '32px', md: '64px' },
                    color: '#0F172A',
                    textAlign: { xs: 'center', lg: 'center' },
                    mt: { xs: '30px', lg: '86' },
                    mb: { xs: '30px', lg: '61px' },
                }}
            >
                Use cases

            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '100%', maxHeight: '100%', flexDirection: { xs: 'column', lg: 'row' }, }}>
                {/*  <Box>
                    <img src="/client.png" alt="Left Image"/>
                </Box>*/}
                <Box
                    component="img"
                    src="/images/client.png"
                    sx={{
                        width: { xs: '300px', sm: '420px', md: '510px' },
                        height: { xs: '300px', sm: '420px', md: '510px' },
                    }}
                />

                <Box sx={{ width: "65px" }} />
                <Box sx={{ display: 'flex',alignItems: 'center', maxWidth: '100%', maxHeight: '100%' }}>
                    <Box ml={2}>
                        <Typography variant="h3" sx={{
                            fontWeight: 700,
                            fontSize: { xs: '20px', sm: '20px', md: '28px' },
                            lineHeight: { xs: '37px', md: '37px' },
                            padding: { xs: '10px', sm: '30px', md: 0 },
                            color: '#0F172A',
                            textAlign: { xs: 'center  ', lg: 'left' },
                            mt: { xs: '30px', lg: '0' },
                            mb: { xs: '30px', lg: '23px' },
                        }}>Get funded as <LineText>public goods</LineText></Typography>
                        <Typography variant="subtitle1"
                            sx={{
                                fontWeight: 400,
                                fontSize: { xs: '20px', sm: '20px', md: '20px' },
                                lineHeight: { xs: '36px', md: '36px' },
                                color: '#334155',
                                textAlign: { xs: 'left ', lg: 'left' },
                                maxWidth: { xs: '100%', sm: '680px' },
                                mt: { xs: '30px', lg: '23' },
                            }}>
                            In the real world, public goods like trees, museums, and parks are supported by governments
                            or public agencies, enhancing the beauty and charm of a city. However, in the web3 world, we
                            encounter numerous public goods that bring us joy but lack an equivalent role of government
                            or public agency to sustain and support them.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Typography
                variant="h1"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: '25px', sm: '28px', md: '28px' },
                    lineHeight: { xs: '30px', md: '56px' },
                    padding: { xs: '10px', sm: '30px', md: 0 },
                    color: '#000000',
                    textAlign: { xs: 'center', lg: 'center' },
                    //maxWidth: {xs: '100%', sm: '400px',lg:'600px'},
                    mt: { xs: '30px', lg: '119px' },
                }}
            >
                Get supported as <LineTextt>creators</LineTextt>
            </Typography>

            <Box sx={{
                display: 'flex',
                mt: { xs: '30px', lg: '105px' },
                mb: { xs: '30px', lg: '139px' },
                alignItems: 'center',

                flexDirection: { xs: 'column', lg: 'row' },
                //margin:'37px'
            }}>

                {donateData.map((data, index) => (
                    <DonateOverview key={index} data={data} />
                ))}

            </Box>


        </Box>

    );
};

