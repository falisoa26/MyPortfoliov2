

type TInput = {
    className?: string
}

const Input = ({ className }: TInput) => {
    return (
        <input name='search' className={`search ${className}`} ></input>
    )
}
export default Input;