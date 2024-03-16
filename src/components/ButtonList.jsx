import Button from "./Button"

const ButtonList = () => {
    const list = ['All','Gaming','Songs','Movie','Comedy','Cooking','Horror','Valentine']
    return (
        <div className="flex">
            { list.map((item,index) => <Button key={index} name={item}/>)}
        </div>
    )
}

export default ButtonList