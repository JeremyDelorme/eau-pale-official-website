import React from 'react';

export interface IContactPageProps { }

const ContactPage: React.FunctionComponent<IContactPageProps> = props => {
    return <div>
        <h1>Contact</h1>
        <div className='contact-div'>
            Jérémy Delorme <br />
            Fraenkelufer 42 <br />
            10999 Berlin <br />
            Deutschland <br />
            <br />
        </div>
    </div>;
};

export default ContactPage;
