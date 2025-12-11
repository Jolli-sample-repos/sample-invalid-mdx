import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/invalid-nested-unclosed-tags')
}
