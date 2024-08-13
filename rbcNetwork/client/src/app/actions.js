'use server'
import { cookies } from 'next/headers'
async function create() {
  const currentTheme = cookies.get('currentTheme')
  cookies().set('currentTheme', currentTheme);
}