import Button from "./Button";

export default function Hero({title='Undefined', description='Undefined Description', CTAbutton='Call-To-Action', CTAonClick=()=>{}}){
    return(<>
    <div className="top-0 h-screen w-screen flex items-center justify-center flex-col">
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="mt-4 text-lg">{description}</p>
        <Button className={'mt-4'} colorScheme="sky" onClick={()=>CTAonClick()}>{CTAbutton}</Button>
    </div>
    </>)
}