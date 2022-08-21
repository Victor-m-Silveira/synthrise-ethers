//my own database history

import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'oggp3it0',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skXO7o9XKMviKb3XbTYO7Xd9qYotgs4OMShcZvqGd4DlIXYtet9khlVpqxi3uqZ6ploGHXqFLkkpCxbQ02ioJu8Y9gyyrJ0DLNKVwfxUZZDi9ZqYYboNWMwHuKWeZSkugkxPqJDOQjpeyHKg8WPoBVFt76UDV4qyNxV7KZxvv7NXi7ej9Mvq',
  useCdn: false,
})
