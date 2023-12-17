import {ArrowUpRight} from 'lucide-react'
import Link from 'next/link'

// All announcements ever posted
const history = [
	{
		title: 'Check out our launch with Cal.ai',
		href: 'https://cal.ai',
		target: '_blank',
		date: new Date('10/15/2023')
	},
	{
		title: 'Check out our launch of Create Rubric App',
		target: '_blank',
		href: 'https://twitter.com/RubricLabs/status/1719812696575529220',
		date: new Date('11/1/2023')
	}
	// TODO: uncomment and commit
	// ,{
	// 	title: 'Your Year in Code',
	// 	target: '_blank',
	// 	href: '/blog/year-in-code',
	// 	date: new Date('12/18/2023')
	// }
]

export default function Announcement() {
	const latest = history[history.length - 1]

	return (
		<Link
			className='border-secondary group flex items-center gap-3 rounded-md border bg-neutral-100 px-3.5 py-2 text-center text-black no-underline shadow-lg dark:bg-neutral-950 dark:text-white'
			href={latest.href}
			target={latest.target}>
			<p className='space-x-1 text-sm sm:text-base'>
				<span className='font-semibold'>New:</span>
				<span>{latest.title}</span>
			</p>
			<ArrowUpRight className='transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1' />
		</Link>
	)
}
