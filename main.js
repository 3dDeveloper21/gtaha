import * as prismic from 'https://cdn.skypack.dev/@prismicio/client'

const repositoryName = 'https://gtaha.cdn.prismic.io/api/v2';
const client = prismic.createClient(repositoryName)

const init = async () => {
    const prismicDoc = await client.getFirst()
    const { title, description } = prismicDoc.data
   const titleHTML = prismic.asHTML(title)

   console.log(titleHTML)
   const descriptionHTML = prismic.asHTML(description)
   }


init()