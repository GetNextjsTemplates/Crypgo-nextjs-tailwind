import React, { FC } from 'react'
import Link from 'next/link'
import { headerData } from '../Header/Navigation/menuData'
import { footerlabels } from '@/app/api/data'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'

const Footer: FC = () => {
  return (
    <footer className='pt-16 bg-darkmode'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-11 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16'>
          <div className='lg:col-span-4 md:col-span-6 col-span-6 flex flex-col gap-6'>
            <Logo />
            <p className='text-white/60'>Transform your crypto business with Crypgo Framer, a template for startups and blockchain services.</p>
            <div className='flex gap-6 items-center relative z-1'>
              <Link href='https://www.facebook.com/' className='group'>
                <Icon
                  icon='fa6-brands:facebook-f'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary'
                />
              </Link>
              <Link href='https://www.instagram.com/' className='group'>
                <Icon
                  icon='fa6-brands:instagram'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary'
                />
              </Link>
              <Link href='https://www.twitter.com/' className='group'>
                <Icon
                  icon='fa6-brands:x-twitter'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary'
                />
              </Link>
            </div>
          </div>
          <div className='lg:col-span-2 md:col-span-3 col-span-6'>
            <h4 className='text-white mb-4 font-medium text-24'>Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className='pb-4'>
                  <Link
                    href={item.href}
                    className='text-white/60 hover:text-primary text-17'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:col-span-2 md:col-span-3 col-span-6'>
            <h4 className='text-white mb-4 font-medium text-24'>Other Pages</h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className='pb-4'>
                  <Link
                    href={item.herf}
                    className='text-white/60 hover:text-primary text-17'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:col-span-3 md:col-span-4 col-span-6'>
            <h3 className='text-white text-24 font-medium mb-4'>Download app</h3>
            <div className='flex flex-col gap-4'>
              <Link href={"https://www.google.com/"}><Image src={"/images/footer/app-store-bedge.svg"} alt='play-store-bedge' width={126} height={23} /></Link>
              <Link href={"https://www.apple.com/"}><Image src={"/images/footer/app-store.svg"} alt='play-store-bedge' width={126} height={23} /></Link>
            </div>
          </div>
        </div>
        <p className='text-white/40 text-center py-8 border-t border-white/20'>Design & Develop by <Link className='hover:text-primary' href={"https://getnextjstemplates.com/"}>GetNextjsTemplates.com</Link></p>
      </div>
    </footer>
  )
}

export default Footer
