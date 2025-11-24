export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const url = config.public.apiUrl

  const response = await $fetch(`${url}/${event.context.params?.id}`)

  return response
})