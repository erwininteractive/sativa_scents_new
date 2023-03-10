import swell from '../../lib/swell'

export default async function Products() {
    const apiResponse = await swell.get('/products', { 
        expand: ['variants', 'categories'],
        where: {
            active: true
        }
    }) as swell.ResultsResponse<swell.Product>
    const products = apiResponse.results

    if(!products) {
        return <div>here comes the music</div>
    }

    return (
        <section className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {products.map((product: swell.Product) => (
                   <div key={ product.id } className='group relative'>
                        <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                            { product?.images && (
                            <img
                                src={ product.images[0].file?.url } 
                                alt={ product.name }
                                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                            /> )}
                        </div>
                        <div className='mt-4 flex justify-between'>
                            <div>
                                <h3 className='text-sm text-sativa-white uppercase font-bold'>
                                    <a href={`/products/${product.id}`}>
                                        <span aria-hidden='true' className='absolute inset-0' />
                                        { product.name }
                                    </a>
                                </h3>
                                { product?.categories && (
                                <p className='mt-1 text-sm text-white'>{ `${product.categories[0]}` }</p>
                                )}
                            </div>
                            <p className='text-sm font-medium text-slate-500'>${ product.price }</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
