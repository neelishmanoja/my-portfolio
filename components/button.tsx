

interface Iprops{
    text:string

}

export default function Button(props:Iprops){
    return(
        <div className="h-14 w-28 bg-purple-800 hover:bg-purple-700 rounded-3xl flex justify-center items-center text-lg font-semibold text-slate-200 font-serif cursor-pointer  ">{props.text}</div>
    )
}