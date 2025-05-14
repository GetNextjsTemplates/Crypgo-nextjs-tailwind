import React from 'react'
import Hero from '@/components/Home/Hero'
import Work from '@/components/Home/work'
import TimeLine from '@/components/Home/timeline'
import Platform from '@/components/Home/platform'
import Portfolio from '@/components/Home/portfolio'
import Upgrade from '@/components/Home/upgrade'
import Perks from '@/components/Home/perks'
import { Metadata } from 'next'
import BrandLogo from '@/components/Home/BrandLogo'
import GlobalReach from '@/components/Home/GlobalReach'
import Faq from '@/components/Home/Faq'
export const metadata: Metadata = {
  title: 'CrypGo',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <GlobalReach/>
      <TimeLine />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
      <Faq/>
    </main>
  )
}
