import swell from 'swell-js'

swell.init(
    process.env.NEXT_PUBLIC_SWELL_STOREFRONT_ID!, 
    process.env.NEXT_PUBLIC_SWELL_PUBLIC_STOREFRONT_KEY!,
    {
        useCamelCase: false
    }
)

export default swell

