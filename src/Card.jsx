export default function Card({ques="What is my Fav Color when the momo seller is screaming hello at the top of his lungs?",ans="red",nextClick,prevClick}){
    const boxStyles={
        height: "50vh",
        width: "42vw",
        border: "solid",
        borderColor: "#BFBFBF",
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 10,
        padding: 4
    }
    const textBoxStyles={
        height: '42vh',
        width: '42vw',
        backgroundColor: '#efefef',
        borderRadius: 10,
        alignContent: 'center',
        textAlign: 'center'
    }
    const textStyles={
        fontSize: 30,
        fontWeight: 600
    }
    const buttonBoxStyles={
        display: 'flex', 
        height: '7vh',
        width: '42vw',
        marginTop: 8,
        backgroundColor: '#efefef',
        borderRadius: 10,
        textAlign: "center",
        justifyContent: 'space-between',
    }

    function changePreset(){
        if(document.querySelector('#show').innerHTML=="Show Answer"){
            document.querySelector('#show').innerHTML="Hide Answer";
            document.querySelector('#textB').innerHTML=`${ans}`;
        }
        else{
            document.querySelector('#show').innerHTML="Show Answer";
            document.querySelector('#textB').innerHTML=`${ques}`;
        }

    }

    return(<>
        <div style={boxStyles}>
            <div style={textBoxStyles}>
                <p style={textStyles} id="textB">{ques}</p>
            </div>
            <div style={buttonBoxStyles}>
                <button className="buttons" onClick={prevClick}>&lt; Previous</button>
                <button className="buttons" id="show" onClick={changePreset}>Show Answer</button>
                <button className="buttons" onClick={nextClick}>Next &gt;</button>
            </div>
        </div>
    </>);
}