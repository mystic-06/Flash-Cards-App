export default function ProgressBar({comp=0,rem=100}){
    const mainConStyles = {
        height: 21,
        width: '42vw',
        borderRadius: 10,
        border: 'solid',
        borderWidth: 2,
        borderColor: '#BFBFBF',
        padding: 3
    }
    const fillStyles = {
        height: '100%',
        width: `${(comp/rem)*100}%`,
        backgroundColor: "#BFBFBF",
        borderRadius: 5,
        textAlign: 'right',
    }
    const labelStyles = {
        padding: 3,     
        color: '#4A4A4A',
        fontWeight: 'bold'
    }
    return(<>
        <div style={mainConStyles}>
            <div style={fillStyles}>
                <span style={labelStyles}>{(comp/rem)*100}%</span>
            </div>
        </div>
    </>)
}