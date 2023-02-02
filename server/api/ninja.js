export default defineEventHandler(async (event) => {
  /* //handle query params

  const { name } = getQuery(event);

  //handle post data

  const { age } = await readBody(event); */

  // api call with private key

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=DpwEhCRGWVcHCDObc4FdBEU8F7mEdLWE8la5TSKw&currencies=EUR%2CUSD%2CCAD"
  );

  return data;
});
