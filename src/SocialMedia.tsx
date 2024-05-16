import React, { useState } from 'react';

const SocialMedia = () => {
    const socialMedia = [
        {
            number: 'one',
            name: 'instagram',
            svg: 'svg/symbol-defs.svg#icon-instagram',
            url: 'https://www.instagram.com'
        },
        {
            number: 'two',
            name: 'linkedin',
            svg: 'svg/symbol-defs.svg#icon-linkedin',
            url: 'https://www.linkedin.com'
        },
        {
            number: 'three',
            name: 'gmail',
            svg: 'svg/symbol-defs.svg#icon-gmail',
            url: 'mailto:example@gmail.com'
        },
        {
            number: 'four',
            name: 'github',
            svg: 'svg/symbol-defs.svg#icon-github',
            url: 'https://github.com'
        },
        {
            number: 'five',
            name: 'whatsapp',
            svg: 'svg/symbol-defs.svg#icon-whatsapp',
            url: 'https://api.whatsapp.com/send?text=Check%20out%20this%20cool%20link:%20https://example.com'
        }
    ]

    const openURL = (url) => {
        return (
            window.open(url, '_blank')
        )
    }
    return (
        <div className="main">
                    Share
            {socialMedia.map(item => (
                <li key={item.number} className={`${item.number} el`} onClick={() => openURL(item.url)}>
                    <svg className={`${item.name}-icon`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <use xlinkHref={`${item.svg}`}></use>
                    </svg>
                </li>
            ))}
            </div>
    );
};

export default SocialMedia;
