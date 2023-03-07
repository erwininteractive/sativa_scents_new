import swell from '../../lib/swell'

export default async function Cart() {
    const cart = await swell.cart.get()

    return (
        <>
            <h2>CART</h2> 
            { console.log(cart) }
        </>
    )
}
