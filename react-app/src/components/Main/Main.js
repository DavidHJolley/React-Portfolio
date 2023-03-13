import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CardElement from '../Card/Card'
import Contact from '../Contact/Contact'

function Main() {
    return (
      <main id='main'>
        <div className='container'>
            <div className='row'>
                <CardElement
                    title='Project 1'
                    image='https://picsum.photos/id/1/300/200'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium aliquet sem a maximus.'
                    link='#'
                />
                <CardElement
                    title='Project 2'
                    image='https://picsum.photos/id/1/300/200'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium aliquet sem a maximus.'
                    link='#'
                />
                <CardElement
                    title='Project 3'
                    image='https://picsum.photos/id/1/300/200'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium aliquet sem a maximus.'
                    link='#'
                />
            </div>
            <div className='row'>
                <CardElement
                    title='Project 4'
                    image='https://picsum.photos/id/1/300/200'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium aliquet sem a maximus.'
                    link='#'
                />
                <CardElement
                    title='Project 5'
                    image='https://picsum.photos/id/1/300/200'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium aliquet sem a maximus.'
                    link='#'
                />
                <CardElement
                    title='Project 6'
                    image='https://picsum.photos/id/1/300/200'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium aliquet sem a maximus.'
                    link='#'
                />
            </div>
        </div>
        <Contact
            name='David Jolley'
            email = 'Davidhjolley2000@gmail.com'
        ></Contact>
      </main>
    );
  }

export default Main;