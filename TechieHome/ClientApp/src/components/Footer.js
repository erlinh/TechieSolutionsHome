import React, { Component } from 'react';
import imgGithub32 from '../static/github_32px.png';

export class Footer extends Component {


    render() {
        return (
            <footer className="bg-white">
                <div className="container mx-auto px-8">

                    <div className="w-full flex flex-col md:flex-row py-6">

                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Yhteystiedot</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <div className="no-underline hover:underline text-gray-800 hover:text-orange-500"><a href="tel:+358407370923">Puhelin: +358407370923</a></div>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <div className="no-underline hover:underline text-gray-800 hover:text-orange-500"><a href="mailto:info@techie.fi">Sähköposti: info@techie.fi</a></div>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <div className="no-underline hover:underline text-gray-800 hover:text-orange-500"><a href="https://api.whatsapp.com/send?phone=358407370923">Pikaviestintä: WhatsApp</a></div>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <div className="no-underline hover:underline text-gray-800 hover:text-orange-500"><a href="https://github.com/erlinh/TechieSolutionsHome">Haarauma tämä sivu! <img src={imgGithub32} height="32" width="32" alt="Github Logo" /></a></div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Techie Solutions Oy</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <div className="no-underline hover:underline text-gray-800 hover:text-orange-500">Saturnuksentie 13 B 2</div>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <div className="no-underline hover:underline text-gray-800 hover:text-orange-500">00750 Helsinki</div>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <div className="no-underline hover:underline text-gray-800 hover:text-orange-500">Y-tunnus : 3182231-4</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}
