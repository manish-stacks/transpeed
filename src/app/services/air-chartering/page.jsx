import CharteringHero from '@/components/air-chartering/CharteringHero'
import CustomizedAirChartering from '@/components/air-chartering/CustomizedAirChartering'
import HowItWork from '@/components/air-chartering/HowItWork'
import UseCase from '@/components/air-chartering/UseCase'
import WhyChoose from '@/components/air-chartering/WhyChoose'
import React from 'react'

export default function page() {
  return (
    <>
        <CharteringHero />
        <CustomizedAirChartering />
        <WhyChoose />
        <UseCase />
        <HowItWork />
    </>
  )
}
