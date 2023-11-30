
import down from '../../../pdf/Antsa.pdf'

// const down = require('../../../pdf/Antsa.pdf')


// interface IButton {
//     name: string,
//     link: string

// }

// const boutton: IButton[] = [{ name: "Down cv", link: "/download" }]

const Buttoncv = () => {
    return (
        <>
            <a href={down} download="cvAntsa" className='Down'>Download CV</a>
        </>
    )
}

export default Buttoncv;