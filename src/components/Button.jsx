export const Button =  ({title,id,rightIcon, leftIcon, containerClass})=>{
    return <div>
        <button id = {id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-red ${containerClass}`}>
            {leftIcon}
            <span className="relative uppercase inline-flex text-xs overflow-hidden font-general  ">
                <div >{title}</div>
            </span>
            {rightIcon}
            </button>
    </div>
}