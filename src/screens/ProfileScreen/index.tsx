import React from 'react';
import GitHub from '../../../assets/github.svg'
import Linkedin from '../../../assets/linkedin.svg'
import { Linking } from 'react-native';

import {
    Container,
    Avatar,
    WelcomeTitle,
    SocialButton,
    SocialButtonTitle
} from './styles';

export function ProfileScreen() {

    const handleOpenSocialMedia = async (site?: String) => {
        if (site === 'GitHub') {
            const url = 'https://github.com/samubts';
            await Linking.openURL(url);
        }
        else if (site === 'LinkedIn') {
            const url = 'https://www.linkedin.com/in/samuel-batista-a6ba4b226/';
            await Linking.openURL(url);
        }
    }

    return (
        <Container>
            <Avatar source={{
                uri: 'https://avatars.githubusercontent.com/u/95485551?u=e5dada13935d8bb4f3767b151f8d00d051720277&v=4',
            }} />
            <WelcomeTitle>Samuel Batista</WelcomeTitle>
            <SocialButton onPress={() => handleOpenSocialMedia('GitHub')}>
                <GitHub width={24} />
                <SocialButtonTitle>Ver GitHub</SocialButtonTitle>
            </SocialButton>
            <SocialButton onPress={() => handleOpenSocialMedia('LinkedIn')}>
                <Linkedin width={24} />
                <SocialButtonTitle>Ver LinkedIn</SocialButtonTitle>
            </SocialButton>
        </Container>
    );
}