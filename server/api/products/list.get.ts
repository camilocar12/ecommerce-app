export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const url = config.public.apiUrl
  console.log(url);

  const response = await $fetch(url)

  return response
})