import React from 'react'
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
// Aos 
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function footer() {
    return (

        <Footer >
            <div className="w-full px-5 sm:px-10" >
                <div className="w-full gap-10 px-4 py-6 sm:flex sm:items-center" >
                    <div className='flex flex-row gap-4'>
                        <img src="img/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbase</span>
                    </div>
                    <p className='text-sm text-gray-500 dark:text-gray-300'>Webflow Designer Resources</p>

                    <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
                        <FooterIcon href="#" icon={BsFacebook} />
                        <FooterIcon href="#" icon={BsInstagram} />
                        <FooterIcon href="#" icon={BsTwitter} />
                        <FooterIcon href="#" icon={BsGithub} />
                        <FooterIcon href="#" icon={BsDribbble} />
                    </div>
                </div>
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <FooterTitle title="Explore" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">All Components</FooterLink>
                            <FooterLink href="#">Wireframes</FooterLink>
                            <FooterLink href="#">Illustrations</FooterLink>
                            <FooterLink href="#">UI Elements</FooterLink>
                            <FooterLink href="#">Boosters</FooterLink>
                            <FooterLink href="#">IllusTemplatestrations</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="Resources" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">Blogs</FooterLink>
                            <FooterLink href="#">Integrations</FooterLink>
                            <FooterLink href="#">Press</FooterLink>
                            <FooterLink href="#">Support Center</FooterLink>
                            <FooterLink href="#">What's New</FooterLink>
                            <FooterLink href="#">Join Discord</FooterLink>
                            
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="Store" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">Club Subscription</FooterLink>
                            <FooterLink href="#">Licensing</FooterLink>
                            <FooterLink href="#">Premium Templates</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="Company" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Brand Center</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                        </FooterLinkGroup>
                    </div>
                </div>
                <div className='flex flex-row gap-10 sm:justify-between'>
                    <FooterCopyright href="#" by="Flowbase" year={2022} />
                    <p className='text-sm text-gray-500 dark:text-gray-300'>Powered by @webflow</p>
                </div>
            </div>
        </Footer>
    )
}
