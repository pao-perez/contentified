import { StaticImage } from "gatsby-plugin-image";
import React from 'react';

const Avatar = () => (
    <>
        <StaticImage
            src="../images/128x128.png"
            alt="Avatar"
            placeholder="blurred"
            layout="fixed"
            width={128}
            height={128}
        />
    </>
);

export default Avatar;
