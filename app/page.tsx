import Link from 'next/link'
import Image from 'next/image'
import allitems from '../public/images/allproducts_transparent.png'

export default function HomePage() {
    return (
        <>
            <section id='hero'>
                <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 sm:flex-row'>
                    <div className='flex flex-col mb-32 space-y-12 sm:w-1/2'>
                        <h2 className='max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left'>
                            AROMATHERAPY FOR BODY AND MIND...
                        </h2>
                        <p className='max-w-sm text-center text-sativa-white sm:text-left'>
                            Experience the ultimate relaxation with our medicated body soak. 
                            Infused with the natural benefits of CBD, our soak is designed to soothe both the body and mind. 
                            The unique blend of essential oils creates an aromatherapy experience that will leave you feeling refreshed and rejuvenated. 
                            Perfect for unwinding after a long day or for a self-care Sunday, 
                            our body soak is a simple and effective way to incorporate CBD into your daily routine. 
                            Soak in the benefits of CBD and let the stress of the day melt away.
                        </p>
                        <div className='flex justify-center sm:justify-start'>
                            <Link href='/' className='p-3 px-6 pt-2 text-sativa-white bg-sativa-purple rounded-full baseline hover:text-sativa-blue hover:bg-sativa-white'>
                                Shop for Products
                            </Link>
                        </div>
                    </div>
                    <div className='sm:w-1/2'>
                        <Image src={ allitems } alt='Aftermath' />
                    </div>
                </div>
            </section>
            <section id='features'>
                <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 sm:space-y-0 sm:flex-row'>
                    <div className='flex flex-col space-y-12 sm:w-1/2'>
                        <h2 className='max-w-md text-4xl font-bold text-center sm:text-left'>
                            What's difference about Sativa Scents?
                        </h2>
                        <p className='max-w-sm text-center text-sativa-white sm:text-left'>
                            our product combines the soothing properties of CBD with carefully 
                            selected botanicals and minerals to create a truly restorative experience. 
                            Each soak is designed to relax your body, calm your mind, 
                            and leave you feeling refreshed and rejuvenated.
                        </p>
                    </div>
                    <div className='flex flex-col space-y-8 sm:w-1/2'>
                        <div className='flex flex-col space-y-3 sm:space-y-0 sm:space-x-6 sm:flex-row'>
                            <div className='rounded-l-full bg-brightRedSupLight sm:bg-transparent'>
                                <div className='flex items-center space-x-2'>
                                    <div className='px-4 py-2 text-sativa-blue rounded-full sm:py-1 bg-sativa-green'>01</div>
                                    <h3 className='text-base font-bold sm:mb-4 sm:hidden'>Stress Relief</h3>
                                </div>
                            </div>
                            <div>
                                <h3 className='hidden mb-4 text-lg font-bold sm:block'>Stress Relief</h3>
                                <p className='text-sativa-white'>
                                    The soothing properties of CBD can help to reduce feelings of anxiety 
                                    and promote a sense of calm and relaxation. When used in a bath soak, 
                                    CBD can help to ease tension in the muscles and promote overall well-being.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-3 sm:space-y-0 sm:space-x-6 sm:flex-row'>
                            <div className='rounded-l-full bg-brightRedSupLight sm:bg-transparent'>
                                <div className='flex items-center space-x-2'>
                                    <div className='px-4 py-2 text-sativa-blue rounded-full sm:py-1 bg-sativa-green'>02</div>
                                    <h3 className='text-base font-bold sm:mb-4 sm:hidden'>Pain Relief</h3>
                                </div>
                            </div>
                            <div>
                                <h3 className='hidden mb-4 text-lg font-bold sm:block'>Pain Relief</h3>
                                <p className='text-slate-400'>
                                    CBD is known to have anti-inflammatory properties which can help to 
                                    alleviate pain and soreness in the body. A CBD-infused bath soak 
                                    can be especially beneficial for those with conditions such as 
                                    arthritis or fibromyalgia.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-3 sm:space-y-0 sm:space-x-6 sm:flex-row'>
                            <div className='rounded-l-full bg-brightRedSupLight sm:bg-transparent'>
                                <div className='flex items-center space-x-2'>
                                    <div className='px-4 py-2 text-sativa-blue rounded-full sm:py-1 bg-sativa-green'>03</div>
                                    <h3 className='text-base font-bold sm:mb-4 sm:hidden'>Improved Skin Health</h3>
                                </div>
                            </div>
                            <div>
                                <h3 className='hidden mb-4 text-lg font-bold sm:block'>Improved Skin Health</h3>
                                <p className='text-slate-400'>
                                    CBD is rich in antioxidants and can help to nourish and hydrate the skin. 
                                    A CBD-infused bath soak can help to improve skin hydration and elasticity, 
                                    leaving your skin feeling soft, smooth and rejuvenated.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
