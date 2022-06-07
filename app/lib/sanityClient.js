import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'd9ds6uks',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skd6mf4RVT68EDaXDQc8rtirxyUcVxLhGvVfzgodLXExq6byuNtcZ5vv4rD1KcLQmLrQ8KgMpiVDrfwqXTJVCDugFSAh4Gb3XIC8gc32y5mUjBWDdZRYGSWfwijoUohxUtRvpmlASpldDZzDIJ4kNJ9he33dcvmCoDo8tJtJC8LeiJqcgYEM',
  useCdn: false,
})
