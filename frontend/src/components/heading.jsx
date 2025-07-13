export function Heading(props){
    const { label } = props;
    return<div className="font-bold text-4xl pt-6">
        {label}
    </div>
}