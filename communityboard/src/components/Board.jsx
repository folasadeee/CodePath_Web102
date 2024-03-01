import Card from './Card'


const Board = () => {

    return (
           <div className="card-container">
                <Card name='Pizza Pals' type='Italian' link='https://google.com'/>
                <Card name='Rockin&apos; Tacos' type='Tex-Mex'/>
                <Card name='Peter&apos;s Chips & Dips' type='British'/>
            </div>
    );
}

export default Board