
export default function InputBox({label,placeholder}){
    return <div className="">
    <div className="text-sm font-bold text-left py-2">
        {label}
        <input type="text" placeholder={placeholder} className="w-full font-normal px-2 py-1 border rounded border-slate-200" />
    </div>
</div>
}