export function Biodata() {
    const Biostyle = {
        heading:{
            fontstyle:"bold",
            fontSize:"12px",
            textAlign:"center",
            color:"grey"
        },
        info: {
            color:"purple",
            fontSize:"12px"
        }
    }
    return ( 
    <>
    <div style={Biostyle.heading}>
       <h1><u>BIODATA</u></h1>
    </div>
    <div class="container">
        <div style={Biostyle.info}>
            <b>NAME: </b>Jayashree<br />
            <b>DATE OF BIRTH:</b>09/01/2003<br />
            <b>FATHER NAME:</b>Narayana Poojary<br />
        </div>
    </div>
    </>
    )
    }

