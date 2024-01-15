import Hero from '~/components/AgencyHero'
import {CTA} from '~/components/CTA'
import FAQs from '~/components/FAQs'
import HowWeWork from '~/components/HowWeWork'
import {Logos} from '~/components/Logos'
import Projects from '~/components/Projects'
import Testimonials from '~/components/Testimonials'
import getMetadata from '~/utils/getMetadata'

export const metadata = getMetadata({
	title: 'Agency',
	description:
		'We make AI-enabled magical software. Rubric is a digital studio specializing in LangChain, Next.js, and AI-enabled product development.',
	path: 'agency'
})

export default function Agency() {
	return (
		<div className='flex flex-col'>
			<Hero />
			<Logos />
			<Projects />
			<HowWeWork />
			<Testimonials />
			<FAQs />
			<CTA />
		</div>
	)
}
