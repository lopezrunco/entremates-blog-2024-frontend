import React from 'react';

import { contactData } from '../../data/contact';

import { IContactItemProps } from '../../interfaces/contactItem';

const ContactData: React.FC = () => {
    return (
        <React.Fragment>
            {contactData.map((el: IContactItemProps, i: number) => (
                <a key={i} className="box" href={el.link} target="_blank" rel="noreferrer" aria-label={el.title}>
                    <div>
                        {el.icon}
                        <p>{el.title}</p>
                    </div>
                </a>
            ))}
        </React.Fragment>
    );
};

export default ContactData;
