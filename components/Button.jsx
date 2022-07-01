export default function Button({className, colorScheme='sky', onClick=()=>{}, children=null}){
    return(<>
    <button className={`${className} bg-sky-600 text-white px-4 py-2 rounded-lg mx-2 hover:bg-sky-500  transition ease-in-out duration-500`} onClick={(e)=>onClick()}>
        {children}
    </button>
    </>)
}