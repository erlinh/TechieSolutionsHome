import React, { Component } from 'react';
import api from '../api/apiBase';
import imgTechie from '../static/techie_logo.png';

export class Contact extends Component {
    static displayName = Contact.name;

    constructor(props) {
        super(props);

        this.state = {
            messageSent: false,
            error: false,
            email: '',
            message: ''
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    submitMessage(e) {
        e.preventDefault();
        api.post('contact', { email: this.state.email, message: this.state.message })
            .then((res) => {
                this.setState({
                    email: '',
                    message: '',
                    messageSent: true,
                    error: false
                });
            }).catch(error => {
                this.setState({
                    email: '',
                    message: '',
                    messageSent: false,
                    error: true
                });
            });
    }


    render() {
        return (
            <>
                <div className="pt-24">

                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                            <p className="uppercase tracking-loose w-full">L&auml;het&auml; meille viesti</p>
                            <form className="grid grid-cols-6 gap-6 w-full" onSubmit={e => this.submitMessage(e)}>
                                <div className="col-span-12 sm:col-span-6">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">S&auml;hk&ouml;postiosoite:</label>
                                    <input value={this.state.email} type="email" onChange={e => this.setState({ email: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black" placeholder="you@example.com" name="email" id="email" required="" />
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Viesti:</label>
                                    <textarea value={this.state.message} onChange={e => this.setState({ message: e.target.value })} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 mt-1 block w-full sm:text-sm border-gray-300 rounded-md text-black" placeholder="Miss&auml; tarvitset apua?" rows="5" name="message" id="message" required="" spellCheck="false"></textarea>
                                </div>

                                <div className="col-span-12 sm:col-span-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">L&auml;hett&auml;&auml;</button>
                                </div>
                            </form>
                            <div className={`bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 mt-5 py-3`} style={{ display: `${this.state.messageSent ? 'grid' : 'none'}` }} role="alert">
                                <p className="font-bold">Viesti l&auml;hetetty!</p>
                                <p className="text-sm">Otamme sinuun yhteytt&auml; mahdollisimman pian!</p>
                            </div>
                            <div className={`bg-red-100 border-t border-b border-red-500 text-red-700 px-4 mt-5 py-3`} style={{ display: `${this.state.error ? 'grid' : 'none'}` }} role="alert">
                                <p className="font-bold">Oops!</p>
                                <p className="text-sm">Jotain meni pieleen!</p>
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 py-6 text-center">
                            <img className="w-full md:w-4/5 z-50" src={imgTechie} alt="Techie Solutions Oy Logo" />
                        </div>
                    </div>

                </div>


                <div className="relative -mt-12 lg:-mt-24">
                    <svg viewBox="0 0 1428 174" version="1.1">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                                <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                            </g>
                            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </>
        );
    }
}
