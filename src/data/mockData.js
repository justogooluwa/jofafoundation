import education from "../../pictures/WhatsApp Image 2026-10-10 at 12.36.54 (1).jpeg"
import reachingout from "../../pictures/WhatsApp Image 2026-10-10 at 12.36.55 (2).jpeg"
import food from "../../pictures/WhatsApp Image 2026-10-10 at 12.37.01 (1).jpeg"
import team1 from "../../pictures/69-BUKZCg8U.jpg"
import team2 from "../../pictures/87-DE1s_uTY.jpg"
import team3 from "../../pictures/team6-2tx4_gG8.jpg"
import team4 from "../../pictures/staff3-B5Ggg-H3.jpg"
import team5 from "../../pictures/staff1-ZOOmnFYC.jpg"



export const stats = [
  { label: 'Lives Impacted', value: 10400, suffix: '+' },
  { label: 'Active Projects', value: 54, suffix: '+' },
  { label: 'Countries Reached', value: 12, suffix: '' },
  { label: 'Charity Navigator Rating', value: 4, suffix: '/5' },
]

export const pillars = [
  {
    id: 'water',
    title: 'Youth Development & Mentorship',
    desc: 'We invest in young people by encouraging leadership, personal growth, mentorship, and positive participation in society.',
    icon: 'Droplets',
  },
  {
    id: 'education',
    title: 'Education',
    desc: 'We believe every child deserves access to quality education, regardless of their background.',
    icon: 'BookOpen',
  },
  {
    id: 'health',
    title: 'Healthcare',
    desc: 'We are committed to improving community well-being by supporting health awareness, preventive healthcare, medical outreach, and access to essential health services, especially for underserved populations.',
    icon: 'HeartPulse',
  },
  {
    id: 'livelihoods',
    title: 'Livelihoods',
    desc: 'No one should have to go to bed hungry. We support vulnerable individuals and families by providing food assistance and promoting initiatives that improve access to nutritious meals and help communities fight hunger.',
    icon: 'Sprout',
  },
]

export const stories = [
  {
    id: 1,
    title: 'Education for All',
    excerpt: 'We believe every child deserves access to quality education, regardless of their background. Through educational support, school supplies, scholarships, and learning opportunities, we aim to empower the next generation with the knowledge and skills to build a brighter future.',
    image: education,
    date: 'Dec 2025',
    category: 'Education',
  },
  {
    id: 2,
    title: 'Child Welfare & Protection',
    excerpt: 'Every child deserves safety, dignity, and the opportunity to thrive. We aim to support vulnerable children through care initiatives, access to basic needs, educational assistance, and efforts that promote their well-being and development.',
    image: reachingout,
    date: 'Dec 2025',
    category: 'Welfare',
  },
  {
    id: 3,
    title: 'Food Security & Hunger Relief',
    excerpt: 'No one should have to go to bed hungry. We support vulnerable individuals and families by providing food assistance and promoting initiatives that improve access to nutritious meals and help communities fight hunger.',
    image: food,
    date: 'Jan 2026',
    category: 'Food',
  },
]

export const timeline = [
  { year: '2023', title: 'Founded in Lagos, Nigeria', desc: 'JOFA Foundation began with a simple vision: to make a meaningful difference in peoples lives by supporting vulnerable individuals and creating opportunities for underserved communities.' },
  { year: '2023', title: 'Clothing & Essential Donations', desc: 'We began supporting vulnerable individuals and families by sharing clothes and essential items to help meet their everyday needs and restore dignity.' },
  { year: '2024', title: 'Education & Book Donations', desc: 'We support childrens education by providing books and learning materials, helping young people access educational resources and build a brighter future.' },
  { year: '2025', title: 'Food & Household Provisions', desc: 'We extend a helping hand to families in need by distributing food and essential household provisions to support their daily living and improve their well-being.' },
  { year: '2026', title: 'Community Outreach & Empowerment', desc: 'We continue to reach underserved communities through charitable activities, donations, and initiatives designed to inspire hope and create positive change.' },
]

export const team = [
  { name: 'Fatunsin Adeleye Ezeikel', role: 'Founder & Executive Director', image: team1 },
  { name: 'Fatunsin Adebisi Gideon', role: 'Deputy Director', image: team2 },
  { name: 'Adebolu Femi', role: 'Programmes Coordinator', image: team5 },
  { name: 'Akinyemi Akinleye Isaac', role: 'Community Outreach Coordinator', image: team3 },
  { name: 'Babatunde Akinlabi Athony', role: 'Finance & Administration Officer', image: team4  },
]

export const fundAllocation = [
  { label: 'Programs', pct: 85, color: '#276E57' },
  { label: 'Fundraising', pct: 10, color: '#D4A24C' },
  { label: 'Administration', pct: 5, color: '#B8862F' },
]

export const projects = [
  {
    id: 'p1',
    title: 'Turkana Well Rehabilitation',
    category: 'Urgent',
    location: 'Turkana, Kenya',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop',
    desc: 'Six community wells built in 2014 need new pumps before the dry season. Without repair, 2,200 people lose their nearest water source.',
    raised: 12000,
    goal: 20000,
  },
  {
    id: 'p2',
    title: 'Amina Primary Expansion',
    category: 'Active',
    location: 'Kilifi, Kenya',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    desc: 'Adding two classrooms and a library to keep pace with enrollment, which has doubled in two years.',
    raised: 8400,
    goal: 15000,
  },
  {
    id: 'p3',
    title: 'Terai Rice Mill Co-op',
    category: 'Active',
    location: 'Terai, Nepal',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop',
    desc: 'Scaling the shared-mill model to eight new farming communities with training and equipment.',
    raised: 21000,
    goal: 30000,
  },
  {
    id: 'p4',
    title: 'Mobile Health Van — Guatemala',
    category: 'Urgent',
    location: 'Huehuetenango, Guatemala',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop',
    desc: 'A second van is needed to reach eleven mountain villages currently outside clinic range.',
    raised: 6100,
    goal: 25000,
  },
  {
    id: 'p5',
    title: 'Clean Water Filtration — Cusco',
    category: 'Completed',
    location: 'Cusco, Peru',
    image: 'https://images.unsplash.com/photo-1526951521990-620dc14c214b?q=80&w=1200&auto=format&fit=crop',
    desc: 'Household filtration units installed for 340 families. Waterborne illness reports dropped 68% within six months.',
    raised: 18000,
    goal: 18000,
  },
  {
    id: 'p6',
    title: 'Girls\u2019 Scholarship Fund',
    category: 'Active',
    location: 'Multi-country',
    image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1200&auto=format&fit=crop',
    desc: 'Full-year scholarships covering tuition, uniforms, and supplies for girls at risk of dropping out.',
    raised: 27500,
    goal: 40000,
  },
]

export const openings = [
  {
    id: 'o1',
    title: 'Field Volunteer — Water Projects',
    type: 'Volunteer',
    commitment: '3+ months, on-site',
    desc: 'Support well-drilling teams and community water-safety training in East Africa. No engineering background required — just reliability and a willingness to learn.',
  },
  {
    id: 'o2',
    title: 'Remote Grant Writer',
    type: 'Volunteer',
    commitment: '5 hrs/week, remote',
    desc: 'Help us secure funding by researching and drafting grant proposals alongside our development team.',
  },
  {
    id: 'o3',
    title: 'Program Manager, Livelihoods',
    type: 'Career',
    commitment: 'Full-time, Nairobi HQ',
    desc: 'Own the day-to-day of our microloan and co-op programs, from partner relationships to impact reporting.',
  },
  {
    id: 'o4',
    title: 'Communications Associate',
    type: 'Career',
    commitment: 'Full-time, remote',
    desc: 'Tell the stories behind our projects across email, social, and our annual report.',
  },
]

export const testimonials = [
  { name: 'Fatima R.', role: 'Field Volunteer, 2024\u2013present', quote: 'I came for three months and stayed for two years. You see exactly where the money goes — that\u2019s rare.', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop' },
  { name: 'James K.', role: 'Remote Grant Writer', quote: 'Working from home, I still get monthly updates on the actual wells our grants funded. It never feels abstract.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Lin C.', role: 'Field Volunteer, 2023', quote: 'The training before deployment was thorough. I felt useful on day one, not day thirty.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
]
