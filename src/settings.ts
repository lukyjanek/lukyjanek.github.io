export const profile = {
	fullName: 'Lukáš KYJÁNEK',
	title: '',
	institute: 'Université Paris Cité, Laboratoire de Linguistique Formelle',
	author_name: 'Lukáš Kyjánek', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Morphology', description: 'I work on morphology (both inflectional and derivational) with a focus on computational approaches to predictability in morphological paradigms and semantics in general.', field: 'linguistics' },
		{ title: 'Computer lexicography', description: 'I develope several language resources and tools focused on morphology and word formation, but not exclusively.', field: 'linguistics' },
		{ title: 'Computational Linguistics', description: 'I exploit natual language processing (NLP), large language models (LLM), statistics, and machine learning to deal with the (large) language data.', field: 'computer-science' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'l.kyjanek@gmail.com',
	linkedin: '',
	x: '',
	bluesky: '',
	github: 'https://github.com/lukyjanek/',
	gitlab: '',
	scholar: 'https://scholar.google.cz/citations?user=X9bD-1QAAAAJ',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0001-6354-8549',
	academia: 'https://u-paris.academia.edu/Luk%C3%A1%C5%A1Kyj%C3%A1nek',
	researchgate: 'https://www.researchgate.net/profile/Lukas-Kyjanek',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 100,
	postPerPage: 10,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Lukáš Kyjánek',
	default_description: 'Personal academic website about Lukáš Kyjánek.',
	default_image: '/public/images/user.png',
}
